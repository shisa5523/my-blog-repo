import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Blog({ posts }) {
  // Nhóm posts theo ngôn ngữ
  const groupedPosts = posts.reduce((acc, post) => {
    const lang = post.slug.split('-')[0]; // 'javascript' hoặc 'java'
    if (!acc[lang]) acc[lang] = [];
    acc[lang].push(post);
    return acc;
  }, {});

  const langLabels = { javascript: 'JavaScript', java: 'Java' };

  return (
    <Layout>
      {/* Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Danh Sách Bài Viết
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Tổng cộng <span className="font-bold text-indigo-600 text-2xl">{posts.length}</span> bài viết
        </p>
      </div>

      {/* Posts by Category */}
      {Object.entries(groupedPosts).map(([lang, langPosts]) => (
        <section key={lang} className="mb-16">
          <div className="flex items-center mb-8 pb-4 border-b-2 border-gray-200">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mr-4 shadow-lg ${
              lang === 'javascript' 
                ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                : 'bg-gradient-to-br from-red-400 to-pink-500'
            }`}>
              {lang === 'javascript' ? '⚡' : '☕'}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{langLabels[lang]}</h2>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-bold text-white shadow-md ${
              lang === 'javascript' 
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                : 'bg-gradient-to-r from-red-500 to-pink-500'
            }`}>
              {langPosts.length} {langPosts.length === 1 ? 'bài' : 'bài'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {langPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group block no-underline"
              >
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden h-full">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${
                    lang === 'javascript' 
                      ? 'from-yellow-50 to-orange-50' 
                      : 'from-red-50 to-pink-50'
                  }`}></div>
                  
                  <div className="relative">
                    {/* Category badge */}
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4 shadow-md ${
                      lang === 'javascript' 
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                        : 'bg-gradient-to-r from-red-500 to-pink-500'
                    }`}>
                      {langLabels[lang]}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
                      {post.frontmatter.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-500 flex items-center">
                        <span className="mr-2">📅</span>
                        {new Date(post.frontmatter.date).toLocaleDateString('vi-VN', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 flex items-center">
                        Đọc thêm
                        <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    lang === 'javascript' 
                      ? 'from-yellow-400 to-orange-500' 
                      : 'from-red-400 to-pink-500'
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .map((filename) => {
      const slug = filename.replace('.md', '');
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontmatter, content } = matter(fileContents);
      const excerpt = content.substring(0, 120).trim() + '...';
      return { slug, frontmatter, excerpt };
    })
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return { props: { posts }, revalidate: 3600 };
}