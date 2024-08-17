import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const personA = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      backgroundImageUrl:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      profilePictureUrl:
        "https://images.squarespace-cdn.com/content/v1/51efe10de4b025019c37bb06/1566986917034-2MGUTZB04MU2GFSPAC10/London-corporate-headshot-photography.jpg",
      name: 'Bob Swagger',
      title: "Backend Developer",
      followers: 15000,
      following: 500,
    },
  })
  
  const personB = await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      backgroundImageUrl:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      profilePictureUrl:
        "https://images.squarespace-cdn.com/content/v1/51efe10de4b025019c37bb06/1566986917034-2MGUTZB04MU2GFSPAC10/London-corporate-headshot-photography.jpg",
      name: 'Tim Bake',
      title: "Full Stack Developer",
      followers: 20000,
      following: 1000,
    },
  })
  console.log({ personA, personB })
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


// main()
//   .catch((e) => {
//     console.error(e.message)
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
