import { registerEnumType } from '@nestjs/graphql';

export enum ArticleScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    title = "title",
    desc = "desc",
    imageUrl = "imageUrl",
    publishedDate = "publishedDate",
    duration = "duration",
    link = "link"
}


registerEnumType(ArticleScalarFieldEnum, { name: 'ArticleScalarFieldEnum', description: undefined })
