import { registerEnumType } from '@nestjs/graphql';

export enum AdminScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    email = "email",
    name = "name",
    password = "password"
}


registerEnumType(AdminScalarFieldEnum, { name: 'AdminScalarFieldEnum', description: undefined })
