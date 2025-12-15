// central product config shared across carousel, grid, cart, and quick view
export const PRODUCTS = {
  p1: {
    id: "p1",
    name: "Motion Shell Jacket",
    price: 320,
    hero: {
      frames: [
        "https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7671343/pexels-photo-7671343.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7671168/pexels-photo-7671168.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      altFrame:
        "https://images.pexels.com/photos/7671343/pexels-photo-7671343.jpeg?auto=compress&cs=tinysrgb&w=600",
      blurb: "Stormproof, featherlight, fully taped seams."
    },
    grid: {
      frames: [
        "https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7671168/pexels-photo-7671168.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7671170/pexels-photo-7671170.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      chips: ["Water‑resistant", "Recycled fill"],
      swatches: ["charcoal", "sand", "olive"],
      description: "Engineered for layered movement and sudden weather shifts."
    },
    cart: {
      image:
        "https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=200",
      meta: "Charcoal · M"
    },
    quickView: {
      description:
        "Stormproof shell with mapped insulation zones and articulated sleeves for unrestricted motion.",
      badges: ["Recycled fill", "Water‑resistant", "Fully taped seams"],
      gallery: [
        "https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/7671168/pexels-photo-7671168.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/7671170/pexels-photo-7671170.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  },
  p2: {
    id: "p2",
    name: "Linear Leather Sneaker",
    price: 190,
    hero: {
      frames: [
        "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3738089/pexels-photo-3738089.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3738090/pexels-photo-3738090.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      altFrame:
        "https://images.pexels.com/photos/3738089/pexels-photo-3738089.jpeg?auto=compress&cs=tinysrgb&w=600",
      blurb: "Clean profile, cushioned sole, everyday ready."
    },
    grid: {
      frames: [
        "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3738089/pexels-photo-3738089.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3738090/pexels-photo-3738090.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      chips: ["Italian leather", "Foam midsole"],
      sizes: ["40", "41", "42", "43"],
      description: "A low‑noise profile that pairs with every silhouette."
    },
    cart: {
      image:
        "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=200",
      meta: "White · 42"
    },
    quickView: {
      description:
        "Minimal silhouette built with soft-grain leather, cushioned midsole, and a subtle cup sole.",
      badges: ["Italian leather", "Foam midsole", "Everyday support"],
      gallery: [
        "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3738089/pexels-photo-3738089.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3738090/pexels-photo-3738090.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  },
  p3: {
    id: "p3",
    name: "Axis Tote",
    price: 260,
    hero: {
      frames: [
        "https://images.pexels.com/photos/7676423/pexels-photo-7676423.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7676440/pexels-photo-7676440.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7676442/pexels-photo-7676442.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      altFrame:
        "https://images.pexels.com/photos/7676440/pexels-photo-7676440.jpeg?auto=compress&cs=tinysrgb&w=600",
      blurb: "Magnetic closure, laptop sleeve, soft grain leather."
    },
    grid: {
      frames: [
        "https://images.pexels.com/photos/7676423/pexels-photo-7676423.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7676440/pexels-photo-7676440.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7676442/pexels-photo-7676442.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      chips: ["Laptop sleeve", "Soft‑grain leather"],
      swatches: ["black", "sand"],
      description: "An everyday carry system with structured form and hidden pockets."
    },
    cart: {
      image:
        "https://images.pexels.com/photos/7676423/pexels-photo-7676423.jpeg?auto=compress&cs=tinysrgb&w=200",
      meta: "Black"
    },
    quickView: {
      description:
        "A structured tote with magnetic top, padded laptop sleeve, and pockets for everyday carry.",
      badges: ["Laptop sleeve", "Soft‑grain leather", "Hidden pockets"],
      gallery: [
        "https://images.pexels.com/photos/7676423/pexels-photo-7676423.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/7676440/pexels-photo-7676440.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/7676442/pexels-photo-7676442.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  }
};

