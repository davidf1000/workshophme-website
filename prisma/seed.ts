import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import adminSeed from './adminSeed';
import articleSeed from './articleSeed';
import shopSeed from './shopSeed';
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
  console.log('Tool Seed Successfull with Count : ', tool.count);
  // SEED Articles
  console.log('Start Seeding Articles....');
  await prisma.article.deleteMany();
  const article = await prisma.article.createMany({
    data: await articleSeed(),
    skipDuplicates: true,
  });
  console.log('Article Seed Successfull with Count : ', article.count);
  // SEED Shops
  console.log('Start Seeding Shops....');
  await prisma.shop.deleteMany();
  const shop = await prisma.shop.createMany({
    data: await shopSeed(),
    skipDuplicates: true,
  });
  console.log('Shop Seed Successfull with Count : ', shop.count);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
