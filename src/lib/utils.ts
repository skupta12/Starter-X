import { blogs } from "./data";

function getTwoPostsPerCategory(posts: BlogPost[], category: string): BlogPost[] {
    const filteredPosts = posts.filter(post => post.label === category);
    if (filteredPosts.length <= 2) {
      return filteredPosts;
    }
    return filteredPosts.slice(0, 2);
  }
  
  const sortedPosts: { [key: string]: BlogPost[] } = {};
  
  blogs.forEach(post => {
    if (!sortedPosts[post.label]) {
      sortedPosts[post.label] = getTwoPostsPerCategory(blogs, post.label);
    }
  });