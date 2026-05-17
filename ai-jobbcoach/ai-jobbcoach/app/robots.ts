export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ai-jobbcoach.vercel.app/sitemap.xml",
  };
}