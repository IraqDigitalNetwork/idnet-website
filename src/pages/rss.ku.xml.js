import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("news"))
    .sort((a, b) => +b.data.date - +a.data.date);

  return rss({
    title: "IDNET — Kurdish",
    description: "rss feed",
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title_ku,
      description: p.data.text_ku,
      pubDate: p.data.date,
      link: "/ku",
    })),
    customData: "<language>ku</language>",
    trailingSlash: false,
  });
}