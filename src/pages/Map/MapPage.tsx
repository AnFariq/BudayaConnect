import React from 'react';

const MapPage: React.FC = () => {
  return (
    <div className="container">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Peta Budaya Indonesia</h1>
        <p className="text-lg text-gray-600">
          Temukan distribusi budaya secara geografis di seluruh Indonesia
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="card p-0">
            <div className="h-96 lg:h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-gray-600">Peta interaktif akan segera tersedia</p>
                <p className="text-sm text-gray-500 mt-2">Memuat peta budaya Indonesia...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Filter Peta</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori Budaya
                </label>
                <div className="space-y-2">
                  {['Tradisi', 'Seni', 'Musik', 'Tari', 'Kuliner', 'Kerajinan', 'Bahasa'].map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Provinsi
                </label>
                <select className="input-field">
                  <option value="">Semua Provinsi</option>
                  <option value="aceh">Aceh</option>
                  <option value="sumut">Sumatera Utara</option>
                  <option value="sumbar">Sumatera Barat</option>
                  <option value="dki">DKI Jakarta</option>
                  <option value="jabar">Jawa Barat</option>
                  <option value="jateng">Jawa Tengah</option>
                  <option value="diy">DI Yogyakarta</option>
                  <option value="jatim">Jawa Timur</option>
                  <option value="bali">Bali</option>
                </select>
              </div>

              <button className="btn-primary w-full">
                Terapkan Filter
              </button>
            </div>
          </div>

          <div className="card mt-6">
            <h3 className="text-lg font-semibold mb-4">Statistik</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Budaya</span>
                <span className="text-sm font-semibold">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Provinsi</span>
                <span className="text-sm font-semibold">38</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Kategori</span>
                <span className="text-sm font-semibold">7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;