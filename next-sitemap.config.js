/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://nsk.yurist42.ru/",
  generateRobotsTxt: true, // (optional)
  // Другие опции...
  // Альтернативно можно использовать шаблоны путей
  // additionalPaths: async (config) => {
  //   return [{ loc: '/extra-page', lastmod: new Date().toISOString() }]
  // },
};
