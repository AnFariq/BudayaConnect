import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import {
  FadeIn,
  AnimatedCard,
  StaggerContainer,
  StaggerItem,
} from "../../components/ui/Animations";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-gold-50 py-12 sm:py-16 md:py-20 lg:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-batik opacity-20"></div>
        <div className="absolute top-20 right-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-gold-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center px-4 py-2 bg-gold-100 text-gold-800 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-2 animate-pulse"></span>
                Jelajahi Keajaiban Nusantara
              </div>
            </FadeIn>

            {/* Heading */}
            <FadeIn delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="block text-gray-900 mb-1 sm:mb-2">
                  Temukan Keindahan
                </span>
                <span className="block text-gradient-primary">
                  Budaya Indonesia
                </span>
              </h1>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.4}>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
                Mari menjelajahi warisan budaya yang kaya, tradisi yang memukau,
                dan cerita di balik setiap keunikan Indonesia. Bergabunglah
                dalam perjalanan melestarikan keberagaman bangsa.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                <Link
                  to={ROUTES.CULTURE_DIRECTORY}
                  className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
                >
                  🎭 Jelajahi Budaya
                </Link>
                <Link
                  to={ROUTES.MAP}
                  className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
                >
                  🗺️ Lihat Peta Budaya
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-12 sm:py-20 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="text-gradient-primary">Platform Lengkap</span>{" "}
                untuk Eksplorasi Budaya
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Temukan berbagai fitur menarik yang akan membawa Anda lebih
                dekat dengan kekayaan budaya Indonesia
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: "🏛️",
                title: "Direktori Budaya",
                description:
                  "Koleksi lengkap tradisi, seni, dan warisan budaya dari seluruh nusantara",
                color: "from-primary-500 to-primary-600",
              },
              {
                icon: "🗺️",
                title: "Peta Interaktif",
                description:
                  "Jelajahi distribusi budaya secara geografis dengan peta interaktif",
                color: "from-gold-500 to-gold-600",
              },
              {
                icon: "🎪",
                title: "Event & Festival",
                description:
                  "Informasi lengkap acara budaya dan festival di seluruh Indonesia",
                color: "from-nature-500 to-nature-600",
              },
              {
                icon: "👥",
                title: "Komunitas",
                description:
                  "Terhubung dengan pecinta budaya dan berbagi pengalaman",
                color: "from-batik-500 to-batik-600",
              },
            ].map((feature, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="p-6 sm:p-8 text-center group h-full">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-2xl sm:text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* POPULAR CULTURE SECTION */}
      <section className="py-12 sm:py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-gold-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Budaya Populer{" "}
                <span className="text-gradient-gold">Minggu Ini</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Temukan warisan budaya yang sedang tren dan populer di kalangan
                masyarakat
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Tari Kecak",
                location: "Bali",
                description:
                  "Tari tradisional Bali yang memukau dengan paduan suara 'cak' yang khas dan gerakan sinkronisasi yang dramatis.",
                image:
                  "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600&h=400&fit=crop",
                tags: ["Tari Tradisional", "UNESCO", "Bali"],
              },
              {
                title: "Batik Tulis",
                location: "Yogyakarta",
                description:
                  "Seni tradisional membuat kain batik dengan teknik tulis tangan yang unik dan motif-motif khas nusantara.",
                image:
                  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
                tags: ["Warisan Dunia", "Seni", "Tradisi"],
              },
              {
                title: "Wayang Kulit",
                location: "Jawa Tengah",
                description:
                  "Seni pertunjukan boneka kulit yang menjadi warisan dunia UNESCO dengan cerita epik Ramayana dan Mahabharata.",
                image:
                  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=600&h=400&fit=crop",
                tags: ["UNESCO", "Pertunjukan", "Jawa"],
              },
            ].map((culture, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="group cursor-pointer h-full flex flex-col">
                  <div className="relative overflow-hidden h-56 sm:h-64 rounded-t-2xl">
                    <img
                      src={culture.image}
                      alt={culture.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                      <span className="px-3 py-1 bg-gold-500 text-black text-xs sm:text-sm font-medium rounded-full">
                        {culture.location}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-2xl font-bold mb-2 text-gray-900">
                      {culture.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 flex-grow leading-relaxed">
                      {culture.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {culture.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-xs sm:text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-r from-primary-600 to-gold-500 text-center px-4">
        <div className="container mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
              Siap Memulai Perjalanan Budaya?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Bergabunglah dengan ribuan orang yang telah menjelajahi dan
              melestarikan kekayaan budaya Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-base sm:text-lg w-full sm:w-auto">
                <a href="">Mulai Sekarang</a>
              </button>
              <button className="border-2 border-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-base sm:text-lg w-full sm:w-auto">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
