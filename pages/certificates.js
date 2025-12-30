'use client';

import Layout from "../components/Layout";
import { useState } from "react";
import Image from "next/image";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      name: "JavaScript Essentials 1",
      description: "Chứng chỉ về các kiến thức cơ bản của JavaScript",
      icon: "📜",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      image: "/images/chungchi1.jpg",
      verifyLink: "https://www.credly.com/badges/cf885107-d8d9-4e42-a708-08e04827bfa7/public_url",
    },
    {
      name: "JavaScript Essentials 2",
      description: "Chứng chỉ về các kiến thức nâng cao của JavaScript",
      icon: "📜",
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      image: "/images/chungchi2.jpg",
      verifyLink: "https://www.credly.com/badges/db2b69fa-c537-4021-ae2d-ef32ca899612/public_url", 
    },
    {
      name: "Networking Basics",
      description: "Chứng chỉ về các kiến thức cơ bản về mạng máy tính",
      icon: "🌐",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      image: "/images/chungchi3.jpg",
      verifyLink: "https://www.credly.com/badges/575e616b-a510-4684-afd7-b490c6e08e64/public_url", 
    },
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <Layout>
      {/* Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Chứng Chỉ
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Tổng hợp các chứng chỉ và chứng nhận đã đạt được trong quá trình học tập và phát triển
          </p>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            onClick={() => openModal(cert)}
            className="group cursor-pointer"
          >
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden h-full">
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${cert.bgGradient}`}></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center text-4xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {cert.icon}
                </div>
                
                {/* Certificate Name */}
                <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent group-hover:text-transparent`}>
                  {cert.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* View Certificate Link */}
                <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700">
                  <span>Xem chứng chỉ</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h2 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${selectedCert.gradient} bg-clip-text text-transparent`}>
                {selectedCert.name}
              </h2>
              
              {/* Certificate Image */}
              <div className="relative w-full mb-6 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Verify Link */}
              <div className="flex justify-center">
                <a
                  href={selectedCert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${selectedCert.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform`}
                >
                  <span>Xác thực chứng chỉ</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Info Section */}
      <section className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full blur-3xl -z-0"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-4"></span>
            Về các chứng chỉ
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Các chứng chỉ này được cấp bởi các tổ chức giáo dục uy tín, thể hiện nỗ lực học tập và phát triển kỹ năng trong các lĩnh vực công nghệ thông tin. Mỗi chứng chỉ đều là một bước tiến trong hành trình phát triển sự nghiệp của tôi.
          </p>
        </div>
      </section>
    </Layout>
  );
}

