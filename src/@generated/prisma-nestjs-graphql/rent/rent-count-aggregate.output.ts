import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RentCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    tools!: number;

    @Field(() => Int, {nullable:false})
    rentName!: number;

    @Field(() => Int, {nullable:false})
    rentNim!: number;

    @Field(() => Int, {nullable:false})
    rentPhone!: number;

    @Field(() => Int, {nullable:false})
    rentLineId!: number;

    @Field(() => Int, {nullable:false})
    organisation!: number;

    @Field(() => Int, {nullable:false})
    fromDate!: number;

    @Field(() => Int, {nullable:false})
    expectedReturnDate!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    totalPrice!: number;

    @Field(() => Int, {nullable:false})
    fine!: number;

    @Field(() => Int, {nullable:false})
    pickupName!: number;

    @Field(() => Int, {nullable:false})
    pickupNim!: number;

    @Field(() => Int, {nullable:false})
    returnName!: number;

    @Field(() => Int, {nullable:false})
    returnNim!: number;

    @Field(() => Int, {nullable:false})
    returnDate!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
