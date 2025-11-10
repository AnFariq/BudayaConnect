import React from 'react';

const CommunityPage: React.FC = () => {
  return (
    <div className="container">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Komunitas Budaya</h1>
        <p className="text-lg text-gray-600">
          Terhubung dengan pecinta budaya dan berbagi pengalaman
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-4">Buat Postingan</h3>
            <textarea
              placeholder="Bagikan pengalaman budaya Anda..."
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              rows={3}
            />
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2">
                <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
              </div>
              <button className="btn-primary">
                Posting
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {[1, 2, 3].map((post) => (
              <div key={post} className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold">User {post}</h4>
                      <span className="text-sm text-gray-500">• 2 jam yang lalu</span>
                    </div>
                    <p className="text-sm text-gray-600">Pecinta Budaya Jawa</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-700 mb-3">
                    Baru saja mengunjungi Festival Keraton Yogyakarta! Pengalaman yang luar biasa bisa melihat langsung 
                    berbagai seni tradisional Jawa. Sangat recommended untuk dikunjungi bersama keluarga.
                  </p>
                  <div className="h-64 bg-gray-200 rounded-lg"></div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="text-sm">24</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="text-sm">8</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m0 0A9.001 9.001 0 0012 21c4.474 0 8.268-3.12 9.032-7.326" />
                      </svg>
                      <span className="text-sm">Bagikan</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="card mb-6">
            <h3 className="text-lg font-semibold mb-4">Komunitas Populer</h3>
            <div className="space-y-3">
              {['Pecinta Wayang Kulit', 'Komunitas Batik Indonesia', 'Festival Budaya Nusantara'].map((community) => (
                <div key={community} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-sm">K</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{community}</p>
                      <p className="text-xs text-gray-500">1.2k anggota</p>
                    </div>
                  </div>
                  <button className="btn-outline text-xs px-3 py-1">
                    Gabung
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Trending Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['#wayangkulit', '#batik', '#festivalbudaya', '#tradisijawa', '#senitari', '#kulinerindonesia'].map((tag) => (
                <span key={tag} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-primary-100 hover:text-primary-700 cursor-pointer transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;