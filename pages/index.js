import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  const features = [
    { 
      icon: "🐍", 
      title: "Python", 
      desc: "Ngôn ngữ lập trình mạnh mẽ cho Data Analysis",
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    { 
      icon: "🗄️", 
      title: "MySQL", 
      desc: "Quản lý và truy vấn dữ liệu hiệu quả",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    { 
      icon: "📊", 
      title: "Data Analysis Tools", 
      desc: "Pandas, Power BI, Excel và các công cụ DA chuyên nghiệp",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
  ];

  const styles = '.float-animation { animation: float 6s ease-in-out infinite; } .glow-animation { animation: glow 3s ease-in-out infinite; } .title-animate { animation: titleSlide 0.8s ease-out; } @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(2deg); } } @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.4), 0 0 40px rgba(168, 85, 247, 0.2); } 50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.6), 0 0 60px rgba(168, 85, 247, 0.4); } } @keyframes titleSlide { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }';

  return (
    <Layout>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      <section className="mb-20 relative overflow-hidden pt-10">
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Text Content - Left Side */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight font-cabin title-animate">
                <span className="block text-gray-300 mb-3 text-2xl md:text-4xl tracking-wider">Chào mừng đến với</span>
              </h1>
              
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight font-cabin mb-6 title-animate" style={{ animationDelay: '0.2s' }}>
                <span className="block bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
                  Blog Data Analysis của Nguyễn Văn Trung
                </span>
              </h2>
              
              <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                Nơi chia sẻ kiến thức về phân tích dữ liệu, hướng dẫn Python, MySQL, Power BI và các công cụ DA chuyên nghiệp
              </p>
              
              <div className="flex justify-center md:justify-start">
                <Link 
                  href="/blog"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/60 hover:scale-110 transform active:scale-95"
                >
                  <span>Khám phá Bài Viết</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
            
            {/* Avatar - Right Side */}
            <div className="flex-shrink-0">
              <div className="float-animation">
                <Image
                  src="/images/profile.jpg"
                  alt="Nguyễn Văn Trung"
                  width={220}
                  height={220}
                  className="rounded-2xl shadow-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {features.map((feature, idx) => (
          <div 
            key={idx}
            className="group relative bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-indigo-400/50 overflow-hidden"
          >
            <div className={"absolute inset-0 bg-gradient-to-br " + feature.bgGradient + " opacity-0 group-hover:opacity-5 transition-opacity duration-300"}></div>
            <div className="relative">
              <div className={"w-16 h-16 bg-gradient-to-br " + feature.gradient + " rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
            </div>
            <div className={"absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r " + feature.gradient + " transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"}></div>
          </div>
        ))}
      </section>

      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600/80 via-purple-600/80 to-pink-600/80 p-12 md:p-16 text-center shadow-2xl backdrop-blur-sm border border-white/10">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bắt đầu học Data Analysis ngay hôm nay
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Đọc các bài viết chi tiết, ví dụ thực tế, và luyện tập để trở thành Data Analyst chuyên nghiệp
          </p>
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 transform active:scale-95"
          >
            <span>Đi đến Blog</span>
            <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}