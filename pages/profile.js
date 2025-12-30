import Layout from "../components/Layout";

export default function Profile() {
  const skills = [
    { 
      category: "Python Libraries", 
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      icon: "🐍"
    },
    { 
      category: "Database & SQL", 
      items: ["MySQL", "SQL", "Database Design", "Query Optimization", "Data Modeling"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      icon: "🗄️"
    },
    { 
      category: "Data Tools", 
      items: ["Power BI", "Excel", "Python", "Tableau", "Google Sheets"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      icon: "📊"
    },
    { 
      category: "Giao Tiếp", 
      items: ["Thuyết trình", "Trình bày ý tưởng", "Tương tác nhóm", "Tiếng Anh cơ bản"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      icon: "💬"
    },
    { 
      category: "Office Skills (MOS)", 
      items: ["Excel Advanced", "Word", "PowerPoint", "Google Workspace"],
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      icon: "📄"
    },
    { 
      category: "Làm Việc Nhóm", 
      items: ["Cộng tác hiệu quả", "Chia sẻ kiến thức", "Lắng nghe phản hồi", "Hỗ trợ đồng nghiệp"],
      gradient: "from-teal-500 to-emerald-500",
      bgGradient: "from-teal-50 to-emerald-50",
      icon: "🤝"
    },
  ];

  const socials = [
    { icon: "F", label: "Facebook", url: "https://www.facebook.com/Trung.Yangho/", color: "from-blue-600 to-blue-700" },
    { icon: "G", label: "GitHub", url: "https://github.com/shisa5523", color: "from-gray-800 to-gray-900" },
    { icon: "E", label: "Email", url: "https://mail.google.com/mail/?view=cm&fs=1&to=trungnguyen5523@gmail.com", color: "from-red-500 to-pink-500" },
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
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">
            Nguyễn Văn Trung
          </h1>
          <p className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold mb-6">
            Data Analyst | Python Developer | Data Enthusiast
          </p>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full">
            <span className="text-blue-800 font-semibold"> Chuyên gia phân tích dữ liệu & Chia sẻ kiến thức</span>
          </div>
        </div>
      </div>

      <section className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl -z-0"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-4"></span>
            Về Tôi
          </h2>
          <div className="space-y-4 text-gray-800 leading-relaxed text-lg">
            <p>
              Tôi là một <span className="font-semibold text-blue-700">Data Analyst</span> với đam mê phân tích dữ liệu, lập trình <span className="font-semibold text-cyan-700">Python</span>, và quản lý <span className="font-semibold text-orange-700">MySQL Database</span>. Tôi tin rằng dữ liệu là tài sản quý giá và có thể giúp chúng ta đưa ra những quyết định thông minh.
            </p>
            <p>
              Sở thích của tôi bao gồm: <span className="font-semibold">phân tích dữ liệu thống kê</span>, <span className="font-semibold">trực quan hóa insights bằng biểu đồ</span>, <span className="font-semibold">xây dựng mô hình dữ liệu</span>, và <span className="font-semibold">chia sẻ kiến thức</span> với cộng đồng.
            </p>
            <p>
              Qua blog này, tôi muốn giúp những người bắt đầu hành trình Data Analysis có cơ hội học hỏi các công cụ như Python, MySQL, Power BI, và Excel. Mục tiêu của tôi là xây dựng một cộng đồng Data Analyst sôi nổi tại Việt Nam.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-4"></span>
          Kỹ Năng & Chuyên Môn
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
                  {skill.icon}
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

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-4"></span>
          Sứ Mệnh & Tầm Nhìn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4"> Sứ Mệnh</h3>
            <p className="text-gray-800 leading-relaxed">
              Giúp mọi người học hỏi và nắm vững kỹ năng Data Analysis, từ những điều cơ bản đến nâng cao. Tôi muốn tạo một nguồn tài liệu tiếng Việt chất lượng cao về Python, MySQL, và các công cụ phân tích dữ liệu.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200 shadow-lg">
            <h3 className="text-2xl font-bold text-orange-900 mb-4"> Tầm Nhìn</h3>
            <p className="text-gray-800 leading-relaxed">
              Xây dựng một cộng đồng Data Analyst chuyên nghiệp tại Việt Nam, nơi mọi người có thể chia sẻ kiến thức, học hỏi lẫn nhau, và cùng nhau phát triển trong lĩnh vực phân tích dữ liệu.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
          <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-4"></span>
          Liên Kết Với Tôi
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
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
