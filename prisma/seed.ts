import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  await prisma.admin.deleteMany();
  const admin1 = await prisma.admin.create({
    data: {
      email: 'davidfauzi29@gmail.com',
      name: 'DavidFauzi',
      password: await bcrypt.hash('123', Number(process.env.SALT_ROUND)),
    },
  });
  console.log('admin1', { admin1 });
  const admin2 = await prisma.admin.create({
    data: {
      email: 'budi@gmail.com',
      name: 'budi',
      password: await bcrypt.hash('456', Number(process.env.SALT_ROUND)),
    },
  });
  console.log('admin2', { admin2 });
  const admin3 = await prisma.admin.create({
    data: {
      email: 'joko@gmail.com',
      name: 'joko',
      password: await bcrypt.hash('789', Number(process.env.SALT_ROUND)),
    },
  });
  console.log('admin3', { admin3 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
