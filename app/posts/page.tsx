import Link from "next/link";
import { prisma } from "../lib/prisma/page";

export default async function PostPage() {
  const posts = await prisma.post.findMany();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.id}>
            <li key={post.id}>
              {post.title} {post.content}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
