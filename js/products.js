/**
 * Nexora Home & Tech - Product Catalog Data
 * Exactly 14 curated products with realistic specs, warranty, and SVG device illustrations.
 */

const PRODUCTS = [
  // --- AUDIO ---
  {
    id: "prod-audio-01",
    name: "Pulse Wireless Earbuds",
    category: "audio",
    categoryName: "Audio",
    price: 59,
    originalPrice: 69,
    onSale: true,
    rating: 4.8,
    reviewsCount: 142,
    badge: "Sale",
    inStock: true,
    shortDescription: "True wireless earbuds with Active Noise Cancellation and 28h total playback.",
    warranty: "1-year warranty",
    specs: {
      "Noise Cancellation": "Active Noise Cancellation (ANC) + Ambient Mode",
      "Battery Life": "Up to 28 hours (7h earbuds + 21h charging case)",
      "Charging": "USB-C fast charge (10 mins = 2 hours playback)",
      "Water Resistance": "IPX4 splash & sweat resistant",
      "Connectivity": "Bluetooth 5.3 (10m range)",
      "Microphones": "Quad mics with background noise suppression"
    },
    inTheBox: [
      "Pulse Wireless Earbuds (Left & Right)",
      "Pocket Wireless Charging Case",
      "3 pairs silicone ear tips (S, M, L)",
      "USB-C to USB-A Charging Cable",
      "Quick Start & Warranty Guide"
    ],
    bestSuitedFor: "Everyday commuting, workouts, hands-free voice calls, and immersive travel listening.",
    svgType: "earbuds"
  },
  {
    id: "prod-audio-02",
    name: "Studio Over-Ear Headphones",
    category: "audio",
    categoryName: "Audio",
    price: 89,
    originalPrice: 99,
    onSale: true,
    rating: 4.9,
    reviewsCount: 98,
    badge: "Popular",
    inStock: true,
    shortDescription: "Foldable studio headphones with 40h battery and deep acoustic clarity.",
    warranty: "1-year warranty",
    specs: {
      "Drivers": "40mm custom high-resolution dynamic drivers",
      "Battery Life": "Up to 40 hours wireless playtime",
      "Design": "Collapsible folding frame with memory foam cushions",
      "Connectivity": "Bluetooth 5.2 + 3.5mm wired AUX backup mode",
      "Charging Time": "2 hours via USB-C",
      "Weight": "240g lightweight ergonomic build"
    },
    inTheBox: [
      "Studio Over-Ear Headphones",
      "Protective Hard-Shell Travel Pouch",
      "1.2m 3.5mm Audio Cable",
      "USB-C Charging Cable",
      "User Manual"
    ],
    bestSuitedFor: "Long-haul flights, home office concentration, audio editing, and extended listening comfort.",
    svgType: "headphones"
  },
  {
    id: "prod-audio-03",
    name: "Boom Mini Bluetooth Speaker",
    category: "audio",
    categoryName: "Audio",
    price: 45,
    originalPrice: null,
    onSale: false,
    rating: 4.7,
    reviewsCount: 86,
    badge: null,
    inStock: true,
    shortDescription: "Ultra-rugged IP67 waterproof speaker with punchy 360-degree sound.",
    warranty: "1-year warranty",
    specs: {
      "Water & Dust Rating": "IP67 submersible (up to 1m for 30 minutes)",
      "Battery Life": "Up to 12 hours continuous playback",
      "Sound Output": "10W RMS with dual passive bass radiators",
      "Wireless Range": "Up to 15 meters via Bluetooth 5.3",
      "Portability": "Integrated high-durability braided lanyard",
      "Charging": "USB-C quick charge (3 hours to full)"
    },
    inTheBox: [
      "Boom Mini Bluetooth Speaker",
      "Integrated Braided Carry Loop",
      "USB-C Charging Cable",
      "Safety & Warranty Card"
    ],
    bestSuitedFor: "Outdoor picnics, beach or poolside use, showers, biking, and compact travel.",
    svgType: "speaker"
  },

  // --- KITCHEN APPLIANCES ---
  {
    id: "prod-kitchen-01",
    name: "Whirl 1.5L Countertop Blender",
    category: "kitchen",
    categoryName: "Kitchen Appliances",
    price: 64,
    originalPrice: null,
    onSale: false,
    rating: 4.8,
    reviewsCount: 115,
    badge: "Staff Pick",
    inStock: true,
    shortDescription: "700W motor with 6 hardened steel blades and 1.5L BPA-free jar.",
    warranty: "2-year warranty",
    specs: {
      "Motor Power": "700 Watts high-torque motor",
      "Jar Capacity": "1.5L (50 oz) BPA-free Tritan pitcher",
      "Blades": "6-point hardened stainless steel crushing blades",
      "Speed Settings": "3 speed presets + Instant Pulse mode",
      "Safety": "Dual safety-interlock lid & non-slip suction feet",
      "Dishwasher Safe": "Jar, lid, and measuring cap are top-rack safe"
    },
    inTheBox: [
      "Whirl 700W Blender Motor Base",
      "1.5L BPA-Free Pitcher with Pour Spout",
      "Vented Lid with 30ml Measurement Cap",
      "Quick Recipe Inspiration Booklet",
      "User Manual"
    ],
    bestSuitedFor: "Smoothies, shakes, pureed soups, crushed ice, and compact kitchens.",
    svgType: "blender"
  },
  {
    id: "prod-kitchen-02",
    name: "Crisp 5L Air Fryer",
    category: "kitchen",
    categoryName: "Kitchen Appliances",
    price: 99,
    originalPrice: 119,
    onSale: true,
    rating: 4.9,
    reviewsCount: 230,
    badge: "Sale",
    inStock: true,
    shortDescription: "Rapid convection air fryer with 8 one-touch presets and 5L basket.",
    warranty: "2-year warranty",
    specs: {
      "Power Rating": "1500W rapid vortex convection heat",
      "Basket Capacity": "5.0 Liters (serves 3-5 people)",
      "Display": "Digital LED touch panel with angled interface",
      "Temperature Range": "80°C – 200°C (175°F – 400°F)",
      "Presets": "8 presets (Fries, Chicken, Fish, Steak, Bake, Veggies, Dehydrate, Reheat)",
      "Safety": "Auto-pause upon basket pullout + overheat protection"
    },
    inTheBox: [
      "Crisp 5L Air Fryer Main Console",
      "Removable Non-Stick Fry Basket",
      "Dishwasher-Safe Crisper Insert Plate",
      "Printed Cooking Time & Temperature Cheat Sheet",
      "Instruction Manual"
    ],
    bestSuitedFor: "Healthy family dinners, fast weeknight cooking with 85% less oil, and reheating leftovers.",
    svgType: "airfryer"
  },
  {
    id: "prod-kitchen-03",
    name: "Brew Plus Drip Coffee Maker",
    category: "kitchen",
    categoryName: "Kitchen Appliances",
    price: 54,
    originalPrice: null,
    onSale: false,
    rating: 4.6,
    reviewsCount: 74,
    badge: null,
    inStock: true,
    shortDescription: "12-cup programmable coffee maker with 24h delay brew timer.",
    warranty: "1-year warranty",
    specs: {
      "Capacity": "12 standard cups (1.8 Liters)",
      "Programmability": "24-hour advance digital timer with backlit LCD",
      "Filter": "Reusable gold-tone mesh filter (no paper filters needed)",
      "Warming Function": "Non-stick warming plate with 2-hour auto-off",
      "Convenience": "Mid-brew Grab-a-Cup anti-drip valve",
      "Water Window": "Clear water level gauge with cup markings"
    },
    inTheBox: [
      "Brew Plus Coffee Maker Machine",
      "12-Cup Heat-Resistant Borosilicate Glass Carafe",
      "Washable Reusable Gold-Tone Mesh Filter",
      "Coffee Measuring Scoop",
      "Instruction Guide"
    ],
    bestSuitedFor: "Daily coffee drinkers, families, and waking up to hot brewed coffee ready in the morning.",
    svgType: "coffeemaker"
  },
  {
    id: "prod-kitchen-04",
    name: "Swift 1.7L Electric Kettle",
    category: "kitchen",
    categoryName: "Kitchen Appliances",
    price: 32,
    originalPrice: null,
    onSale: false,
    rating: 4.7,
    reviewsCount: 91,
    badge: "Budget Pick",
    inStock: true,
    shortDescription: "Stainless steel 1500W rapid-boil kettle with auto shut-off.",
    warranty: "1-year warranty",
    specs: {
      "Capacity": "1.7 Liters (approx. 7 cups)",
      "Boil Speed": "1500W heating element boils 1L in approx. 4 minutes",
      "Interior Material": "100% food-grade 304 stainless steel interior & spout",
      "Safety Systems": "Strix thermostat auto shut-off & boil-dry protection",
      "Base Design": "360-degree swivel cordless power base with cord wrap",
      "Indicator": "Subtle LED heating indicator light"
    },
    inTheBox: [
      "Swift 1.7L Stainless Steel Kettle",
      "360-Degree Swivel Power Base with Cord Storage",
      "Removable Anti-Scale Mesh Spout Filter",
      "User Instructions"
    ],
    bestSuitedFor: "Fast boiling for tea, French press coffee, oatmeal, noodles, and everyday kitchen prep.",
    svgType: "kettle"
  },

  // --- HOME & CLEANING ---
  {
    id: "prod-home-01",
    name: "Glide Robot Vacuum",
    category: "home",
    categoryName: "Home & Cleaning",
    price: 199,
    originalPrice: 229,
    onSale: true,
    rating: 4.8,
    reviewsCount: 167,
    badge: "Sale",
    inStock: true,
    shortDescription: "2500Pa smart suction vacuum with Wi-Fi app scheduling and auto-docking.",
    warranty: "2-year warranty",
    specs: {
      "Suction Power": "2500Pa high-efficiency brushless motor",
      "Battery & Runtime": "2600mAh Li-ion battery, up to 120 minutes on hard floors",
      "Connectivity": "Wi-Fi 2.4GHz with companion mobile app control",
      "Profile Height": "Ultra-slim 7.8cm (3.1 in) body cleans under low furniture",
      "Sensors": "Infrared anti-drop cliff sensors & smart bumper navigation",
      "Dustbin": "550ml washable dust container with triple-layer filtration"
    },
    inTheBox: [
      "Glide Robot Vacuum Cleaner",
      "Automatic Charging Base Station",
      "AC Power Adapter",
      "2x Replacement Edge-Sweeping Brushes",
      "1x Replacement High-Efficiency Filter",
      "Bristle Cleaning Tool",
      "User Manual"
    ],
    bestSuitedFor: "Hardwood floors, tiles, low-pile rugs, pet hair management, and busy hands-free households.",
    svgType: "robotvacuum"
  },
  {
    id: "prod-home-02",
    name: "PureAir Mini Air Purifier",
    category: "home",
    categoryName: "Home & Cleaning",
    price: 129,
    originalPrice: null,
    onSale: false,
    rating: 4.9,
    reviewsCount: 104,
    badge: "Popular",
    inStock: true,
    shortDescription: "True HEPA filtration purifying rooms up to 25 sqm with quiet sleep mode.",
    warranty: "2-year warranty",
    specs: {
      "Filtration System": "3-Stage True HEPA H13 (captures 99.97% of dust & pollen down to 0.3 microns)",
      "Room Coverage": "Up to 25 sq meters (270 sq ft) with 4 air exchanges/hr",
      "Noise Level": "Quiet Sleep Mode at 24dB whisper level",
      "Fan Speeds": "3 adjustable fan speeds + Auto Sensor Mode",
      "Air Quality Indicator": "Real-time LED ring showing air quality (Blue/Yellow/Red)",
      "Filter Lifespan": "6 to 8 months (built-in filter check indicator)"
    },
    inTheBox: [
      "PureAir Mini Air Purifier",
      "Pre-Installed 3-Stage True HEPA Filter",
      "Low-Voltage DC Power Adapter",
      "Filter Replacement Guide Card",
      "User Manual"
    ],
    bestSuitedFor: "Bedrooms, small apartments, home offices, allergy and asthma sufferers, and pet owners.",
    svgType: "airpurifier"
  },
  {
    id: "prod-home-03",
    name: "Breeze Tower Fan",
    category: "home",
    categoryName: "Home & Cleaning",
    price: 74,
    originalPrice: null,
    onSale: false,
    rating: 4.6,
    reviewsCount: 63,
    badge: null,
    inStock: true,
    shortDescription: "Space-saving oscillating tower fan with 3 speeds and remote control.",
    warranty: "1-year warranty",
    specs: {
      "Oscillation": "70-degree broad room horizontal oscillation",
      "Speeds & Modes": "3 speeds (Low, Med, High) & 3 modes (Normal, Natural breeze, Sleep)",
      "Remote Control": "Wireless slim remote control with top-mounted storage cradle",
      "Timer": "1 to 12-hour auto-off timer function",
      "Dimensions": "86cm (34 in) slim height with compact 24cm circular base",
      "Safety": "Finger-safe tight air intake grille & stable base plate"
    },
    inTheBox: [
      "Breeze Tower Fan Body",
      "Compact Wireless Remote (CR2025 battery included)",
      "Two-Piece Snap-Together Sturdy Base",
      "Assembly Thumbscrews",
      "User Guide"
    ],
    bestSuitedFor: "Living rooms, bedrooms, and tight room corners needing quiet, circulating cooling.",
    svgType: "towerfan"
  },

  // --- SMART GADGETS ---
  {
    id: "prod-smart-01",
    name: "Link Smart Plug 2-Pack",
    category: "smart",
    categoryName: "Smart Gadgets",
    price: 24,
    originalPrice: null,
    onSale: false,
    rating: 4.7,
    reviewsCount: 88,
    badge: "Value Pack",
    inStock: true,
    shortDescription: "Wi-Fi smart plugs with schedule automation and app control. No hub needed.",
    warranty: "1-year warranty",
    specs: {
      "Pack Quantity": "2 Smart Outlets included",
      "Connectivity": "Wi-Fi 2.4GHz direct connection (no bridge or hub needed)",
      "App Functions": "Custom timers, recurring schedules, and Away-from-home modes",
      "Electrical Rating": "100-240V AC, Max 15A / 1800W resistive load",
      "Safety Build": "Flame-retardant UL94-V0 polycarbonate housing",
      "Design": "Compact rectangular profile leaves adjacent wall outlet free"
    },
    inTheBox: [
      "2x Link Wi-Fi Smart Plugs",
      "Quick App Pairing & QR Code Card",
      "Safety & Certification Guide"
    ],
    bestSuitedFor: "Automating lamps, festive lights, space heaters, humidifiers, and cutting standby power.",
    svgType: "smartplug"
  },
  {
    id: "prod-smart-02",
    name: "Pocket 20,000mAh Power Bank",
    category: "smart",
    categoryName: "Smart Gadgets",
    price: 39,
    originalPrice: null,
    onSale: false,
    rating: 4.8,
    reviewsCount: 145,
    badge: "Travel Essential",
    inStock: true,
    shortDescription: "High-density 20,000mAh battery with 22.5W fast charge and digital LED display.",
    warranty: "1-year warranty",
    specs: {
      "Capacity": "20,000mAh / 74Wh (airline flight approved)",
      "Fast Charge Protocol": "22.5W Power Delivery (PD 3.0) & Quick Charge 3.0",
      "Port Array": "1x USB-C (In/Out 20W/22.5W) + 2x USB-A (Out 18W)",
      "Display": "Digital numeric LED readout showing accurate battery %",
      "Device Charges": "Recharges standard smartphones 4 to 5 times",
      "Multi-Protection": "Over-voltage, temperature, and short-circuit protection"
    },
    inTheBox: [
      "Pocket 20,000mAh Power Bank",
      "30cm Braided USB-C to USB-C Fast Charging Cable",
      "Soft Mesh Travel Carry Pouch",
      "User Manual"
    ],
    bestSuitedFor: "Frequent flyers, students, outdoor camping, long commute days, and emergency backups.",
    svgType: "powerbank"
  },
  {
    id: "prod-smart-03",
    name: "Pulse Fit Smartwatch",
    category: "smart",
    categoryName: "Smart Gadgets",
    price: 79,
    originalPrice: null,
    onSale: false,
    rating: 4.7,
    reviewsCount: 112,
    badge: null,
    inStock: true,
    shortDescription: "Heart-rate and sleep tracking smartwatch with 7-day battery life.",
    warranty: "1-year warranty",
    specs: {
      "Display": "1.4-inch vibrant color touch LCD (240x240 px)",
      "Health Sensors": "Continuous optical heart rate, SpO2 blood oxygen, sleep stage monitor",
      "Battery Life": "Up to 7 days normal use (14 days standby)",
      "Water Resistance": "5ATM rated (swimming and shower safe up to 50 meters)",
      "Sports Modes": "14 tracking modes including Running, Cycling, Walking, Yoga",
      "Notifications": "Call alerts, SMS, app push notifications, and silent alarm"
    },
    inTheBox: [
      "Pulse Fit Smartwatch Unit",
      "Skin-Friendly Silicone Sports Wristband (Black)",
      "Magnetic Snap-On USB Charging Cable",
      "Quick Start Setup Guide"
    ],
    bestSuitedFor: "Fitness monitoring, sleep quality tracking, step counting, and reliable daily notifications.",
    svgType: "smartwatch"
  },
  {
    id: "prod-smart-04",
    name: "ClearView 1080p Webcam",
    category: "smart",
    categoryName: "Smart Gadgets",
    price: 42,
    originalPrice: null,
    onSale: false,
    rating: 4.6,
    reviewsCount: 79,
    badge: null,
    inStock: true,
    shortDescription: "Full HD webcam with dual noise-reducing mics and privacy shutter.",
    warranty: "1-year warranty",
    specs: {
      "Video Resolution": "Full HD 1080p at smooth 30 frames per second",
      "Microphones": "Dual integrated omnidirectional noise-filtering mics",
      "Field of View": "90-degree wide angle with automatic low-light correction",
      "Privacy": "Built-in physical slide-over privacy shutter",
      "Mounting": "Universal flexible clip fits laptops and monitors + standard 1/4\" tripod screw",
      "Connectivity": "Plug & Play USB 2.0 (no drivers needed for Windows/macOS/ChromeOS)"
    },
    inTheBox: [
      "ClearView 1080p Webcam with integrated 1.5m USB Cable",
      "Pre-Fitted Sliding Privacy Shutter",
      "Universal Monitor Mounting Clip",
      "Quick Setup Leaflet"
    ],
    bestSuitedFor: "Work-from-home video meetings, Zoom/Teams calls, virtual classrooms, and clean streaming setups.",
    svgType: "webcam"
  }
];

/**
 * Returns clean SVG markup for a product illustration.
 * Styled in the brand's navy, electric blue, and warm accent palette.
 */
function getProductSvg(svgType, className = "product-illustration") {
  const common = `class="${className}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"`;
  
  switch (svgType) {
    case "earbuds":
      return `
        <svg ${common}>
          <defs>
            <linearGradient id="ebGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#2F6BFF"/>
              <stop offset="100%" stop-color="#0F1B33"/>
            </linearGradient>
            <linearGradient id="ebCase" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#F8FAFC"/>
              <stop offset="100%" stop-color="#E2E8F0"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#F1F5F9" />
          <!-- Case -->
          <rect x="55" y="65" width="90" height="70" rx="35" fill="url(#ebCase)" stroke="#CBD5E1" stroke-width="2"/>
          <path d="M 55 95 Q 100 100 145 95" stroke="#94A3B8" stroke-width="1.5" fill="none"/>
          <circle cx="100" cy="110" r="3.5" fill="#2F6BFF"/>
          <!-- Left Earbud -->
          <ellipse cx="44" cy="72" rx="14" ry="12" fill="url(#ebGrad)"/>
          <rect x="42" y="76" width="6" height="24" rx="3" fill="#0F1B33"/>
          <circle cx="44" cy="70" r="4" fill="#60A5FA"/>
          <!-- Right Earbud -->
          <ellipse cx="156" cy="72" rx="14" ry="12" fill="url(#ebGrad)"/>
          <rect x="152" y="76" width="6" height="24" rx="3" fill="#0F1B33"/>
          <circle cx="156" cy="70" r="4" fill="#60A5FA"/>
        </svg>
      `;

    case "headphones":
      return `
        <svg ${common}>
          <defs>
            <linearGradient id="hpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0F1B33"/>
              <stop offset="100%" stop-color="#2F6BFF"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#F1F5F9" />
          <!-- Headband -->
          <path d="M 46 110 C 46 45 154 45 154 110" fill="none" stroke="#0F1B33" stroke-width="10" stroke-linecap="round"/>
          <path d="M 60 70 C 75 52 125 52 140 70" fill="none" stroke="#2F6BFF" stroke-width="4" stroke-linecap="round"/>
          <!-- Left Ear Cup -->
          <rect x="36" y="96" width="22" height="48" rx="11" fill="url(#hpGrad)"/>
          <rect x="42" y="104" width="6" height="32" rx="3" fill="#93C5FD"/>
          <!-- Right Ear Cup -->
          <rect x="142" y="96" width="22" height="48" rx="11" fill="url(#hpGrad)"/>
          <rect x="152" y="104" width="6" height="32" rx="3" fill="#93C5FD"/>
        </svg>
      `;

    case "speaker":
      return `
        <svg ${common}>
          <defs>
            <linearGradient id="spkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#1E293B"/>
              <stop offset="100%" stop-color="#0F1B33"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#F1F5F9" />
          <!-- Lanyard -->
          <path d="M 125 50 C 135 30 155 35 150 60" fill="none" stroke="#FF6B35" stroke-width="4" stroke-linecap="round"/>
          <!-- Speaker Body -->
          <rect x="65" y="50" width="70" height="100" rx="20" fill="url(#spkGrad)"/>
          <!-- Speaker Grille Lines -->
          <circle cx="100" cy="90" r="24" fill="#0B132B" stroke="#2F6BFF" stroke-width="3"/>
          <circle cx="100" cy="90" r="10" fill="#2F6BFF"/>
          <!-- Bass Subwoofer accent -->
          <rect x="75" y="126" width="50" height="10" rx="5" fill="#334155"/>
          <circle cx="100" cy="62" r="3" fill="#FF6B35"/>
        </svg>
      `;

    case "blender":
      return `
        <svg ${common}>
          <defs>
            <linearGradient id="blJar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#E0F2FE" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#BAE6FD" stop-opacity="0.5"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#F1F5F9" />
          <!-- Lid -->
          <rect x="74" y="38" width="52" height="10" rx="3" fill="#0F1B33"/>
          <rect x="92" y="32" width="16" height="8" rx="2" fill="#2F6BFF"/>
          <!-- Jar -->
          <polygon points="76,48 124,48 116,120 84,120" fill="url(#blJar)" stroke="#38BDF8" stroke-width="2"/>
          <line x1="100" y1="58" x2="112" y2="58" stroke="#38BDF8" stroke-width="2"/>
          <line x1="100" y1="74" x2="110" y2="74" stroke="#38BDF8" stroke-width="2"/>
          <line x1="100" y1="90" x2="108" y2="90" stroke="#38BDF8" stroke-width="2"/>
          <!-- Jar Handle -->
          <path d="M 122 56 C 136 60 136 100 115 106" fill="none" stroke="#38BDF8" stroke-width="3"/>
          <!-- Blender Base -->
          <polygon points="80,122 120,122 128,162 72,162" fill="#0F1B33"/>
          <!-- Control Dial -->
          <circle cx="100" cy="142" r="8" fill="#2F6BFF"/>
          <line x1="100" y1="138" x2="100" y2="142" stroke="#FFFFFF" stroke-width="2"/>
        </svg>
      `;

    case "airfryer":
      return `
        <svg ${common}>
          <defs>
            <linearGradient id="afGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#1E293B"/>
              <stop offset="100%" stop-color="#0F1B33"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#F1F5F9" />
          <!-- Main Chassis -->
          <rect x="55" y="45" width="90" height="110" rx="24" fill="url(#afGrad)" stroke="#334155" stroke-width="2"/>
          <!-- Digital Display Screen -->
          <rect x="68" y="58" width="64" height="26" rx="8" fill="#020617" stroke="#2F6BFF" stroke-width="1.5"/>
          <text x="100" y="75" font-family="monospace" font-size="12" fill="#38BDF8" text-anchor="middle" font-weight="bold">190°C</text>
          <!-- Pull-out Basket -->
          <rect x="63" y="94" width="74" height="52" rx="12" fill="#090E1A" stroke="#334155" stroke-width="1.5"/>
          <!-- Basket Handle -->
          <rect x="94" y="104" width="12" height="32" rx="6" fill="#2F6BFF"/>
          <!-- Accent Line -->
          <line x1="68" y1="90" x2="132" y2="90" stroke="#FF6B35" stroke-width="2"/>
        </svg>
      `;

    case "coffeemaker":
      return `
        <svg ${common}>
          <defs>
            <linearGradient id="cmBase" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#1E293B"/>
              <stop offset="100%" stop-color="#0F1B33"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#F1F5F9" />
          <!-- Frame Structure -->
          <path d="M 68 40 L 126 40 L 126 62 L 96 62 L 96 138 L 130 138 L 130 158 L 68 158 Z" fill="url(#cmBase)"/>
          <!-- Digital Clock Display -->
          <rect x="74" y="46" width="30" height="10" rx="2" fill="#020617"/>
          <text x="89" y="54" font-family="monospace" font-size="7" fill="#2F6BFF" text-anchor="middle">07:30</text>
          <!-- Glass Carafe -->
          <path d="M 100 82 L 126 82 L 122 134 L 104 134 Z" fill="#E0F2FE" fill-opacity="0.8" stroke="#94A3B8" stroke-width="1.5"/>
          <!-- Coffee liquid level inside carafe -->
          <path d="M 102 108 L 124 108 L 122 134 L 104 134 Z" fill="#78350F" fill-opacity="0.75"/>
          <!-- Carafe Handle -->
          <path d="M 126 88 C 138 94 138 122 122 126" fill="none" stroke="#0F1B33" stroke-width="3"/>
          <!-- Warming Plate -->
          <rect x="98" y="136" width="30" height="3" fill="#FF6B35"/>
        </svg>
      `;

    case "kettle":
      return `
        <svg ${common}>
          <defs>
            <linearGradient id="ktMetal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#F1F5F9"/>
              <stop offset="50%" stop-color="#CBD5E1"/>
              <stop offset="100%" stop-color="#94A3B8"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#F1F5F9" />
          <!-- Spout -->
          <polygon points="68,64 48,54 58,80 72,80" fill="url(#ktMetal)" stroke="#64748B" stroke-width="1"/>
          <!-- Kettle Body -->
          <path d="M 72 56 L 128 56 L 136 142 L 64 142 Z" fill="url(#ktMetal)" stroke="#64748B" stroke-width="1.5"/>
          <!-- Lid with knob -->
          <rect x="76" y="48" width="48" height="8" rx="3" fill="#0F1B33"/>
          <circle cx="100" cy="44" r="4" fill="#2F6BFF"/>
          <!-- Large Handle -->
          <path d="M 128 62 C 152 76 152 124 132 136" fill="none" stroke="#0F1B33" stroke-width="8" stroke-linecap="round"/>
          <!-- Water Gauge Window -->
          <rect x="96" y="78" width="8" height="46" rx="4" fill="#38BDF8" fill-opacity="0.5"/>
          <!-- Power Base -->
          <rect x="60" y="144" width="80" height="10" rx="3" fill="#0F1B33"/>
        </svg>
      `;

    case "robotvacuum":
      return `
        <svg ${common}>
          <defs>
            <linearGradient id="rvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1E293B"/>
              <stop offset="100%" stop-color="#0F1B33"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#F1F5F9" />
          <!-- Outer circular body -->
          <circle cx="100" cy="100" r="62" fill="url(#rvGrad)" stroke="#334155" stroke-width="2"/>
          <!-- Bumper Arc -->
          <path d="M 44 90 A 62 62 0 0 1 156 90" fill="none" stroke="#2F6BFF" stroke-width="4"/>
          <!-- Sensor Turret / Power Button -->
          <circle cx="100" cy="100" r="22" fill="#020617" stroke="#475569" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="10" fill="#2F6BFF"/>
          <!-- Power Icon on Button -->
          <path d="M 100 95 L 100 99" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="100" cy="100" r="5" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="16 6"/>
          <!-- Dustbin Lid Accent -->
          <path d="M 68 126 Q 100 138 132 126" fill="none" stroke="#64748B" stroke-width="2"/>
        </svg>
      `;

    case "airpurifier":
      return `
        <svg ${common}>
          <defs>
            <linearGradient id="apBody" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#FFFFFF"/>
              <stop offset="100%" stop-color="#E2E8F0"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#F1F5F9" />
          <!-- Cylindrical Air Purifier Body -->
          <rect x="66" y="46" width="68" height="110" rx="18" fill="url(#apBody)" stroke="#CBD5E1" stroke-width="2"/>
          <!-- Top Air Outlet Grille -->
          <ellipse cx="100" cy="46" rx="34" ry="8" fill="#0F1B33"/>
          <circle cx="100" cy="46" r="4" fill="#2F6BFF"/>
          <!-- Air Quality Glow Ring -->
          <ellipse cx="100" cy="62" rx="26" ry="4" fill="none" stroke="#2F6BFF" stroke-width="2.5"/>
          <!-- Intake Micro Perforations -->
          <g fill="#94A3B8">
            <circle cx="82" cy="100" r="2"/><circle cx="91" cy="100" r="2"/><circle cx="100" cy="100" r="2"/><circle cx="109" cy="100" r="2"/><circle cx="118" cy="100" r="2"/>
            <circle cx="82" cy="112" r="2"/><circle cx="91" cy="112" r="2"/><circle cx="100" cy="112" r="2"/><circle cx="109" cy="112" r="2"/><circle cx="118" cy="112" r="2"/>
            <circle cx="82" cy="124" r="2"/><circle cx="91" cy="124" r="2"/><circle cx="100" cy="124" r="2"/><circle cx="109" cy="124" r="2"/><circle cx="118" cy="124" r="2"/>
            <circle cx="82" cy="136" r="2"/><circle cx="91" cy="136" r="2"/><circle cx="100" cy="136" r="2"/><circle cx="109" cy="136" r="2"/><circle cx="118" cy="136" r="2"/>
          </g>
        </svg>
      `;

    case "towerfan":
      return `
        <svg ${common}>
          <defs>
            <linearGradient id="tfGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#1E293B"/>
              <stop offset="100%" stop-color="#0F1B33"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#F1F5F9" />
          <!-- Tower Column -->
          <rect x="84" y="34" width="32" height="120" rx="6" fill="url(#tfGrad)" stroke="#334155" stroke-width="1.5"/>
          <!-- Louver Slits -->
          <g stroke="#2F6BFF" stroke-width="1.5">
            <line x1="90" y1="58" x2="110" y2="58"/>
            <line x1="90" y1="68" x2="110" y2="68"/>
            <line x1="90" y1="78" x2="110" y2="78"/>
            <line x1="90" y1="88" x2="110" y2="88"/>
            <line x1="90" y1="98" x2="110" y2="98"/>
            <line x1="90" y1="108" x2="110" y2="108"/>
            <line x1="90" y1="118" x2="110" y2="118"/>
            <line x1="90" y1="128" x2="110" y2="128"/>
          </g>
          <!-- Top Control Panel -->
          <rect x="88" y="38" width="24" height="12" rx="3" fill="#020617"/>
          <circle cx="100" cy="44" r="2" fill="#38BDF8"/>
          <!-- Base Stand -->
          <ellipse cx="100" cy="154" rx="38" ry="10" fill="#0F1B33" stroke="#475569" stroke-width="1"/>
        </svg>
      `;

    case "smartplug":
      return `
        <svg ${common}>
          <defs>
            <linearGradient id="spGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#FFFFFF"/>
              <stop offset="100%" stop-color="#F1F5F9"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#F1F5F9" />
          <!-- Main Smart Plug Unit -->
          <rect x="58" y="60" width="84" height="80" rx="16" fill="url(#spGrad)" stroke="#CBD5E1" stroke-width="2"/>
          <!-- Circular Socket Area -->
          <circle cx="100" cy="100" r="26" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
          <!-- Prong Holes -->
          <rect x="88" y="92" width="5" height="10" rx="1.5" fill="#334155"/>
          <rect x="107" y="92" width="5" height="10" rx="1.5" fill="#334155"/>
          <ellipse cx="100" cy="112" rx="4" ry="4" fill="#334155"/>
          <!-- Wi-Fi / Power LED -->
          <circle cx="128" cy="74" r="3.5" fill="#2F6BFF"/>
          <!-- Side Power Button -->
          <rect x="52" y="88" width="6" height="24" rx="2" fill="#0F1B33"/>
        </svg>
      `;

    case "powerbank":
      return `
        <svg ${common}>
          <defs>
            <linearGradient id="pbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1E293B"/>
              <stop offset="100%" stop-color="#0F1B33"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#F1F5F9" />
          <!-- Power Bank Body -->
          <rect x="68" y="44" width="64" height="114" rx="12" fill="url(#pbGrad)" stroke="#334155" stroke-width="1.5"/>
          <!-- Digital LED Display Badge -->
          <rect x="78" y="58" width="44" height="24" rx="6" fill="#020617" stroke="#2F6BFF" stroke-width="1"/>
          <text x="100" y="74" font-family="monospace" font-size="11" fill="#38BDF8" text-anchor="middle" font-weight="bold">100%</text>
          <!-- Nexora subtle logo line -->
          <line x1="84" y1="130" x2="116" y2="130" stroke="#475569" stroke-width="2"/>
          <!-- Top Ports Edge -->
          <rect x="76" y="40" width="12" height="4" rx="1" fill="#475569"/>
          <rect x="94" y="40" width="12" height="4" rx="1" fill="#2F6BFF"/>
          <rect x="112" y="40" width="12" height="4" rx="1" fill="#475569"/>
        </svg>
      `;

    case "smartwatch":
      return `
        <svg ${common}>
          <defs>
            <linearGradient id="swGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#1E293B"/>
              <stop offset="100%" stop-color="#0F1B33"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#F1F5F9" />
          <!-- Watch Straps -->
          <rect x="82" y="28" width="36" height="36" rx="4" fill="#334155"/>
          <rect x="82" y="136" width="36" height="36" rx="4" fill="#334155"/>
          <!-- Watch Case -->
          <rect x="66" y="58" width="68" height="84" rx="18" fill="url(#swGrad)" stroke="#475569" stroke-width="2"/>
          <!-- Active OLED Display -->
          <rect x="74" y="66" width="52" height="68" rx="12" fill="#020617"/>
          <text x="100" y="92" font-family="sans-serif" font-size="14" fill="#FFFFFF" text-anchor="middle" font-weight="bold">10:42</text>
          <!-- Heart Rate Graph Line -->
          <path d="M 80 110 L 88 110 L 92 102 L 96 118 L 101 106 L 105 110 L 120 110" fill="none" stroke="#FF6B35" stroke-width="2" stroke-linecap="round"/>
          <circle cx="114" cy="122" r="3" fill="#2F6BFF"/>
          <!-- Side Crown Button -->
          <rect x="134" y="90" width="4" height="18" rx="2" fill="#94A3B8"/>
        </svg>
      `;

    case "webcam":
      return `
        <svg ${common}>
          <defs>
            <linearGradient id="wcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1E293B"/>
              <stop offset="100%" stop-color="#0F1B33"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#F1F5F9" />
          <!-- Mount Clip Base -->
          <path d="M 86 122 L 114 122 L 118 156 L 82 156 Z" fill="#334155"/>
          <rect x="74" y="152" width="52" height="8" rx="4" fill="#0F1B33"/>
          <!-- Webcam Main Head Body -->
          <rect x="46" y="68" width="108" height="52" rx="26" fill="url(#wcGrad)" stroke="#475569" stroke-width="2"/>
          <!-- Dual Mic Pinhole -->
          <circle cx="64" cy="94" r="2" fill="#94A3B8"/>
          <circle cx="136" cy="94" r="2" fill="#94A3B8"/>
          <!-- Camera Optical Lens System -->
          <circle cx="100" cy="94" r="18" fill="#020617" stroke="#2F6BFF" stroke-width="2"/>
          <circle cx="100" cy="94" r="10" fill="#0F1B33"/>
          <circle cx="102" cy="92" r="3" fill="#38BDF8"/>
          <!-- Privacy Slider Notch -->
          <rect x="94" y="70" width="12" height="4" rx="2" fill="#FF6B35"/>
        </svg>
      `;

    default:
      return `<svg ${common}><circle cx="100" cy="100" r="90" fill="#E2E8F0"/></svg>`;
  }
}
