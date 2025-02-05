import { prisma } from "@/app/lib/prisma/page";
import { unstable_cache as cache } from "next/cache";

const getCachedPost = cache((slug) => {
  return prisma.post.findUnique({
    where: {
      slug,
    },
  });
});

export default async function Post({ params }: { params: { slug: string } }) {
  const parameter = await params;
  const post = await getCachedPost(parameter.slug);
  // const post = await prisma.post.findUnique({
  //   where: {
  //     slug: parameter.slug,
  //   },
  // });
  return (
    <div>
      <h1 className="text-4xl">Individusl Post</h1>
      <p className="text-2xl">{post?.title}</p>
      <p className="text-2xl"> {post?.content}</p>
    </div>
  );
}
