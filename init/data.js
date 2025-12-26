const sampleListings = [
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image:
      "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis Camp",
    description:
      "Experience the tranquility of the desert with our luxury oasis camp. Perfect for a unique getaway.",
    image:
      "https://images.unsplash.com/photo-1607305387299-0a3d7eb02cf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Merzouga",
    country: "Morocco",
  },
  {
    title: "Mountain Cabin Retreat",
    description:
      "Cozy up in our mountain cabin retreat, nestled in the heart of the Rockies. Ideal for a peaceful escape.",
    image:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Overwater Bungalow",
    description:
      "Stay in an overwater bungalow with direct access to the crystal-clear waters of the lagoon.",
    image:
      "https://images.unsplash.com/photo-1572623620264-a1e4cfb8f299?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 6000,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Urban Loft",
    description:
      "Modern loft in the heart of downtown with skyline views and easy access to local attractions.",
    image:
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Treehouse Escape",
    description:
      "Reconnect with nature in a secluded treehouse escape surrounded by forest and wildlife.",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Coastal Villa",
    description:
      "Enjoy breathtaking ocean views from this stunning coastal villa with private beach access.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Snowy Chalet",
    description:
      "Charming chalet nestled in snowy mountains, perfect for winter sports enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1606667121762-f690185a02b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Jungle Treehouse",
    description:
      "Stay high in the trees in this eco-friendly treehouse surrounded by jungle wildlife.",
    image:
      "https://images.unsplash.com/photo-1606788075763-0d92dc0ab22d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Lakefront A-Frame",
    description:
      "Modern A-frame cabin on a serene lakefront, perfect for relaxing getaways.",
    image:
      "https://images.unsplash.com/photo-1592595896551-f0c0f6fa7f9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2100,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Countryside Cottage",
    description:
      "Quaint cottage surrounded by rolling hills and farmland. Ideal for a rustic retreat.",
    image:
      "https://images.unsplash.com/photo-1585168081538-274b5df34ff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Luxury Penthouse",
    description:
      "Live in style in this luxurious penthouse with rooftop terrace and panoramic city views.",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348222?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 7000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  
  {
    title: "Safari Tent Adventure",
    description: "Immerse yourself in the wild on a luxury safari tent stay.",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1424,
    location: "Masai Mara",
    country: "Kenya"
  },
  {
    title: "Art Deco Studio",
    description: "A stylish Art Deco studio perfect for solo travelers or couples.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 4512,
    location: "Miami",
    country: "United States"
  },
  {
    title: "Lighthouse Stay",
    description: "Spend the night in a real lighthouse with ocean views.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3520,
    location: "Nova Scotia",
    country: "Canada"
  },
  {
    title: "Rustic Farmhouse",
    description: "A cozy and rustic farmhouse surrounded by nature.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3769,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Luxury Houseboat",
    description: "Sleep on water in this well-equipped luxury houseboat.",
    image: "https://images.unsplash.com/photo-1618173806754-7a3d32fdf7a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 5482,
    location: "Amsterdam",
    country: "Netherlands"
  },
  {
    title: "Tropical Bungalow",
    description: "Tropical getaway with lush garden surroundings and beach access.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2283,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Ice Hotel Room",
    description: "Experience the chill of staying in a room made entirely of ice.",
    image: "https://images.unsplash.com/photo-1608889179096-78eab5ef7b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2686,
    location: "Lapland",
    country: "Finland"
  },
  {
    title: "Island Tree Hut",
    description: "Live among the treetops on this private island escape.",
    image: "https://images.unsplash.com/photo-1534351590666-13e2e3f42d28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 4319,
    location: "Fiji",
    country: "Fiji"
  },
  {
    title: "Skyline Apartment",
    description: "A sleek apartment with panoramic city skyline views.",
    image: "https://images.unsplash.com/photo-1558980664-b6c84f1d6d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 4809,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Countryside Yurt",
    description: "Experience glamping in this cozy countryside yurt.",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 4916,
    location: "Mongolia",
    country: "Mongolia"
  },
  {
    title: "Beachside Dome",
    description: "A dome home just steps away from a pristine beach.",
    image: "https://images.unsplash.com/photo-1592194996307-cfe2cfbfe029?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2876,
    location: "Tulum",
    country: "Mexico"
  },
  {
    title: "Cave Dwelling",
    description: "Live like ancient cave dwellers with modern comfort.",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3093,
    location: "Cappadocia",
    country: "Turkey"
  },
  {
    title: "Vineyard Villa",
    description: "Enjoy wine country in a villa surrounded by vineyards.",
    image: "https://images.unsplash.com/photo-1573652636602-fc0f5d024b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1484,
    location: "Napa Valley",
    country: "United States"
  },
  {
    title: "Historic Manor",
    description: "Stay in a grand historic manor full of old-world charm.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3202,
    location: "Bath",
    country: "United Kingdom"
  },
  {
    title: "Rainforest Retreat",
    description: "Rainforest views and eco-luxury in this peaceful retreat.",
    image: "https://images.unsplash.com/photo-1600210490800-c0a7c4c55db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3030,
    location: "Costa Rica",
    country: "Costa Rica"
  },
  {
    title: "Floating Cabin",
    description: "Drift to sleep in this cozy floating cabin.",
    image: "https://images.unsplash.com/photo-1555443712-8c3f84aaf1f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3118,
    location: "Seattle",
    country: "United States"
  },
  {
    title: "Mediterranean Home",
    description: "Charming home on the Mediterranean coast with sea views.",
    image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 6314,
    location: "Sicily",
    country: "Italy"
  },
  {
    title: "Modern Tiny House",
    description: "Tiny but modern home with all essentials in a minimalist design.",
    image: "https://images.unsplash.com/photo-1614850522746-fb8150a1c6a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3480,
    location: "Oslo",
    country: "Norway"
  },
  {
    title: "Hilltop Glass House",
    description: "A futuristic glass house with breathtaking hilltop views.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 6723,
    location: "Cape Town",
    country: "South Africa"
  }
];


module.exports = { data: sampleListings };