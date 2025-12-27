import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-indigo-50/30">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 max-w-6xl">
          {children}
        </div>
      </main>

      <footer className="mt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Blog Code
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Chia sẻ kiến thức lập trình hữu ích, từ cơ bản đến nâng cao. 
                Nơi kết nối cộng đồng developer Việt Nam.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="mr-2">📖</span>
                Chuyên đề
              </h3>
              <ul className="text-gray-400 text-sm space-y-3">
                <li>
                  <a href="/blog" className="hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                    JavaScript
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                    Java
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-indigo-400 transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                    Web Development
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="mr-2">🔗</span>
                Liên hệ
              </h3>
              <ul className="text-gray-400 text-sm space-y-3">
                <li className="flex items-center hover:text-indigo-400 transition-colors">
                  <span className="mr-2">📧</span>
                  <a href="mailto:trungnguyen5523@gmail.com" className="hover:underline">
                    trungnguyen5523@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📍</span>
                  <span>TP Hồ Chí Minh, Việt Nam</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-200 transform hover:scale-110">
                  <span className="text-lg">💼</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-200 transform hover:scale-110">
                  <span className="text-lg">🐙</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-200 transform hover:scale-110">
                  <span className="text-lg">🐦</span>
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
  );
}