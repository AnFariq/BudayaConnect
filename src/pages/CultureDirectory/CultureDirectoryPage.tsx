import React, { useState } from "react";
import {
  FadeIn,
  AnimatedCard,
  StaggerContainer,
  StaggerItem,
} from "../../components/ui/Animations";

const CultureDirectoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [province, setProvince] = useState("");

  const cultureData = [
    {
      id: 1,
      title: "Tari Kecak",
      category: "Tari",
      location: "Bali",
      description:
        'Tari tradisional Bali yang memukau dengan paduan suara "cak" yang khas dan gerakan sinkronisasi yang dramatis.',
      image:
        "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=400&h=300&fit=crop",
      tags: ["UNESCO", "Tradisional", "Bali"],
      rating: 4.8,
    },
    {
      id: 2,
      title: "Batik Tulis",
      category: "Seni",
      location: "Yogyakarta",
      description:
        "Seni tradisional membuat kain batik dengan teknik tulis tangan yang unik dan motif-motif khas nusantara.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      tags: ["Warisan Dunia", "Kerajinan", "Yogyakarta"],
      rating: 4.9,
    },
    {
      id: 3,
      title: "Wayang Kulit",
      category: "Seni Pertunjukan",
      location: "Jawa Tengah",
      description:
        "Seni pertunjukan boneka kulit yang menjadi warisan dunia UNESCO dengan cerita epik Ramayana dan Mahabharata.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      tags: ["UNESCO", "Pertunjukan", "Jawa"],
      rating: 4.7,
    },
    {
      id: 4,
      title: "Rendang",
      category: "Kuliner",
      location: "Sumatera Barat",
      description:
        "Masakan tradisional Padang yang terkenal dengan cita rasa rempah yang kaya dan tekstur yang empuk.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      tags: ["Kuliner", "Padang", "Rempah"],
      rating: 4.9,
    },
    {
      id: 5,
      title: "Angklung",
      category: "Musik",
      location: "Jawa Barat",
      description:
        "Alat musik tradisional dari bambu yang menghasilkan melodi indah dan telah diakui oleh UNESCO.",
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
      tags: ["UNESCO", "Musik", "Bambu"],
      rating: 4.6,
    },
    {
      id: 6,
      title: "Kerajinan Perak",
      category: "Kerajinan",
      location: "Bali",
      description:
        "Seni kerajinan perak tradisional Bali dengan teknik filigran yang halus dan desain yang rumit.",
      image:
        "https://images.unsplash.com/photo-1608343396422-44a5ee2fe7c1?w=400&h=300&fit=crop",
      tags: ["Kerajinan", "Perak", "Bali"],
      rating: 4.8,
    },
  ];

  const categories = [
    { value: "", label: "Semua Kategori" },
    { value: "tradition", label: "Tradisi" },
    { value: "art", label: "Seni" },
    { value: "music", label: "Musik" },
    { value: "dance", label: "Tari" },
    { value: "food", label: "Kuliner" },
    { value: "craft", label: "Kerajinan" },
    { value: "language", label: "Bahasa" },
  ];

  const provinces = [
    { value: "", label: "Semua Provinsi" },
    { value: "aceh", label: "Aceh" },
    { value: "sumut", label: "Sumatera Utara" },
    { value: "sumbar", label: "Sumatera Barat" },
    { value: "dki", label: "DKI Jakarta" },
    { value: "jabar", label: "Jawa Barat" },
    { value: "jateng", label: "Jawa Tengah" },
    { value: "diy", label: "DI Yogyakarta" },
    { value: "jatim", label: "Jawa Timur" },
    { value: "bali", label: "Bali" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-gold-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-gold-500 py-10 lg:py-18">
        <div className="absolute inset-0 bg-batik opacity-10"></div>
        <div className="relative container">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                Direktori{" "}
                <span className="text-gold-200">Budaya Indonesia</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/90 mb-8 max-w-3xl mx-auto">
                Jelajahi kekayaan budaya Indonesia dari Sabang hingga Merauke.
                Temukan warisan, tradisi, dan seni yang memukau.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-black/80">
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                  <span>500+ Budaya</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                  <span>34 Provinsi</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                  <span>10+ Kategori</span>
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-5">
        <div className="container">
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-gold p-8 border border-primary-100">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="🔍 Cari budaya..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>

                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {provinces.map((prov) => (
                    <option key={prov.value} value={prov.value}>
                      {prov.label}
                    </option>
                  ))}
                </select>

                <button className="btn-primary">Cari Budaya</button>
              </div>

              {/* Quick Filter Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-sm text-gray-600 mr-2">
                  Filter cepat:
                </span>
                {["UNESCO", "Populer", "Tradisional", "Modern"].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Culture Grid */}
      <section className="pb-16">
        <div className="container">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureData.map((culture) => (
              <StaggerItem key={culture.id}>
                <AnimatedCard className="card-culture group cursor-pointer">
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={culture.image}
                      alt={culture.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold-500 text-black text-sm font-medium rounded-full">
                        {culture.category}
                      </span>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
                        📍 {culture.location}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-4 left-4 flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-white text-sm font-medium">
                        {culture.rating}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                      {culture.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {culture.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {culture.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="w-full btn-outline group-hover:border-primary-500 group-hover:text-primary-600 transition-all">
                      Pelajari Lebih Lanjut →
                    </button>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pagination */}
      <section className="pb-16">
        <div className="container">
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                ← Previous
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-gold-500 text-black rounded-lg font-medium">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CultureDirectoryPage;
