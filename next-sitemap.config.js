/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://integralgroups.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin*', '/api*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
    additionalSitemaps: [
      'https://integralgroups.in/sitemap.xml',
    ],
  },
  // Default priorities for specific paths
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (['/ecosystem', '/labs', '/systems', '/research', '/journal', '/about', '/collaborate', '/contact', '/automation', '/ai-workflows', '/infrastructure'].includes(path)) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/journal/') || path.startsWith('/research/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
