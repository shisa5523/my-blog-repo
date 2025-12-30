import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Blog({ posts }) {
  // Nhóm posts theo category
  const groupedPosts = posts.reduce((acc, post) => {
    const category = post.frontmatter.category || 'Khác';
    if (!acc[category]) acc[category] = [];
    acc[category].push(post);
    return acc;
  }, {});

  const categoryConfig = {
    'Python': {
      icon: '🐍',
      gradient: 'from-blue-400 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      hoverGradient: 'from-blue-100 to-cyan-100'
    },
    'MySQL': {
      icon: '🗄️',
      gradient: 'from-orange-400 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      hoverGradient: 'from-orange-100 to-red-100'
    },
    'Data Tools': {
      icon: '📊',
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      hoverGradient: 'from-green-100 to-emerald-100'
    },
    'Khác': {
      icon: '📝',
      gradient: 'from-gray-400 to-slate-500',
      bgGradient: 'from-gray-50 to-slate-50',
      hoverGradient: 'from-gray-100 to-slate-100'
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
          <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Danh Sách Bài Viết
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Tổng cộng <span className="font-bold text-cyan-300 text-2xl">{posts.length}</span> bài viết
        </p>
      </div>

      {/* Posts by Category */}
      {Object.entries(groupedPosts).map(([category, categoryPosts]) => {
        const config = categoryConfig[category] || categoryConfig['Khác'];
        
        return (
          <section key={category} className="mb-16">
            <div className="flex items-center mb-8 pb-4 border-b-2 border-gray-300">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mr-4 shadow-lg bg-gradient-to-br ${config.gradient}`}>
                {config.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-white">{category}</h2>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-bold text-white shadow-md bg-gradient-to-r ${config.gradient}`}>
                {categoryPosts.length} {categoryPosts.length === 1 ? 'bài' : 'bài'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryPosts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="group block no-underline"
                >
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden h-full">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${config.hoverGradient}`}></div>
                    
                    <div className="relative">
                      {/* Category badge */}
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4 shadow-md bg-gradient-to-r ${config.gradient}`}>
                        {category}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
                        {post.frontmatter.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                        <span className="text-sm text-gray-500 flex items-center">
                          <span className="mr-2"></span>
                          {new Date(post.frontmatter.date).toLocaleDateString('vi-VN', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 flex items-center">
                          Đọc thêm
                          <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200"></span>
                        </span>
                      </div>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
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
