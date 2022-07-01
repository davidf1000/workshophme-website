import { registerEnumType } from '@nestjs/graphql';

export enum ShopScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    title = "title",
    imageUrl = "imageUrl",
    link = "link",
    price = "price"
}


registerEnumType(ShopScalarFieldEnum, { name: 'ShopScalarFieldEnum', description: undefined })
