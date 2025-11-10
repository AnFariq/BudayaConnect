import React, { useState } from "react";
import {
  FadeIn,
  AnimatedCard,
  StaggerContainer,
  StaggerItem,
} from "../../components/ui/Animations";

const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [province, setProvince] = useState("");

  const eventsData = [
    {
      id: 1,
      title: "Festival Bali Arts",
      category: "Festival",
      location: "Denpasar, Bali",
      date: "15-17 November 2024",
      description:
        "Festival tahunan yang menampilkan berbagai seni dan budaya tradisional Bali dengan pertunjukan tari, musik, dan seni rupa.",
      image:
        "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=400&h=300&fit=crop",
      price: "Gratis",
      attendees: 2500,
      tags: ["Seni", "Tradisional", "Bali"],
    },
    {
      id: 2,
      title: "Jakarta Culture Week",
      category: "Pameran",
      location: "Jakarta Pusat, DKI Jakarta",
      date: "20-25 November 2024",
      description:
        "Pekan budaya Jakarta dengan pameran kerajinan, kuliner, dan pertunjukan seni dari berbagai daerah di Indonesia.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      price: "Rp 50.000",
      attendees: 5000,
      tags: ["Pameran", "Kuliner", "Jakarta"],
    },
    {
      id: 3,
      title: "Wayang Kulit Performance",
      category: "Pertunjukan",
      location: "Yogyakarta, DIY",
      date: "22 November 2024",
      description:
        "Pertunjukan wayang kulit klasik dengan lakon Mahabharata yang dibawakan oleh dalang ternama.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      price: "Rp 25.000",
      attendees: 500,
      tags: ["Wayang", "Tradisional", "Yogyakarta"],
    },
    {
      id: 4,
      title: "Batik Workshop",
      category: "Workshop",
      location: "Surakarta, Jawa Tengah",
      date: "25 November 2024",
      description:
        "Workshop pembuatan batik tulis untuk pemula dengan instruktur ahli dari Solo.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      price: "Rp 150.000",
      attendees: 30,
      tags: ["Workshop", "Batik", "Solo"],
    },
    {
      id: 5,
      title: "Gamelan Concert",
      category: "Pertunjukan",
      location: "Bandung, Jawa Barat",
      date: "28 November 2024",
      description:
        "Konser musik gamelan dengan perpaduan musik tradisional dan modern.",
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
      price: "Rp 75.000",
      attendees: 800,
      tags: ["Musik", "Gamelan", "Bandung"],
    },
    {
      id: 6,
      title: "Traditional Wedding Ceremony",
      category: "Upacara",
      location: "Ubud, Bali",
      date: "30 November 2024",
      description:
        "Simulasi upacara pernikahan tradisional Bali dengan lengkap semua ritualnya.",
      image:
        "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=400&h=300&fit=crop",
      price: "Rp 100.000",
      attendees: 200,
      tags: ["Upacara", "Budaya", "Bali"],
    },
  ];

  const upcomingEvents = [
    {
      date: "15",
      month: "Nov",
      count: 3,
      color: "from-primary-500 to-primary-600",
    },
    { date: "22", month: "Nov", count: 5, color: "from-gold-500 to-gold-600" },
    {
      date: "28",
      month: "Nov",
      count: 2,
      color: "from-nature-500 to-nature-600",
    },
    {
      date: "05",
      month: "Dec",
      count: 4,
      color: "from-batik-500 to-batik-600",
    },
  ];

  const categories = [
    { value: "", label: "Semua Kategori" },
    { value: "festival", label: "Festival" },
    { value: "ceremony", label: "Upacara" },
    { value: "exhibition", label: "Pameran" },
    { value: "workshop", label: "Workshop" },
    { value: "performance", label: "Pertunjukan" },
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
      <section className="relative overflow-hidden bg-gradient-to-br from-gold-500 to-primary-600 py-10 lg:py-18">
        <div className="absolute inset-0 bg-batik opacity-10"></div>
        <div className="relative container">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                Event & Festival <span className="text-gold-200">Budaya</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/90 mb-8 max-w-3xl mx-auto">
                Temukan acara budaya dan festival di seluruh Indonesia. Ikuti
                perayaan warisan budaya kita.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-black/80">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-200">50+</div>
                  <div className="text-sm">Event Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-200">15K+</div>
                  <div className="text-sm">Peserta</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-200">34</div>
                  <div className="text-sm">Provinsi</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Search */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-white rounded-2xl shadow-gold p-8 border border-primary-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="🔍 Cari event..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                    </div>

                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
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
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      {provinces.map((prov) => (
                        <option key={prov.value} value={prov.value}>
                          {prov.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Quick Filter Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600 mr-2">
                      Filter cepat:
                    </span>
                    {["Gratis", "Minggu Ini", "Populer", "Workshop"].map(
                      (tag) => (
                        <button
                          key={tag}
                          className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm hover:bg-gold-200 transition-colors"
                        >
                          {tag}
                        </button>
                      ),
                    )}
                  </div>
                </div>
              </FadeIn>
              <div className="lg:col-span-1 py-6">
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl shadow-gold p-6 border border-primary-100">
                  <h3 className="text-xl font-bold mb-6 text-gradient-primary">
                    Event Mendatang
                  </h3>
                  <div className="space-y-4">
                    {upcomingEvents.slice(0, 2).map((event, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary-50 transition-colors cursor-pointer"
                      >
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center text-black font-bold shadow-lg`}
                        >
                          {event.date}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">
                            {event.month}
                          </p>
                          <p className="text-sm text-gray-600">
                            {event.count} Event
                          </p>
                        </div>
                        <div className="text-gold-500">→</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
            </div>

            {/* Upcoming Events Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl shadow-gold p-6 border border-primary-100">
                  <h3 className="text-xl font-bold mb-6 text-gradient-primary">
                    Event Mendatang
                  </h3>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary-50 transition-colors cursor-pointer"
                      >
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center text-black font-bold shadow-lg`}
                        >
                          {event.date}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">
                            {event.month}
                          </p>
                          <p className="text-sm text-gray-600">
                            {event.count} Event
                          </p>
                        </div>
                        <div className="text-gold-500">→</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-16">
        <div className="container">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event) => (
              <StaggerItem key={event.id}>
                <AnimatedCard className="card-culture group cursor-pointer">
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold-500 text-white text-sm font-medium rounded-full">
                        {event.category}
                      </span>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-bold rounded-full">
                        {event.price}
                      </span>
                    </div>

                    {/* Attendees */}
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <span className="text-white">👥</span>
                      <span className="text-white text-sm font-medium">
                        {event.attendees} peserta
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                      {event.title}
                    </h3>

                    {/* Date and Location */}
                    <div className="text-sm text-gray-600 mb-4 space-y-2">
                      <div className="flex items-center">
                        <span className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                          📅
                        </span>
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <span className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                          📍
                        </span>
                        {event.location}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {event.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="w-full btn-primary group-hover:shadow-gold transition-all">
                      Lihat Detail →
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
              <button className="px-4 py-2 bg-gradient-to-r from-gold-500 to-primary-500 text-black rounded-lg font-medium">
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

export default EventsPage;
