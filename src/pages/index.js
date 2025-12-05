import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)} style={{
      background: 'linear-gradient(135deg, #fce7f3 0%, #f3e8ff 50%, #e0e7ff 100%)',
      padding: '4rem 0',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ fontSize: '4rem' }}>🔍</span>
        </div>
        <Heading as="h1" className="hero__title" style={{
          background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '3.5rem',
        }}>
          八卦天下
        </Heading>
        <p className="hero__subtitle" style={{ fontSize: '1.5rem', color: '#6b7280' }}>
          网罗天下八卦 · 娱乐圈 · 明星动态 · 时尚资讯
        </p>
        
        {/* 搜索框 */}
        <div style={{ 
          maxWidth: '600px', 
          margin: '2rem auto',
          position: 'relative' 
        }}>
          <input
            type="text"
            placeholder="搜索八卦..."
            style={{
              width: '100%',
              padding: '1rem 1rem 1rem 3rem',
              border: '2px solid #e9d5ff',
              borderRadius: '50px',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
          <span style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '1.2rem',
          }}>🔍</span>
        </div>

        {/* 热门话题 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginTop: '2rem',
        }}>
          <span style={{ color: '#ef4444', fontSize: '1.2rem' }}>🔥 热门:</span>
          {['#娱乐圈爆料', '#明星八卦', '#时尚资讯', '#热点追踪'].map((topic, idx) => (
            <Link
              key={idx}
              to="#"
              style={{
                color: '#a855f7',
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              {topic}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

function GossipCategories() {
  const categories = [
    { emoji: '🎬', name: '娱乐圈', link: '/category/entertainment' },
    { emoji: '⭐', name: '明星', link: '/category/celebrity' },
    { emoji: '👗', name: '时尚', link: '/category/fashion' },
    { emoji: '⚽', name: '体育', link: '/category/sports' },
    { emoji: '📱', name: '科技', link: '/category/tech' },
  ];

  return (
    <section style={{ padding: '3rem 0' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}>
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={cat.link}
              className="button"
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                background: 'white',
                color: '#4b5563',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <span style={{ marginRight: '0.5rem' }}>{cat.emoji}</span>
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - 网罗天下八卦`}
      description="娱乐圈八卦、明星动态、时尚资讯一网打尽">
      <HomepageHeader />
      <main>
        <GossipCategories />
        {/* <GossipContent /> */}
      </main>
    </Layout>
  );
}