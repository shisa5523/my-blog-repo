import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function PostPage({ frontmatter, html, slug }) {
  const shareUrl = `https://your-blog.com/blog/${slug}`;

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link 
          href="/blog" 
          className="group inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          <span>Quay lại Blog</span>
        </Link>
      </nav>

      {/* Post Header */}
      <article className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 h-2"></div>
        
        <div className="p-8 md:p-12">
          <header className="mb-10 pb-8 border-b border-gray-200">
            <div className="flex flex-wrap gap-2 mb-4">
              {slug.split('-').slice(0, -1).map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-xs font-bold"
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              {frontmatter.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <span className="flex items-center space-x-2">
                <span className="text-xl">📅</span>
                <span className="font-medium">
                  {new Date(frontmatter.date).toLocaleDateString('vi-VN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="text-xl">⏱️</span>
                <span className="font-medium">{Math.ceil(html.split(' ').length / 200)} phút đọc</span>
              </span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none mb-10">
            <style>{`
              .prose {
                color: #374151;
              }
              .prose h2 {
                font-size: 2rem;
                font-weight: 800;
                color: #111827;
                margin-top: 3rem;
                margin-bottom: 1.5rem;
                padding-top: 1.5rem;
                border-top: 2px solid #e5e7eb;
                background: linear-gradient(to right, #4f46e5, #7c3aed);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              }
              .prose h3 {
                font-size: 1.5rem;
                font-weight: 700;
                color: #1f2937;
                margin-top: 2rem;
                margin-bottom: 1rem;
              }
              .prose p {
                color: #4b5563;
                line-height: 1.9;
                margin-bottom: 1.5rem;
                font-size: 1.125rem;
              }
              .prose ul, .prose ol {
                margin-bottom: 1.5rem;
                margin-left: 1.5rem;
              }
              .prose li {
                color: #4b5563;
                margin-bottom: 0.75rem;
                line-height: 1.8;
              }
              .prose li::marker {
                color: #6366f1;
              }
              .prose code {
                background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
                color: #dc2626;
                padding: 0.25rem 0.5rem;
                border-radius: 0.375rem;
                font-size: 0.875rem;
                font-family: 'Fira Code', 'Courier New', monospace;
                font-weight: 600;
                border: 1px solid #e5e7eb;
              }
              .prose pre {
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                color: #f1f5f9;
                padding: 1.5rem;
                border-radius: 0.75rem;
                overflow-x: auto;
                margin: 2rem 0;
                border-left: 4px solid #6366f1;
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
              }
              .prose pre code {
                background: transparent;
                color: #f1f5f9;
                padding: 0;
                border-radius: 0;
                border: none;
                font-weight: 400;
              }
              .prose a {
                color: #6366f1;
                text-decoration: none;
                font-weight: 600;
                border-bottom: 2px solid #e0e7ff;
                transition: all 0.2s;
              }
              .prose a:hover {
                color: #4f46e5;
                border-bottom-color: #6366f1;
              }
              .prose blockquote {
                border-left: 4px solid #6366f1;
                padding-left: 1.5rem;
                font-style: italic;
                color: #6b7280;
                margin: 2rem 0;
                background: linear-gradient(to right, #f0f9ff, transparent);
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;
              }
              .prose img {
                max-width: 100%;
                height: auto;
                border-radius: 1rem;
                margin: 2rem 0;
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
              }
              .prose table {
                border-collapse: collapse;
                width: 100%;
                margin: 2rem 0;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
              }
              .prose table th,
              .prose table td {
                border: 1px solid #e5e7eb;
                padding: 1rem;
                text-align: left;
              }
              .prose table th {
                background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                color: white;
                font-weight: 700;
              }
              .prose table tr:nth-child(even) {
                background-color: #f9fafb;
              }
              .prose strong {
                color: #111827;
                font-weight: 700;
              }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>

          {/* Share Section */}
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl border border-indigo-100 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">📤</span>
              Chia sẻ bài viết này
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(frontmatter.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <span>𝕏</span>
                <span>Twitter</span>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <span>f</span>
                <span>Facebook</span>
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  alert('Sao chép link thành công!');
                }}
                className="group inline-flex items-center space-x-2 bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <span>🔗</span>
                <span>Copy Link</span>
              </button>
            </div>
          </div>

          {/* Tags Section */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🏷️</span>
              Thể loại
            </h3>
            <div className="flex flex-wrap gap-3">
              {slug.split('-').slice(0, -1).map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 transform"
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Khám phá thêm</h2>
        <Link 
          href="/blog" 
          className="group inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
        >
          <span>Xem tất cả bài viết</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDirectory);
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(process.cwd(), 'posts', `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);
  const html = marked(content);

  return { props: { frontmatter, html, slug: params.slug }, revalidate: 3600 };
}