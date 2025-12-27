import Layout from "../components/Layout";

export default function Profile() {
  const skills = [
    { 
      category: "Frontend", 
      items: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    { 
      category: "Backend", 
      items: ["Java", "Node.js", "REST API", "Database"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    { 
      category: "Tools", 
      items: ["Git", "VS Code", "Docker", "Linux"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
  ];

  const socials = [
    { icon: "", label: "Facebook", url: "https://www.facebook.com/Trung.Yangho/", color: "from-blue-600 to-blue-700" },
    { icon: "", label: "GitHub", url: "https://github.com/shisa5523", color: "from-gray-800 to-gray-900" },
    { icon: "", label: "Twitter", url: "#", color: "from-sky-400 to-sky-500" },
  ];

  return (
    <Layout>
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative">
          <img 
            src="/images/profile.jpg"
            alt="Profile"
            className="w-40 h-40 mx-auto mb-6 rounded-3xl object-cover shadow-2xl shadow-purple-500/30 transform hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-3">
            Nguyễn Văn Trung
          </h1>
          <p className="text-2xl md:text-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold mb-6">
            Full Stack Developer
          </p>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
            <span className="text-indigo-700 font-semibold"> Đam mê lập trình & Chia sẻ kiến thức</span>
          </div>
        </div>
      </div>

      <section className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full blur-3xl -z-0"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-4"></span>
            Về Tôi
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Tôi là một lập trình viên fullstack đam mê với kiến thức sâu về <span className="font-semibold text-indigo-600">JavaScript</span>, <span className="font-semibold text-purple-600">Java</span> và các công nghệ web hiện đại.
            </p>
            <p>
              Sở thích của tôi bao gồm: <span className="font-semibold">lập trình mạng</span>, <span className="font-semibold">phát triển ứng dụng web</span>, và <span className="font-semibold">chia sẻ kiến thức</span> với cộng đồng.
            </p>
            <p>
              Qua blog này, tôi muốn giúp những người mới bắt đầu có cơ hội học hỏi và phát triển kỹ năng lập trình của mình.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <span className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-4"></span>
          Kỹ Năng
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={"absolute inset-0 bg-gradient-to-br " + skill.bgGradient + " opacity-0 group-hover:opacity-100 transition-opacity duration-300"}></div>
              <div className="relative z-10">
                <div className={"w-14 h-14 bg-gradient-to-br " + skill.gradient + " rounded-xl flex items-center justify-center text-2xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"}>
                  {skill.category === "Frontend" ? "" : skill.category === "Backend" ? "" : ""}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIdx) => (
                    <span 
                      key={itemIdx}
                      className={"px-4 py-2 bg-gradient-to-r " + skill.gradient + " text-white rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 transform"}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center">
          <span className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-4"></span>
          Kết Nối Với Tôi
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              className={"group relative px-8 py-4 bg-gradient-to-r " + social.color + " rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-2"}
            >
              <span className="text-2xl">{social.icon}</span>
              <span>{social.label}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
