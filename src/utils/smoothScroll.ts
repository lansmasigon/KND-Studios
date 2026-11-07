// Lenis + GSAP ScrollTrigger inspired smooth inertia scroll & velocity engine

type ScrollListener = (state: ScrollState) => void

export interface ScrollState {
  scrollY: number
  targetY: number
  velocity: number
  progress: number
  direction: 1 | -1
  limit: number
}

class SmoothScrollEngine {
  private state: ScrollState = {
    scrollY: 0,
    targetY: 0,
    velocity: 0,
    progress: 0,
    direction: 1,
    limit: 1,
  }

  private listeners = new Set<ScrollListener>()
  private rafId: number | null = null
  private isRunning = false
  private isWheelActive = false
  private lerpFactor = 0.095

  init() {
    if (typeof window === 'undefined' || this.isRunning) return
    this.isRunning = true

    this.state.scrollY = window.scrollY
    this.state.targetY = window.scrollY
    this.updateLimit()

    window.addEventListener('wheel', this.onWheel, { passive: false })
    window.addEventListener('scroll', this.onNativeScroll, { passive: true })
    window.addEventListener('resize', this.updateLimit, { passive: true })
    window.addEventListener('keydown', this.onKeyDown, { passive: true })

    this.tick()
  }

  destroy() {
    if (typeof window === 'undefined') return
    this.isRunning = false
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
    window.removeEventListener('wheel', this.onWheel)
    window.removeEventListener('scroll', this.onNativeScroll)
    window.removeEventListener('resize', this.updateLimit)
    window.removeEventListener('keydown', this.onKeyDown)
  }

  private updateLimit = () => {
    if (typeof document === 'undefined') return
    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    )
    this.state.limit = maxScroll
    this.state.targetY = Math.min(this.state.targetY, maxScroll)
  }

  private onWheel = (e: WheelEvent) => {
    // Allow zoom or horizontal scroll or scrollable modals to work naturally
    if (e.ctrlKey || e.metaKey) return

    this.updateLimit()
    this.isWheelActive = true

    const delta = e.deltaY
    this.state.targetY = Math.max(
      0,
      Math.min(this.state.limit, this.state.targetY + delta * 1.05)
    )
    if (Math.abs(delta) > 0.5) {
      this.state.direction = delta > 0 ? 1 : -1
    }

    e.preventDefault()
  }

  private onNativeScroll = () => {
    if (!this.isWheelActive) {
      const current = window.scrollY
      const diff = current - this.state.scrollY
      if (Math.abs(diff) > 0.5) {
        this.state.direction = diff > 0 ? 1 : -1
      }
      this.state.velocity = diff
      this.state.scrollY = current
      this.state.targetY = current
      this.updateLimit()
      this.state.progress = Math.min(1, Math.max(0, current / this.state.limit))
      this.emit()
    }
  }

  private onKeyDown = (e: KeyboardEvent) => {
    if (
      ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(
        e.key
      )
    ) {
      this.isWheelActive = false
    }
  }

  scrollTo(target: number | string | HTMLElement, immediate = false) {
    this.updateLimit()
    let dest = 0

    if (typeof target === 'number') {
      dest = target
    } else if (typeof target === 'string') {
      const el = document.querySelector(target)
      if (el) {
        dest = el.getBoundingClientRect().top + window.scrollY
      }
    } else if (target instanceof HTMLElement) {
      dest = target.getBoundingClientRect().top + window.scrollY
    }

    dest = Math.max(0, Math.min(this.state.limit, dest))

    if (immediate) {
      this.isWheelActive = false
      this.state.scrollY = dest
      this.state.targetY = dest
      this.state.velocity = 0
      window.scrollTo(0, dest)
      this.emit()
    } else {
      this.isWheelActive = true
      this.state.targetY = dest
    }
  }

  private tick = () => {
    if (!this.isRunning) return

    if (this.isWheelActive) {
      const diff = this.state.targetY - this.state.scrollY
      if (Math.abs(diff) > 0.15) {
        const nextY = this.state.scrollY + diff * this.lerpFactor
        this.state.velocity = nextY - this.state.scrollY
        this.state.scrollY = nextY
        window.scrollTo(0, Math.round(this.state.scrollY * 10) / 10)
      } else {
        this.state.scrollY = this.state.targetY
        this.state.velocity *= 0.8
        window.scrollTo(0, this.state.targetY)
        this.isWheelActive = false
      }
    } else {
      this.state.velocity *= 0.85
      if (Math.abs(this.state.velocity) < 0.05) {
        this.state.velocity = 0
      }
    }

    this.updateLimit()
    this.state.progress = Math.min(
      1,
      Math.max(0, this.state.scrollY / this.state.limit)
    )

    // Set root CSS variables for kinetic CSS animations
    const root = document.documentElement
    const clampedVel = Math.max(-60, Math.min(60, this.state.velocity))
    root.style.setProperty('--scroll-y', `${this.state.scrollY.toFixed(1)}px`)
    root.style.setProperty('--scroll-velocity', clampedVel.toFixed(2))
    root.style.setProperty('--scroll-progress', this.state.progress.toFixed(4))
    root.style.setProperty(
      '--scroll-skew',
      `${(clampedVel * 0.065).toFixed(2)}deg`
    )

    this.emit()
    this.rafId = requestAnimationFrame(this.tick)
  }

  private emit() {
    this.listeners.forEach((fn) => fn(this.state))
  }

  subscribe(fn: ScrollListener) {
    this.listeners.add(fn)
    fn(this.state)
    return () => {
      this.listeners.delete(fn)
    }
  }

  getState() {
    return this.state
  }
}

export const smoothScroll = new SmoothScrollEngine()

