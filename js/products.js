/**
 * Nexora & Ponno Modern Tech Catalog Data
 * Rich catalog with photorealistic images, specs, ratings, countdowns, and warranty.
 */

const PRODUCTS = [
  // --- FEATURED & HOT DEALS ---
  {
    id: "prod-monitor-01",
    name: "Mount Carved 2200XD",
    category: "laptops",
    categoryName: "Laptops & Computers",
    price: 349,
    originalPrice: 429,
    onSale: true,
    rating: 4.9,
    reviewsCount: 284,
    badge: "Best Seller",
    image: "images/hero-monitor.jpg",
    shortDescription: "Ultra-wide 34-inch curved gaming & productivity monitor with 165Hz refresh rate and HDR400.",
    warranty: "2-year warranty",
    specs: {
      "Display Size": "34-inch 1500R Curved UltraWide WQHD (3440 x 1440)",
      "Refresh Rate": "165Hz with AMD FreeSync Premium",
      "Panel Type": "Fast IPS with 99% sRGB color gamut",
      "Ports": "2x HDMI 2.1, 1x DisplayPort 1.4, 1x USB-C 65W PD",
      "Stand": "Ergonomic height, tilt, and swivel adjustable stand"
    },
    inTheBox: ["Mount Carved 2200XD Monitor", "Metallic Heavy-Base Stand", "DisplayPort Cable", "HDMI Cable", "Power Supply"],
    bestSuitedFor: "Immersive PC gaming, ultrawide video editing, coding, and multi-window productivity.",
    tags: ["featured", "new", "best-deal"]
  },
  {
    id: "prod-hotdeal-01",
    name: "Kemioo DX24 Headphone",
    category: "audio",
    categoryName: "Audio",
    price: 150,
    originalPrice: 199,
    onSale: true,
    rating: 4.9,
    reviewsCount: 312,
    badge: "Hot Deal",
    image: "images/deal-headphones.jpg",
    shortDescription: "Studio-grade wireless over-ear headphones with hybrid active noise cancellation and 45h playback.",
    warranty: "1-year warranty",
    specs: {
      "Acoustic Architecture": "40mm Beryllium-coated dynamic drivers",
      "Battery Life": "Up to 45 hours with ANC enabled",
      "Charging": "Fast USB-C (15 minutes charge = 5 hours playback)",
      "Wireless": "Bluetooth 5.3 with LDAC high-res audio codec",
      "Weight": "250g ultra-lightweight memory foam headband"
    },
    inTheBox: ["Kemioo DX24 Headphones", "Protective Magnetic Hardcase", "3.5mm Gold-Plated AUX Cable", "Braided USB-C Cable"],
    bestSuitedFor: "All-day music lovers, home office work, travel flights, and acoustic clarity.",
    tags: ["featured", "best-deal"]
  },
  {
    id: "prod-headphone-cradle",
    name: "Aliquam Consequat Mattis",
    category: "audio",
    categoryName: "Audio",
    price: 150,
    originalPrice: 180,
    onSale: false,
    rating: 4.8,
    reviewsCount: 95,
    badge: "Popular",
    image: "images/prod-headphones-dock.jpg",
    shortDescription: "Audiophile wireless headphones complete with desktop magnetic charging cradle dock.",
    warranty: "1-year warranty",
    specs: {
      "Docking Station": "Integrated rapid magnetic induction charge stand",
      "Driver Unit": "40mm custom tuned neodymium magnets",
      "Battery Life": "40 hours on single charge + instant dock recharge",
      "Frequency Response": "10Hz – 40,000Hz Hi-Res Audio certified",
      "Microphone": "Dual beamforming microphones with AI noise suppression"
    },
    inTheBox: ["Wireless Headphones", "Desktop Charging Cradle Station", "USB-C Power Adapter", "User Manual"],
    bestSuitedFor: "Executive desktop setups, studio listening, and clean cable-free desk charging.",
    tags: ["featured", "new"]
  },

  // --- GRID PRODUCTS (IMAGE 2) ---
  {
    id: "prod-speaker-handle",
    name: "Pulse Outdoor Speaker",
    category: "audio",
    categoryName: "Audio",
    price: 120,
    originalPrice: 150,
    onSale: true,
    rating: 4.7,
    reviewsCount: 164,
    badge: "Deal",
    hasCountdown: true,
    image: "images/prod-speaker-purple.jpg",
    shortDescription: "Rugged disc Bluetooth speaker with anodized purple carabiner handle and IP67 waterproofing.",
    warranty: "1-year warranty",
    specs: {
      "Water Resistance": "IP67 Submersible waterproof & sandproof",
      "Sound Output": "20W 360° stereo with dual passive radiators",
      "Battery Playtime": "Up to 16 hours continuous music",
      "Portability": "Heavy-duty aluminum purple carabiner clip built-in"
    },
    inTheBox: ["Pulse Outdoor Speaker", "Purple Anodized Carabiner", "USB-C Charging Cable", "Quick Start Guide"],
    bestSuitedFor: "Backpacking, beach days, biking, pool parties, and outdoor travel adventures.",
    tags: ["new", "best-deal"]
  },
  {
    id: "prod-studio-mic",
    name: "Fhasellus Viverra Urna",
    category: "smart",
    categoryName: "Smart Gadgets",
    price: 30,
    originalPrice: 45,
    onSale: false,
    rating: 4.8,
    reviewsCount: 220,
    badge: "Value",
    hasCountdown: false,
    image: "images/prod-studio-mic.jpg",
    shortDescription: "Matte white USB condenser podcast microphone with professional pop filter and desk stand.",
    warranty: "1-year warranty",
    specs: {
      "Polar Pattern": "Cardioid studio pickup pattern (rejects background noise)",
      "Sampling Rate": "192kHz / 24-bit studio quality recording",
      "Accessories": "Double-layer round pop filter + vibration dampening mount",
      "Connection": "Plug-and-play USB-C / USB-A (no drivers needed)"
    },
    inTheBox: ["White Condenser Mic", "Round Pop Filter on Gooseneck", "Weighted Metal Desk Base", "USB Cable"],
    bestSuitedFor: "Podcasting, streaming on Twitch/YouTube, Zoom calls, and vocal recording.",
    tags: ["new", "featured"]
  },
  {
    id: "prod-stream-box",
    name: "Smart 4K Streaming Box",
    category: "smart",
    categoryName: "Smart Gadgets",
    price: 120,
    originalPrice: 150,
    onSale: true,
    rating: 4.7,
    reviewsCount: 180,
    badge: "Deal",
    hasCountdown: true,
    image: "images/prod-stream-box.jpg",
    shortDescription: "Ultra HD 4K HDR media streaming hub with quad-core processor and voice remote control.",
    warranty: "1-year warranty",
    specs: {
      "Resolution Support": "4K Ultra HD at 60fps with Dolby Vision & HDR10+",
      "Processor & Memory": "Quad-Core 64-bit Cortex-A55 with 4GB RAM + 32GB storage",
      "Wi-Fi & LAN": "Wi-Fi 6 (802.11ax) dual-band + Gigabit Ethernet port",
      "Remote": "Ergonomic Bluetooth voice remote with shortcut keys"
    },
    inTheBox: ["StreamBox 4K Media Hub", "Voice Remote Control (batteries included)", "HDMI 2.1 Cable", "Power Adapter"],
    bestSuitedFor: "Upgrading home TVs, streaming 4K Netflix/Disney+, and seamless home entertainment.",
    tags: ["new", "best-deal"]
  },
  {
    id: "prod-vr-case",
    name: "Illo Inventore Veritatis",
    category: "smart",
    categoryName: "Smart Gadgets",
    price: 90,
    originalPrice: 100,
    onSale: true,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Sale",
    hasCountdown: false,
    image: "images/prod-vr-case.jpg",
    shortDescription: "All-in-one VR headset travel bundle with molded shockproof zippered carrying case.",
    warranty: "1-year warranty",
    specs: {
      "Case Material": "Water-resistant EVA hard-shell with soft velvet interior lining",
      "Compatibility": "Fits standalone VR headsets plus dual motion controllers and cables",
      "Protection": "Custom shock-absorbing custom cut foam inserts",
      "Handle": "Reinforced ergonomic rubberized carry handle + shoulder strap"
    },
    inTheBox: ["EVA Hard Shell Travel Case", "Detachable Shoulder Strap", "Cable Storage Pouch", "Lens Protector Cover"],
    bestSuitedFor: "Safely transporting and protecting VR headsets, gaming on the road, and tidy storage.",
    tags: ["new", "featured"]
  },

  // --- 3x3 COMPACT SECTION (IMAGE 3) ---
  {
    id: "prod-earbud-single",
    name: "Pulse Wireless Earbuds",
    category: "audio",
    categoryName: "Audio",
    price: 60,
    originalPrice: 75,
    onSale: true,
    rating: 4.8,
    reviewsCount: 138,
    badge: "Sale",
    image: "images/deal-headphones.jpg",
    shortDescription: "Futuristic wireless earbud with ANC and touch controls.",
    warranty: "1-year warranty",
    specs: {
      "Drivers": "11mm titanium dynamic drivers",
      "Battery": "28 hours with charging case",
      "Protection": "IPX4 water/sweat resistant"
    },
    inTheBox: ["Earbuds Pair", "Pocket Charging Case", "Silicone Tips", "USB-C Cable"],
    bestSuitedFor: "Workouts, daily commuting, and calls.",
    tags: ["featured", "new"]
  },
  {
    id: "prod-stream-dongle",
    name: "StreamBox Pro TV Stick",
    category: "smart",
    categoryName: "Smart Gadgets",
    price: 120,
    originalPrice: 150,
    onSale: true,
    rating: 4.6,
    reviewsCount: 88,
    badge: "Hot",
    image: "images/prod-stream-box.jpg",
    shortDescription: "Compact 4K media player with smart voice remote.",
    warranty: "1-year warranty",
    specs: {
      "Resolution": "4K HDR Dolby Audio",
      "Connectivity": "Wi-Fi 6 + Bluetooth 5.2"
    },
    inTheBox: ["Streaming Device", "Voice Remote", "Power Adapter", "HDMI Extender"],
    bestSuitedFor: "Smart TV streaming anywhere.",
    tags: ["featured", "best-deal"]
  },
  {
    id: "prod-tripod-cam",
    name: "Cras Neque Metus Tripod",
    category: "smart",
    categoryName: "Smart Gadgets",
    price: 30,
    originalPrice: null,
    onSale: false,
    rating: 4.7,
    reviewsCount: 64,
    badge: null,
    image: "images/prod-studio-mic.jpg",
    shortDescription: "Ultra-stable mini folding tabletop tripod with universal 1/4\" mount.",
    warranty: "1-year warranty",
    specs: {
      "Payload": "Up to 2.5kg (cameras, webcams, smartphones)",
      "Height Range": "12cm to 22cm adjustable legs"
    },
    inTheBox: ["Folding Metal Mini Tripod", "Phone Clamp Adapter", "Travel Pouch"],
    bestSuitedFor: "Desktop webcam setup, mobile vlogging, and tabletop streaming.",
    tags: ["featured"]
  },
  {
    id: "prod-overear-studio",
    name: "Consequences Roin Lectus",
    category: "audio",
    categoryName: "Audio",
    price: 150,
    originalPrice: 180,
    onSale: false,
    rating: 5.0,
    reviewsCount: 194,
    badge: "Top Rated",
    image: "images/prod-headphones-dock.jpg",
    shortDescription: "High-resolution foldable over-ear studio monitors with memory foam comfort.",
    warranty: "1-year warranty",
    specs: {
      "Drivers": "45mm reference acoustic neodymium drivers",
      "Battery": "40 hours playtime + wired 3.5mm mode"
    },
    inTheBox: ["Studio Headphones", "3.5mm Audio Cable", "Carry Case", "USB-C Cable"],
    bestSuitedFor: "Music production, mastering, and high fidelity listening.",
    tags: ["featured", "best-deal"]
  },
  {
    id: "prod-security-dome",
    name: "Accusantium Doloremque",
    category: "smart",
    categoryName: "Smart Gadgets",
    price: 130,
    originalPrice: 150,
    onSale: true,
    rating: 4.7,
    reviewsCount: 110,
    badge: "Sale",
    image: "images/prod-security-cam.jpg",
    shortDescription: "360-degree pan & tilt smart Wi-Fi indoor security camera with night vision.",
    warranty: "1-year warranty",
    specs: {
      "Video Quality": "2K QHD resolution with color night vision",
      "Field of View": "360° horizontal pan and 114° vertical tilt",
      "AI Detection": "Motion, person, and baby crying smart detection"
    },
    inTheBox: ["Smart Security Camera", "Mounting Plate & Screws", "Power Adapter", "Manual"],
    bestSuitedFor: "Home security, nursery monitoring, and pet check-ins via app.",
    tags: ["featured", "new"]
  },
  {
    id: "prod-webcam-clip",
    name: "Donec Ac Tempus Nrb",
    category: "smart",
    categoryName: "Smart Gadgets",
    price: 50,
    originalPrice: null,
    onSale: false,
    rating: 4.8,
    reviewsCount: 122,
    badge: null,
    image: "images/promo-laptop.jpg",
    shortDescription: "Full HD 1080p webcam with auto-focus and dual noise-cancelling mics.",
    warranty: "1-year warranty",
    specs: {
      "Video": "1080p at 30fps with automatic light correction",
      "Shutter": "Built-in physical privacy slider",
      "Microphone": "Dual omnidirectional stereo mics"
    },
    inTheBox: ["1080p Webcam with USB Cable", "Tripod Thread Base", "Quick Start Leaflet"],
    bestSuitedFor: "Remote work calls on Zoom, Google Meet, and Teams.",
    tags: ["featured"]
  },
  {
    id: "prod-leather-bag",
    name: "Carry Bag Of Leather",
    category: "smart",
    categoryName: "Smart Gadgets",
    price: 80,
    originalPrice: 100,
    onSale: true,
    rating: 4.6,
    reviewsCount: 79,
    badge: "Sale",
    image: "images/prod-vr-case.jpg",
    shortDescription: "Premium protective padded travel organizer case for electronics and cables.",
    warranty: "1-year warranty",
    specs: {
      "Material": "Water-repellent structured leatherette and ballistic nylon",
      "Compartments": "Multi-layer elastic loops and mesh zippered pockets"
    },
    inTheBox: ["Electronic Travel Organizer Bag", "Detachable Wrist Strap"],
    bestSuitedFor: "Organizing power banks, chargers, earbuds, cables, and hard drives on trips.",
    tags: ["featured", "best-deal"]
  },
  {
    id: "prod-cylinder-speaker",
    name: "Boom Mini Bluetooth Speaker",
    category: "audio",
    categoryName: "Audio",
    price: 56.20,
    originalPrice: 65.00,
    onSale: false,
    rating: 4.7,
    reviewsCount: 88,
    badge: null,
    image: "images/prod-speaker-purple.jpg",
    shortDescription: "Pocket-sized cylindrical Bluetooth speaker with 360-degree sound and 12h battery.",
    warranty: "1-year warranty",
    specs: {
      "Audio": "10W RMS with dual bass radiators",
      "Waterproofing": "IP67 submersible waterproof",
      "Battery": "12 hours continuous playback"
    },
    inTheBox: ["Boom Mini Speaker", "Lanyard Strap", "USB-C Cable"],
    bestSuitedFor: "Shower listening, patio barbecues, picnics, and portable travel music.",
    tags: ["featured", "new"]
  }
];
