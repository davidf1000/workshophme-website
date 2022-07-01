import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateArticleInput, UpdateArticleInput } from 'src/graphql';
import { ArticlesService } from './articles.service';

@Resolver('Article')
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  @Mutation('createArticle')
  @UseGuards(JwtAuthGuard)
  create(@Args('createArticleInput') createArticleInput: CreateArticleInput) {
    return this.articlesService.create(createArticleInput);
  }

  @Query('articles')
  findAll() {
    return this.articlesService.findAll();
  }

  @Query('article')
  @UseGuards(JwtAuthGuard)
  findOne(@Args('id') id: number) {
    return this.articlesService.findOne(id);
  }

  @Mutation('updateArticle')
  @UseGuards(JwtAuthGuard)
  update(@Args('updateArticleInput') updateArticleInput: UpdateArticleInput) {
    return this.articlesService.update(
      updateArticleInput.id,
      updateArticleInput,
    );
  }

  @Mutation('removeArticle')
  @UseGuards(JwtAuthGuard)
  remove(@Args('id') id: number) {
    return this.articlesService.remove(id);
  }
}
