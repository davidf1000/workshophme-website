import { registerEnumType } from '@nestjs/graphql';

export enum RentScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    status = "status",
    adminId = "adminId",
    organisation = "organisation"
}


registerEnumType(RentScalarFieldEnum, { name: 'RentScalarFieldEnum', description: undefined })
