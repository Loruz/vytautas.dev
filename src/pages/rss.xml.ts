import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const posts = await getCollection("blog");
	const publishedPosts = posts.filter((post) => !post.data.draft);

	return rss({
		title: "Vytautas.dev",
		description: "Personal blog and portfolio - Developer and writer",
		site: context.site!,
		items: publishedPosts.map((post) => ({
			title: post.data.title,
			description: post.data.description || "",
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}/`,
		})),
		customData: "<language>en-us</language>",
	});
}
