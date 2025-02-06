import Link from "next/link";
import { prisma } from "../lib/prisma/page";

export default async function PostPage() {
  const posts = await prisma.post.findMany();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
              {post.title} {post.content}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
