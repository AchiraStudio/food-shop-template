const siteConfig = {
  // Business Information
  businessName: "KOTAKAN",
  tagline: "Cita rasa unik yang nikmat dan praktis.",
  
  // Theme Colors
  primaryColor: "#d35400", // Burnt Orange (Warm Food Tone)
  secondaryColor: "#5d4037", 
  accentColor: "#f9f9f9", 
  
  // Navigation Links
  navLinks: [
    { name: "Beranda", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Tentang", href: "#about" },
    { name: "Ulasan", href: "#reviews" },
    { name: "Kontak", href: "#contact" }
  ],
  
  // Hero Section
  hero: {
    headline: "Taste our delicious dishes, made with love.",
    // Subheadline disesuaikan dengan fokus Ricebox
    subheadline: "Nikmati Ricebox dengan cita rasa Asia Tenggara yang otentik. Praktis, nikmat, dan siap menemani hari-harimu.",
    ctaText: "Lihat Menu",
    ctaLink: "#menu",
    imagePath: "/images/hero-image.jpg" 
  },
  
  // Menu Items
  menuCategories: [
    {
      category: "Ricebox",
      items: [
        {
          name: "Honey Glazed Chicken",
          price: "Rp 25.000",
          description: "Ayam goreng renyah dengan balutan saus madu spesial, disajikan dengan nasi hangat dan lettuce segar.",
          image: "/images/menu/honeyglazed-rice.jpg"
        },
        {
          name: "Korean Spicy Chicken",
          price: "Rp 25.000",
          description: "Perpaduan pedas dan manis saus Gochujang khas Korea yang menggugah selera.",
          image: "/images/menu/spicykorean-rice.jpg"
        },
        {
          name: "Spice of Saigon",
          price: "Rp 25.000",
          description: "Ricebox dengan aroma rempah khas Vietnam yang unik dan menyegarkan.",
          image: "/images/menu/saigon-rice.jpg"
        },
        {
          name: "Fried N' Fresh",
          price: "Rp 20.000",
          description: "Menu klasik ayam goreng yang praktis, renyah, dan selalu nikmat.",
          image: "/images/menu/classicfc-rice.jpg"
        }
      ]
    },

    {
      category: "Side Dish",
      items: [
        {
          name: "French Fries",
          price: "Rp 15.000",
          description: "Kentang goreng crinkle cut yang renyah.",
          image: "/images/menu/frenchfries-side.jpg"
        },
        {
          name: "Spaghetti Bolognese",
          price: "Rp 25.000",
          description: "Pasta dengan saus daging cincang tomat yang gurih.",
          image: "/images/menu/spaghettiB-side.jpg"
        },
        {
          name: "Chicken Steak BBQ",
          price: "Rp 25.000",
          description: "Steak ayam lembut dengan siraman saus BBQ.",
          image: "/images/menu/chickensteak-side.jpg"
        }
      ]
    },

    {
      category: "Drinks",
      items: [
        {
          name: "Iced Lychee Tea",
          price: "Rp 15.000",
          description: "Teh leci manis dengan buah asli yang menyegarkan.",
          image: "/images/menu/lychee-tea.jpg"
        },
        {
          name: "Fresh Limoun",
          price: "Rp 15.000",
          description: "Sari jeruk nipis murni yang segar.",
          image: "/images/menu/limoun.jpg"
        },
        {
          name: "Iced Mokopi",
          price: "Rp 17.000",
          description: "Kopi susu gula aren khas Kotakan.",
          image: "/images/menu/mokopi.jpg"
        }
      ]
    }
  ],
  
  // About Section (DATA UTAMA YANG DIUPDATE)
  about: {
    title: "Di Balik Kotakan",
    // Teks sesuai permintaan Anda
    text: "KOTAKAN didirikan oleh seorang Chef Disabilitas yang bernama Laninka Siamiyono, pada November 2021. KOTAKAN menawarkan makanan (RICEBOX) dengan cita rasa Asia Tenggara yang tentunya nikmat, sekaligus praktis untuk disantap kapanpun.",
    imagePath: "/images/about-kotakan.jpg",
    ctaText: "Kunjungi Kami"
  },

  // Reviews Section
  reviews: {
    title: "Kata Mereka",
    subtitle: "Pengalaman menikmati rasa Asia di Kotakan",
    maxCharacters: 140,
    items: [
      {
        name: "Andi Pratama",
        rating: 5,
        text: "Ricebox Spice of Saigon-nya benar-benar unik! Rempahnya terasa tapi nggak bikin eneg. Porsi pas banget buat makan siang.",
        source: "Google Review",
        avatar: "/images/avatar-1.jpg"
      },
      {
        name: "Siska Larasati",
        rating: 5,
        text: "Suka banget sama konsepnya yang praktis. Honey Glazed-nya favorit anak-anak. Salut juga buat Founder-nya, Kak Laninka!",
        source: "Google Review",
        avatar: "/images/avatar-2.jpg"
      },
      {
        name: "Budi Santoso",
        rating: 5,
        text: "Tempatnya asik di pinggir danau, makanannya enak dan terjangkau. Korean Spicy-nya pedasnya pas.",
        source: "Google Review",
        avatar: "/images/avatar-3.jpg"
      },
      {
        name: "Citra Dewi",
        rating: 5,
        text: "Rekomendasi banget buat yang cari makanan Asia Tenggara yang autentik tapi cepet saji. Pasti bakal balik lagi.",
        source: "Google Review",
        avatar: "/images/avatar-4.jpg"
      },
    ]
  },
  
  // Contact Information
  contact: {
    title: "Hubungi Kami",
    address: "The Beach, Jl. Grand Duta City, GDC Boulevard, Jawa Barat 16330",
    phone: "+62 812-3456-7890", 
    email: "halo@kotakan.id",
    hours: "Setiap Hari: 10:00 - 22:00 WIB"
  },
  
  // Footer Information
  footer: {
    copyright: `© ${new Date().getFullYear()} KOTAKAN. All Rights Reserved.`,
    socialLinks: [
      { name: "Instagram", href: "https://www.instagram.com/kotakancafe/" },
      { name: "Tiktok", href: "https://www.tiktok.com/@kotakancafe" },
    ]
  }
};

export default siteConfig;