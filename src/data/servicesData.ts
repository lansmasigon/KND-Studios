export interface ServiceWorkSlide {
  id: string
  label: string
  kicker: string
  headline: string
  subheadline: string
  metrics: { label: string; value: string }[]
  cards: { title: string; meta: string; badge: string }[]
  accentMode?: 'crimson' | 'dark' | 'light'
  image?: string
}

export interface ServiceWorkItem {
  id: string
  number: string
  title: string
  client: string
  year: string
  categoryTag: string
  url: string
  summary: string
  stack: string[]
  slides: ServiceWorkSlide[]
}

export interface ServiceCategory {
  slug: string
  index: string
  title: string
  description: string
  works: ServiceWorkItem[]
}

export const servicesData: ServiceCategory[] = [
  {
    slug: 'web-development',
    index: '01',
    title: 'WEB DEVELOPMENT',
    description:
      'Fast, accessible websites and web apps built to move your business forward.',
    works: [
      {
        id: 'juanitos-resort',
        number: '01',
        title: 'Juanitos Resort',
        client: 'Juanitos Resort',
        year: '2026',
        categoryTag: 'WEB DEVELOPMENT',
        url: 'juanitosresort.com',
        summary:
          'Modern resort website crafted to showcase accommodations, amenities, and seamless guest booking inquiries.',
        stack: ['Web Development', 'Responsive UI', 'Booking Experience'],
        slides: [
          {
            id: 'jr-hero',
            label: '01 / RESORT LANDING',
            kicker: 'PRIVATE COASTAL SANCTUARY',
            headline: 'ESCAPE TO JUANITOS RESORT',
            subheadline:
              'Direct villa reservations, curated island experiences, and real-time availability.',
            accentMode: 'crimson',
            metrics: [
              { label: 'CHECK-IN', value: 'INSTANT BOOK' },
              { label: 'VILLAS & SUITES', value: '24 UNITS' },
              { label: 'GUEST RATING', value: '4.9 ★' },
            ],
            cards: [
              {
                title: 'Oceanfront Pool Villa',
                meta: 'Private Infinity Deck • 4 Guests',
                badge: 'AVAILABLE',
              },
              {
                title: 'Garden Family Casita',
                meta: 'Tropical Courtyard • 6 Guests',
                badge: 'AVAILABLE',
              },
            ],
          },
          {
            id: 'jr-suites',
            label: '02 / ACCOMMODATIONS SHOWCASE',
            kicker: 'CURATED ROOMS & AMENITIES',
            headline: 'DESIGNED FOR REST & LEISURE',
            subheadline:
              'Interactive room galleries with panoramic previews, seasonal rates, and package add-ons.',
            accentMode: 'dark',
            metrics: [
              { label: 'INFINITY POOL', value: 'OPEN 6AM–10PM' },
              { label: 'PAVILION DINING', value: 'FARM TO TABLE' },
              { label: 'EVENTS HALL', value: 'UP TO 150 PAX' },
            ],
            cards: [
              {
                title: 'Deluxe Sunset Suite',
                meta: 'Balcony View • Breakfast Included',
                badge: 'POPULAR',
              },
              {
                title: 'Barkada Loft Villa',
                meta: 'Private Lounge • Direct Pool Access',
                badge: 'FEATURED',
              },
            ],
          },
          {
            id: 'jr-booking',
            label: '03 / SEAMLESS RESERVATION FLOW',
            kicker: 'DIRECT BOOKING ENGINE',
            headline: 'RESERVE IN THREE SIMPLE STEPS',
            subheadline:
              'Streamlined date selection, guest count configuration, and instant reservation confirmation.',
            accentMode: 'light',
            metrics: [
              { label: 'STEP 01', value: 'SELECT DATES' },
              { label: 'STEP 02', value: 'CHOOSE VILLA' },
              { label: 'STEP 03', value: 'CONFIRM STAY' },
            ],
            cards: [
              {
                title: 'Weekend Getaway Package',
                meta: '3D2N Stay + Welcome Drinks',
                badge: 'INSTANT QUOTE',
              },
              {
                title: 'Private Event & Wedding Inquiry',
                meta: 'Full Resort Buyout Options',
                badge: 'CONCIERGE',
              },
            ],
          },
        ],
      },
      {
        id: 'tefora-construction',
        number: '02',
        title: 'Tefora Construction',
        client: 'Tefora Construction',
        year: '2026',
        categoryTag: 'WEB DEVELOPMENT',
        url: 'teforaconstruction.com',
        summary:
          'Corporate web platform built to highlight engineering capabilities, completed infrastructure projects, and client consultations.',
        stack: ['Web Development', 'Corporate Website', 'Project Portfolio'],
        slides: [
          {
            id: 'tc-hero',
            label: '01 / CORPORATE OVERVIEW',
            kicker: 'GENERAL CONTRACTING & CIVIL ENGINEERING',
            headline: 'BUILDING ENDURING INFRASTRUCTURE',
            subheadline:
              'Precision commercial construction, structural engineering, and turnkey project delivery.',
            accentMode: 'dark',
            metrics: [
              { label: 'COMPLETED PROJECTS', value: '85+ SITES' },
              { label: 'SAFETY RECORD', value: '100% COMPLIANT' },
              { label: 'DELIVERY', value: 'TURNKEY BUILD' },
            ],
            cards: [
              {
                title: 'Commercial & Industrial Facilities',
                meta: 'Structural Steel & Reinforced Concrete',
                badge: 'CORE SERVICE',
              },
              {
                title: 'Design-Build & Project Management',
                meta: 'End-to-End Site Execution',
                badge: 'ISO STANDARD',
              },
            ],
          },
          {
            id: 'tc-portfolio',
            label: '02 / PROJECT PORTFOLIO',
            kicker: 'FEATURED DEVELOPMENTS',
            headline: 'PROVEN TRACK RECORD ON SITE',
            subheadline:
              'Filterable showcase of commercial buildings, warehouses, and residential developments.',
            accentMode: 'crimson',
            metrics: [
              { label: 'COMMERCIAL', value: '34 PROJECTS' },
              { label: 'INDUSTRIAL', value: '28 PROJECTS' },
              { label: 'RESIDENTIAL', value: '23 PROJECTS' },
            ],
            cards: [
              {
                title: 'Metro Logistics Distribution Hub',
                meta: '14,500 sqm Structural Warehouse',
                badge: 'COMPLETED',
              },
              {
                title: 'Apex Corporate Center Fit-Out',
                meta: '8-Storey Commercial Complex',
                badge: 'COMPLETED',
              },
            ],
          },
          {
            id: 'tc-consultation',
            label: '03 / ESTIMATE & CONSULTATION',
            kicker: 'CLIENT PARTNERSHIP PORTAL',
            headline: 'REQUEST A PROJECT ASSESSMENT',
            subheadline:
              'Direct engineering consultation, bill-of-quantities inquiry, and site inspection scheduling.',
            accentMode: 'light',
            metrics: [
              { label: 'RESPONSE SLA', value: '< 24 HOURS' },
              { label: 'SITE VISIT', value: 'SCHEDULE ONLINE' },
              { label: 'ESTIMATE', value: 'TRANSPARENT BOQ' },
            ],
            cards: [
              {
                title: 'Upload Architectural Blueprints',
                meta: 'Fast-Track Structural Costing',
                badge: 'ONLINE PORTAL',
              },
              {
                title: 'Book Engineering Site Inspection',
                meta: 'Direct Consultation with Lead Engineers',
                badge: 'SCHEDULE',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'automation',
    index: '02',
    title: 'AUTOMATION',
    description:
      'We streamline repetitive tasks and internal workflows so your team can focus on growth.',
    works: [],
  },
  {
    slug: 'web-design',
    index: '03',
    title: 'WEB DESIGN',
    description:
      'Clean, strategic design systems that make your brand memorable and easy to trust.',
    works: [],
  },
  {
    slug: 'systems-development',
    index: '04',
    title: 'SYSTEMS DEVELOPMENT',
    description:
      'Custom tools and product systems that simplify operations and support long-term scale.',
    works: [
      {
        id: 'inventory-system-juanitos',
        number: '01',
        title: 'Inventory System - Juanitos',
        client: 'Juanitos',
        year: '2026',
        categoryTag: 'SYSTEMS DEVELOPMENT',
        url: 'inventory.juanitos.sys',
        summary:
          'Custom inventory management system designed to track stock levels, supplies, and daily operational movement in real time.',
        stack: ['Custom System', 'Inventory Tracking', 'Operations Management'],
        slides: [
          {
            id: 'ij-dashboard',
            label: '01 / LIVE STOCK CONTROL',
            kicker: 'JUANITOS OPERATIONS CORE',
            headline: 'REAL-TIME INVENTORY DASHBOARD',
            subheadline:
              'Centralized visibility across housekeeping, kitchen, maintenance, and guest amenities.',
            accentMode: 'dark',
            metrics: [
              { label: 'TRACKED SKUS', value: '1,240 ITEMS' },
              { label: 'STOCK ACCURACY', value: '99.8%' },
              { label: 'LOW-STOCK ALERTS', value: 'AUTOMATED' },
            ],
            cards: [
              {
                title: 'Housekeeping & Linen Stock',
                meta: '482 Units Available • Optimal Par Level',
                badge: 'IN STOCK',
              },
              {
                title: 'F&B Kitchen Consumables',
                meta: 'Daily Usage Synced • 3 Items Near Threshold',
                badge: 'MONITORED',
              },
            ],
          },
          {
            id: 'ij-movements',
            label: '02 / STOCK IN & STOCK OUT LEDGER',
            kicker: 'DAILY MOVEMENT LOGS',
            headline: 'EVERY ITEM ACCOUNTED FOR',
            subheadline:
              'Instant barcode/SKU lookup, department requisition tracking, and shift handover audits.',
            accentMode: 'crimson',
            metrics: [
              { label: 'DAILY LOGS', value: 'REAL-TIME SYNC' },
              { label: 'DEPARTMENTS', value: '6 CONNECTED' },
              { label: 'AUDIT TRAIL', value: '100% TRACEABLE' },
            ],
            cards: [
              {
                title: 'Villa Housekeeping Dispatch #409',
                meta: 'Issued 24 Amenity Kits • Logged by Staff',
                badge: 'DISPATCHED',
              },
              {
                title: 'Supplier Delivery Receipt #118',
                meta: 'Received +150 Beverage Cases • Verified',
                badge: 'RECEIVED',
              },
            ],
          },
          {
            id: 'ij-reports',
            label: '03 / REORDER & ANALYTICS',
            kicker: 'PROCUREMENT & CONSUMPTION REPORTS',
            headline: 'PREVENT STOCKOUTS BEFORE THEY HAPPEN',
            subheadline:
              'Automated par-level alerts, supplier purchase order generation, and monthly usage reports.',
            accentMode: 'light',
            metrics: [
              { label: 'STOCKOUTS', value: 'ZERO CRITICAL' },
              { label: 'EXPORT', value: 'CSV / PDF REPORT' },
              { label: 'REORDER', value: '1-CLICK PO' },
            ],
            cards: [
              {
                title: 'Monthly Consumption Breakdown',
                meta: 'Cost Center & Department Usage',
                badge: 'GENERATED',
              },
              {
                title: 'Automated Restock Queue',
                meta: 'Ready for Purchasing Approval',
                badge: 'READY',
              },
            ],
          },
        ],
      },
    ],
  },
]
