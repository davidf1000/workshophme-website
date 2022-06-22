import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateAdminInput, UpdateAdminInput } from 'src/graphql';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminsService {
  constructor(private prisma: PrismaService) {}

  async create(createAdminInput: CreateAdminInput) {
    const newPassword = await bcrypt.hash(
      createAdminInput.password,
      Number(process.env.SALT_ROUND),
    );
    const created = await this.prisma.admin.create({
      data: {
        ...createAdminInput,
        password: newPassword,
      },
    });
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

  // find if email exists and return the admin

  async findAdmin(email: string) {
    const admin = await this.prisma.admin.findUnique({
      where: {
        email: email,
      },
    });
    return admin;
  }

  async update(updateAdminInput: UpdateAdminInput) {
    const updateAdmin = await this.prisma.admin.update({
      where: {
        id: updateAdminInput.id,
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
