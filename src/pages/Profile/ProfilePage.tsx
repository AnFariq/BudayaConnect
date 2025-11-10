import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="container">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Profil Saya</h1>
        <p className="text-lg text-gray-600">
          Kelola informasi profil dan kontribusi budaya Anda
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="card">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600 mb-4">john.doe@example.com</p>
              <div className="flex justify-center space-x-2 mb-4">
                <span className="text-sm bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                  Kontributor
                </span>
                <span className="text-sm bg-secondary-100 text-secondary-800 px-2 py-1 rounded-full">
                  Verified
                </span>
              </div>
              <button className="btn-outline w-full mb-2">
                Edit Profil
              </button>
              <button className="btn-outline w-full">
                Pengaturan
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-3">Statistik</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Kontribusi</span>
                  <span className="text-sm font-semibold">42</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Pengikut</span>
                  <span className="text-sm font-semibold">1.2k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Mengikuti</span>
                  <span className="text-sm font-semibold">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Suka</span>
                  <span className="text-sm font-semibold">5.6k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white border-b border-gray-200">
            <nav className="flex space-x-8">
              <button className="py-4 px-1 border-b-2 border-primary-500 text-primary-600 font-medium">
                Kontribusi Saya
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Disimpan
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Aktivitas
              </button>
            </nav>
          </div>

          <div className="py-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Kontribusi Terbaru</h3>
              <button className="btn-primary">
                Tambah Kontribusi
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="card">
                  <div className="h-32 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                      Tradisi
                    </span>
                    <span className="text-sm text-gray-500">2 hari lalu</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Kontribusi Budaya {item}</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Deskripsi singkat kontribusi budaya yang telah ditambahkan.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 text-sm text-gray-500">
                      <span>👍 24</span>
                      <span>💬 8</span>
                      <span>👁️ 156</span>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;