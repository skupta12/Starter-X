import { unstable_noStore as noStore } from "next/cache";
import { Blog } from "../lib/definitions";
import { sql } from "@vercel/postgres";

export async function fetchBlog() {
  noStore();
  try {
    const data = await sql<Blog>`
      SELECT blogs.id, blogs.url, blogs.src, blogs.label, blogs.text, blogs.date
      FROM blogs
      ORDER BY blogs.date DESC
      LIMIT 6`;

    const latestBlogs = data.rows.map((item) => ({
      ...item,
    }));

    return latestBlogs;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest blog posts.");
  }
}