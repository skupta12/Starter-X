const { db } = require("@vercel/postgres");
const { blogs } = require("../lib/tableForFetch");

async function seedBlog(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS blogs (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            url VARCHAR(255) NOT NULL,
            src VARCHAR(255) NOT NULL,
            label VARCHAR(255) NOT NULL,
            text VARCHAR(255) NOT NULL,
            date VARCHAR(255) NOT NULL
        );
      `;

    console.log(`Created "blog" table`);

    // Insert data into the "blog" table

    const insertedBlog = await Promise.all(
      blogs.map(
        (blog) => client.sql`
          INSERT INTO blogs (id, url, src, label, text, date)
          VALUES (${blog.id}, ${blog.url}, ${blog.src}, ${blog.label}, ${blog.text}, ${blog.date})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedBlog.length} blogs`);

    return {
      createTable,
      blogs: insertedBlog,
    };
  } catch (error) {
    console.error("Error seeding blog:", error);
    throw error;
  }
}


main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});

async function main() {
  const client = await db.connect();

  await seedBlog(client);
  // await seedPortfolio(client);

  await client.end();
}