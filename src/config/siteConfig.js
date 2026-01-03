// Configuration file for Kotakan Cafe
// Customize these values for each client

const siteConfig = {
  // Business Information
  businessName: "Kotakan Cafe",
  tagline: "Ngopi Santai di Tepi Kolam",
  
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
    headline: "Temukan Kenikmatan Kopi",
    subheadline: "Tempat sempurna untuk bersantai, ngopi, dan menikmati pemandangan danau.",
    ctaText: "Lihat Menu",
    ctaLink: "#menu",
    // !!! PENTING: Ganti dengan foto hero Kotakan Cafe
    imagePath: "/images/hero-image.jpg" 
  },
  
  // Menu Items
  menuCategories: [
    {
      category: "Ricebox",
      items: [
        {
          name: "Honey Glazed Sauce",
          price: "Rp 25.000",
          description:
            "Fried chicken dengan honey glazed sauce, lettuce, dan nasi",
          image: "/images/menu/honeyglazed-rice.jpg"
        },
        {
          name: "Korean Spicy Sauce",
          price: "Rp 25.000",
          description:
            "Fried chicken dengan saus gochujang khas Korea, lettuce, dan nasi",
          image: "/images/menu/spicykorean-rice.jpg"
        },
        {
          name: "Spice of Saigon",
          price: "Rp 25.000",
          description:
            "Fried chicken dengan saus Vietnam, lettuce, dan nasi",
          image: "/images/menu/saigon-rice.jpg"
        },
        {
          name: "Fried N’ Fresh",
          price: "Rp 20.000",
          description:
            "Fried chicken klasik dengan lettuce dan nasi",
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
          description: "Kentang goreng crinkle cut",
          image: "/images/menu/frenchfries-side.jpg"
        },
        {
          name: "Spaghetti Bolognese",
          price: "Rp 25.000",
          description: "Spaghetti dengan saus bolognese autentik",
          image: "/images/menu/spaghettiB-side.jpg"
        },
        {
          name: "Nasi Goreng Kampung",
          price: "Rp 25.000",
          description: "Nasi goreng kampung dengan telur mata sapi",
          image: "/images/menu/nasigoreng-side.jpg"
        },
        {
          name: "Chicken Fried Steak BBQ",
          price: "Rp 25.000",
          description:
            "Chicken breast dengan saus BBQ, kentang, dan buncis",
          image: "/images/menu/chickensteak-side.jpg"
        }
      ]
    },

    {
      category: "Drinks",
      items: [
        {
          name: "Fresh Limoun",
          price: "Rp 15.000",
          description: "Jeruk nipis segar dengan gula",
          image: "/images/menu/limoun.jpg"
        },
        {
          name: "Iced Lemon Tea",
          price: "Rp 15.000",
          description: "Teh lemon dingin dengan irisan lemon",
          image: "/images/menu/lemon-tea.jpg"
        },
        {
          name: "Iced Lychee Tea",
          price: "Rp 15.000",
          description: "Teh leci dingin dengan buah leci",
          image: "/images/menu/lychee-tea.jpg"
        },
        {
          name: "Iced / Hot Mokopi",
          price: "Rp 17.000",
          description: "Espresso, brown sugar, dan susu",
          image: "/images/menu/mokopi.jpg"
        },
        {
          name: "Iced / Hot Tea",
          price: "Rp 8.000",
          description: "Teh panas atau dingin",
          image: "/images/menu/tea.jpg"
        }
      ]
    }
  ],
  
  // About Section
  about: {
    title: "Tentang Kami",
    text: "Kotakan Cafe hadir sebagai tempat peristirahatan bagi Anda yang mencari ketenangan di tengah hiruk pikuk kesibukan. Dengan konsep bangunan kontainer yang unik dan lokasi strategis di tepi danau, kami menawarkan pengalaman ngopi yang berbeda. Kami percaya bahwa secangkir kopi yang baik dapat memulai percakapan yang baik dan menciptakan momen tak terlupakan bersama teman dan kerabat."
  },

  // Reviews
  reviews: {
    subtitle: "Ulasan jujur dari pelanggan Kotakan Cafe",
    maxCharacters: 140,
    items: [
      {
        name: "Harvey Fields",
        rating: 5,
        text: "Really all around great food and drinks for a great price! Riceboxes are their specialty and it shows, they are wonderful and incredibly filling and flavorful. The rest of their menu from snacks to coffee was also delicious, Nasi Goreng Kampung specifically is also a must try!",
        source: "Google Review"
      },
      {
        name: "Marthella Sirait",
        rating: 5,
        text: "My favorite is Honey Glazed Chicken, while Papalo likes Korean Spicy, and my son Malo really likes the fries! What makes Kotakan Cafe so fun is that the kids can swim at the same time.",
        source: "Google Review"
      },
      {
        name: "Vinny Novita Sari",
        rating: 5,
        text: "The food is delicious! Those who don't like spicy food should definitely try the Honey Glazed menu; you'll be hooked! The portions are just right, and there's a vegetable salad on the rice. It's a great place to hang out with family or friends.",
        source: "Google Review"
      },
      {
        name: "Rizky Julianawati",
        rating: 5,
        text: "I'm speechless after eating the honey glazed chicken, which is a shocker, it's only 25k more. Don't forget to eat it featuring lychee tea, it's sooo awesome. Plus, it's located at the beach in GDC, so you can take the kids to play in the beautiful water while Mom makes ganyem. I'll definitely be back.",
        source: "Google Review"
      },
    ]
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