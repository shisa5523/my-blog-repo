'use client';

import Navbar from './Navbar';
import StarField from './StarField';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <StarField />
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
      
        <main className="flex-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 max-w-6xl">
            {children}
          </div>
        </main>

        <footer className="mt-20 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-indigo-900/95 text-white backdrop-blur-sm border-t border-gray-700/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Blog Data
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Chia sẻ kiến thức lập trình hữu ích, từ cơ bản đến nâng cao. 
                  Nơi kết nối cộng đồng Data và đam mê dữ liệu tại Việt Nam.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <span className="mr-2">📚</span>
                  Chuyên đề
                </h3>
                <ul className="text-gray-400 text-sm space-y-3">
                  <li>
                    <a href="/blog" className="hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                      <span className="mr-2">🐍</span>
                      Python
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                      <span className="mr-2">🗄️</span>
                      MySQL
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                      <span className="mr-2">📊</span>
                      Data Analysis Tools
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <span className="mr-2">📧</span>
                  Liên hệ
                </h3>
                <ul className="text-gray-400 text-sm space-y-3 mb-4">
                  <li className="flex items-center hover:text-indigo-400 transition-colors group">
                    <span className="mr-2">✉️</span>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=trungnguyen5523@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      trungnguyen5523@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📍</span>
                    <span>TP Hồ Chí Minh, Việt Nam</span>
                  </li>
                </ul>
                <div className="flex space-x-3 mt-6">
                  <a 
                    href="https://www.facebook.com/Trung.Yangho/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                    title="Facebook"
                  >
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/shisa5523" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-xl flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                    title="GitHub"
                  >
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=trungnguyen5523@gmail.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400 rounded-xl flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                    title="Email"
                  >
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                  &copy; 2025 Blog Lập Trình. Tất cả quyền được bảo lưu.
                </p>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <span>Made with</span>
                  <span className="text-red-500 animate-pulse">❤️</span>
                  <span>by Developer</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
