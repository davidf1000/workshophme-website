import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';

@Injectable()
export class AdminsService {
  constructor(private prisma: PrismaService) {}

  async create(createAdminInput: Prisma.AdminCreateInput) {
    const created = await this.prisma.admin.create({ data: createAdminInput });
    return created;
  }

  async findAll() {
    const admins = await this.prisma.admin.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
    return admins;
  }

  async findOne(id: number) {
    const admin = await this.prisma.admin.findUnique({
      where: {
        id: id,
      },
    });
    return admin;
  }

  async update(adminId, updateAdminInput: Prisma.AdminUpdateInput) {
    const updateAdmin = await this.prisma.admin.update({
      where: {
        id: adminId,
      },
      data: {
        ...updateAdminInput,
      },
    });
    return updateAdmin;
  }

  async remove(id: number) {
    const deleteAdmin = await this.prisma.admin.delete({
      where: {
        id,
      },
    });
    return deleteAdmin;
  }
}
