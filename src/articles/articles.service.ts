import { Injectable } from '@nestjs/common';
import { CreateArticleInput, UpdateArticleInput } from 'src/graphql';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async create(createArticleInput: CreateArticleInput) {
    const created = await this.prisma.article.create({
      data: createArticleInput,
    });
    return created;
  }

  async findAll() {
    const articles = await this.prisma.article.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
    return articles;
  }

  async findOne(id: number) {
    const article = await this.prisma.article.findUnique({
      where: {
        id: id,
      },
    });
    return article;
  }

  async update(id: number, updateArticleInput: UpdateArticleInput) {
    const updateTool = await this.prisma.tool.update({
      where: {
        id: id,
      },
      data: {
        ...updateArticleInput,
      },
    });

    return updateTool;
  }

  async remove(id: number) {
    const deleteArticle = await this.prisma.article.delete({
      where: {
        id: id,
      },
    });
    return deleteArticle;
  }
}
