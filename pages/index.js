import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  const features = [
    { 
      icon: "", 
      title: "JavaScript", 
      desc: "Lập trình web hiện đại với JS",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    { 
      icon: "", 
      title: "Java", 
      desc: "Kiến thức backend vững chắc",
      gradient: "from-red-400 to-pink-500",
      bgGradient: "from-red-50 to-pink-50"
    },
    { 
      icon: "", 
      title: "Web Dev", 
      desc: "Từ frontend đến deployment",
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50"
    },
  ];

  return (
    <Layout>
      <section className="text-center mb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="block text-gray-900 mb-2">Chào mừng đến với</span>
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Blog Lập Trình
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nơi chia sẻ kiến thức về lập trình mạng, Java, JavaScript và nhiều hơn nữa.
          </p>
          <Link 
            href="/blog"
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105 transform"
          >
            <span>Khám phá Bài Viết</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300"></span>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {features.map((feature, idx) => (
          <div 
            key={idx}
            className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
          >
            <div className={"absolute inset-0 bg-gradient-to-br " + feature.bgGradient + " opacity-0 group-hover:opacity-100 transition-opacity duration-300"}></div>
            <div className="relative">
              <div className={"w-16 h-16 bg-gradient-to-br " + feature.gradient + " rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
            <div className={"absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r " + feature.gradient + " transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"}></div>
          </div>
        ))}
      </section>

      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 md:p-16 text-center shadow-2xl">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bắt đầu học lập trình ngay hôm nay
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Đọc các bài viết chi tiết, ví dụ thực tế, và luyện tập coding để nâng cao kỹ năng của bạn
          </p>
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            <span>Đi đến Blog</span>
            <span className="text-xl"></span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: {}, revalidate: 3600 };
}
