import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("news"))
    .sort((a, b) => +b.data.date - +a.data.date);

  return rss({
    title: "IDNET — English",
    description: "rss feed",
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title_en,
      description: p.data.text_en,
      pubDate: p.data.date,
      link: "/index.html#news",
    })),
    customData: "<language>en</language>",
    trailingSlash: false,
  });
}