import { Injectable } from '@nestjs/common';
import { CreateRentInput, UpdateRentInput } from 'src/graphql';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RentsService {
  constructor(private prisma: PrismaService) {}

  async create(createRentInput: CreateRentInput) {
    const created = await this.prisma.rent.create({ data: createRentInput });
    return created;
  }

  async findAll() {
    const rents = await this.prisma.rent.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
    return rents;
  }

  async findOne(id: number) {
    const rent = await this.prisma.rent.findUnique({
      where: {
        id: id,
      },
    });
    return rent;
  }

  async update(updateRentInput: UpdateRentInput) {
    const updateRent = await this.prisma.rent.update({
      where: {
        id: updateRentInput.id,
      },
      data: {
        ...updateRentInput,
      },
    });
    return updateRent;
  }

  async remove(id: number) {
    const deleteRent = await this.prisma.rent.delete({
      where: {
        id,
      },
    });
    return deleteRent;
  }
}
