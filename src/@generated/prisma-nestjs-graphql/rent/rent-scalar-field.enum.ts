import { registerEnumType } from '@nestjs/graphql';

export enum RentScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    adminId = "adminId",
    tools = "tools",
    rentName = "rentName",
    rentNim = "rentNim",
    rentPhone = "rentPhone",
    rentLineId = "rentLineId",
    organisation = "organisation",
    fromDate = "fromDate",
    expectedReturnDate = "expectedReturnDate",
    status = "status",
    totalPrice = "totalPrice",
    fine = "fine",
    pickupName = "pickupName",
    pickupNim = "pickupNim",
    returnName = "returnName",
    returnNim = "returnNim",
    returnDate = "returnDate"
}


registerEnumType(RentScalarFieldEnum, { name: 'RentScalarFieldEnum', description: undefined })
