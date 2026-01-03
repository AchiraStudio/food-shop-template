// Configuration file for Kotakan Cafe
// Customize these values for each client

const siteConfig = {
  // Business Information
  businessName: "Kotakan Cafe",
  tagline: "Ngopi Santai di Tepi Danau",
  
  // Theme Colors - Disesuaikan dengan vibe Kotakan Cafe (hangat, earthy)
  primaryColor: "#d35400", // Oranye hangat
  secondaryColor: "#5d4037", // Coklat kopi
  
  // Navigation Links
  navLinks: [
    { name: "Beranda", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Tentang", href: "#about" },
    { name: "Kontak", href: "#contact" }
  ],
  
  // Hero Section
  hero: {
    headline: "Temukan Kenikmatan Kopi di Kotakan",
    subheadline: "Tempat sempurna untuk bersantai, ngopi, dan menikmati pemandangan danau.",
    ctaText: "Lihat Menu",
    ctaLink: "#menu",
    // !!! PENTING: Ganti dengan foto hero Kotakan Cafe
    imagePath: "/src/assets/hero-image.jpg" 
  },
  
  // Menu Items
  menuItems: [
    { name: "Americano", price: "Rp 20.000", description: "Espresso dan air panas" },
    { name: "Caffe Latte", price: "Rp 25.000", description: "Espresso dengan susu creamy" },
    { name: "Cappuccino", price: "Rp 25.000", description: "Espresso, susu, dan foam" },
    { name: "Kopi Susu Kotakan", price: "Rp 23.000", description: "Signature kopi susu gula aren" },
    { name: "Matcha Latte", price: "Rp 25.000", description: "Matcha premium dengan susu" },
    { name: "Chocolate Latte", price: "Rp 25.000", description: "Coklat manis dan creamy" },
    { name: "French Fries", price: "Rp 18.000", description: "Kentang goreng crispy" },
    { name: "Toast / Snack", price: "Rp 20.000", description: "Cemilan ringan untuk teman ngopi" }
  ],
  
  // About Section
  about: {
    title: "Tentang Kami",
    text: "Kotakan Cafe hadir sebagai tempat peristirahatan bagi Anda yang mencari ketenangan di tengah hiruk pikuk kesibukan. Dengan konsep bangunan kontainer yang unik dan lokasi strategis di tepi danau, kami menawarkan pengalaman ngopi yang berbeda. Kami percaya bahwa secangkir kopi yang baik dapat memulai percakapan yang baik dan menciptakan momen tak terlupakan bersama teman dan kerabat."
  },
  
  // Contact Information
  contact: {
    title: "Hubungi Kami",
    address: "The Beach, Jl. Grand Duta City, Jl. GDC Boulevard, Jabon Mekar, Kec. Parung, Kabupaten Bogor, Jawa Barat 16330",
    // !!! PENTING: Isi dengan nomor telepon aktif
    phone: "+62 812-3456-7890", 
    // !!! PENTING: Isi dengan email aktif
    email: "info@kotakancafe.com",
    // Jam operasional disederhanakan
    hours: "Setiap Hari: 10:00 - 22:00 WIB"
  },
  
  // Footer Information
  footer: {
    copyright: `© ${new Date().getFullYear()} Kotakan Cafe. Hak Cipta Dilindungi.`,
    socialLinks: [
      { name: "Instagram", href: "https://www.instagram.com/kotakancafe/?hl=en" },
      { name: "Tiktok", href: "https://www.tiktok.com/@kotakancafe" },
      { name: "Facebook", href: "#" } // Placeholder jika ada
    ]
  }
};

export default siteConfig;