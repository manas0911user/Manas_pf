import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

if (!username || !token) {
  console.error("❌ Missing GITHUB_USERNAME or GITHUB_TOKEN in .env");
  process.exit(1);
}

const query = {
  query: `
    query {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              languages(first: 5) {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `
};

const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + token,
};

fetch("https://api.github.com/graphql", {
  method: "POST",
  headers,
  body: JSON.stringify(query),
})
  .then(res => res.json())
  .then(data => {
    if (!data.data || !data.data.user) {
      console.error("❌ GitHub API Error:", data);
      return;
    }

    const projects = {
      data: data.data.user.pinnedItems.nodes
    };

    fs.writeFileSync(
      "./src/shared/opensource/projects.json",
      JSON.stringify(projects, null, 2)
    );

    console.log("✅ Projects fetched from GitHub successfully!");
  })
  .catch(err => console.error("❌ GitHub fetch error:", err));
