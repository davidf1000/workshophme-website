import { Injectable } from '@nestjs/common';
import { CreateShopInput, UpdateShopInput } from 'src/graphql';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ShopsService {
  constructor(private prisma: PrismaService) {}

  async create(createShopInput: CreateShopInput) {
    const created = await this.prisma.shop.create({
      data: createShopInput,
    });
    return created;
  }

  async findAll() {
    const shops = await this.prisma.shop.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
    return shops;
  }

  async findOne(id: number) {
    const shop = await this.prisma.shop.findUnique({
      where: {
        id: id,
      },
    });
    return shop;
  }

  async update(id: number, updateShopInput: UpdateShopInput) {
    const updateShop = await this.prisma.shop.update({
      where: {
        id: id,
      },
      data: {
        ...updateShopInput,
      },
    });

    return updateShop;
  }

  async remove(id: number) {
    const deleteShop = await this.prisma.shop.delete({
      where: {
        id: id,
      },
    });
    return deleteShop;
  }
}
