import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Rent {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    tools!: string;

    @Field(() => String, {nullable:false})
    rentName!: string;

    @Field(() => String, {nullable:false})
    rentNim!: string;

    @Field(() => String, {nullable:false})
    rentPhone!: string;

    @Field(() => String, {nullable:false})
    rentLineId!: string;

    @Field(() => String, {nullable:false})
    organisation!: string;

    @Field(() => Date, {nullable:false})
    fromDate!: Date;

    @Field(() => Date, {nullable:false})
    expectedReturnDate!: Date;

    @Field(() => String, {nullable:false,defaultValue:'waiting_pickup'})
    status!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    totalPrice!: number;

    @Field(() => Int, {nullable:true})
    fine!: number | null;

    @Field(() => String, {nullable:true})
    pickupName!: string | null;

    @Field(() => String, {nullable:true})
    pickupNim!: string | null;

    @Field(() => String, {nullable:true})
    returnName!: string | null;

    @Field(() => String, {nullable:true})
    returnNim!: string | null;

    @Field(() => Date, {nullable:true})
    returnDate!: Date | null;
}
