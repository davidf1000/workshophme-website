import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import adminSeed from './adminSeed';
import toolSeed from './toolSeed';

const prisma = new PrismaClient();

async function main() {
  // SEED Tools
  console.log('Start Seeding Admins....');
  await prisma.admin.deleteMany();
  const admin = await prisma.admin.createMany({
    data: await adminSeed(),
    skipDuplicates: true,
  });
  console.log('Admin Seed Successfull with Count : ', admin.count);
  // SEED Tools
  console.log('Start Seeding Tools....');
  await prisma.tool.deleteMany();
  const tool = await prisma.tool.createMany({
    data: await toolSeed(),
    skipDuplicates: true,
  });
  console.log('Admin Seed Successfull with Count : ', tool.count);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
