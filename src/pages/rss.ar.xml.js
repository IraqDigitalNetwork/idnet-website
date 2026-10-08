import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("news"))
    .sort((a, b) => +b.data.date - +a.data.date);

  return rss({
    title: "IDNET — Arabic",
    description: "rss feed",
    author: "Nation4Ever",
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title_ar,
      description: p.data.text_ar,
      pubDate: p.data.date,
      link: "/ar",
    })),
    customData: "<language>ar</language>",
    trailingSlash: false,
  });
}