import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RentMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Int, {nullable:true})
    adminId?: number;

    @Field(() => String, {nullable:true})
    rentName?: string;

    @Field(() => String, {nullable:true})
    rentNim?: string;

    @Field(() => String, {nullable:true})
    rentPhone?: string;

    @Field(() => String, {nullable:true})
    rentLineId?: string;

    @Field(() => String, {nullable:true})
    organisation?: string;

    @Field(() => Date, {nullable:true})
    fromDate?: Date | string;

    @Field(() => Date, {nullable:true})
    expectedReturnDate?: Date | string;

    @Field(() => Int, {nullable:true})
    totalPrice?: number;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Int, {nullable:true})
    fine?: number;

    @Field(() => String, {nullable:true})
    pickupName?: string;

    @Field(() => String, {nullable:true})
    pickupNim?: string;

    @Field(() => String, {nullable:true})
    returnName?: string;

    @Field(() => String, {nullable:true})
    returnNim?: string;

    @Field(() => String, {nullable:true})
    returnDate?: string;
}
