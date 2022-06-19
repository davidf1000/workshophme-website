import { registerEnumType } from '@nestjs/graphql';

export enum ToolScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    name = "name",
    desc = "desc",
    image = "image",
    totalStock = "totalStock",
    priceHour = "priceHour",
    priceDay = "priceDay"
}


registerEnumType(ToolScalarFieldEnum, { name: 'ToolScalarFieldEnum', description: undefined })
