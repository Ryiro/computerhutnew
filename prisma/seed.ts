import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const initialPosts : Prisma.PostCreateInput[] = [
    {
        title: 'Post 1',
        slug: 'post-1',
        content: 'content of post 1',
        author: {

            connectOrCreate: {
                where: {
                    email: 'john@gmail.com',

    
                },
                create: {
                    email: 'john@gmail.com',
                    hashedPassword: 'auhfiwuhfewuiehfweuih',
                    name: 'John Doe',
                }
            }
        }

    }
]
//async function main() {
//   const alice = await prisma.user.upsert({
//     where: { email: 'alice@prisma.io' },
//     update: {},
//     create: {
//       email: 'alice@prisma.io',
//       name: 'Alice',
//       posts: {
//         create: {
//           title: 'Check out Prisma with Next.js',
//           content: 'https://www.prisma.io/nextjs',
//           published: true,
//         },
//       },
//     },
//   })
//   const bob = await prisma.user.upsert({
//     where: { email: 'bob@prisma.io' },
//     update: {},
//     create: {
//       email: 'bob@prisma.io',
//       name: 'Bob',
//       posts: {
//         create: [
//           {
//             title: 'Follow Prisma on Twitter',
//             content: 'https://twitter.com/prisma',
//             published: true,
//           },
//           {
//             title: 'Follow Nexus on Twitter',
//             content: 'https://twitter.com/nexusgql',
//             published: true,
//           },
//         ],
//       },
//     },
//   })
//   console.log({ alice, bob })
// }
async function main() {
    console.log(`Start seeding...`);

    for (const post of initialPosts) {
        const newPost = await prisma.post.create({
            data: post,
        });
        console.log(`Create post with id: ${newPost.id}`);
    }
    console.log(`Seeding finsihed`);
    }
    main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })