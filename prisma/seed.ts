import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.admin.deleteMany();
  const admin1 = await prisma.admin.create({
    data: {
      email: 'davidfauzi29@gmail.com',
      name: 'DavidFauzi',
      password: '123',
    },
  });
  console.log('admin1',{ admin1 });
  const admin2 = await prisma.admin.create({
    data: {
      email: 'budi@gmail.com',
      name: 'budi',
      password: '456',
    },
  });
  console.log('admin2',{ admin2 });
  const admin3 = await prisma.admin.create({
    data: {
      email: 'joko@gmail.com',
      name: 'joko',
      password: '789',
    },
  });
  console.log('admin3',{ admin3 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
