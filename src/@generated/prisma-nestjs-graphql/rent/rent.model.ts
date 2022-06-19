import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Admin } from '../admin/admin.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Rent {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Admin, {nullable:false})
    admin?: Admin;

    @Field(() => Int, {nullable:false})
    adminId!: number;

    @Field(() => [Int], {nullable:true})
    tools!: Array<number>;

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

    @Field(() => Int, {nullable:false})
    totalPrice!: number;

    @Field(() => String, {nullable:false,defaultValue:'waiting'})
    status!: string;

    @Field(() => Int, {nullable:false})
    fine!: number;

    @Field(() => String, {nullable:false})
    pickupName!: string;

    @Field(() => String, {nullable:false})
    pickupNim!: string;

    @Field(() => String, {nullable:false})
    returnName!: string;

    @Field(() => String, {nullable:false})
    returnNim!: string;

    @Field(() => String, {nullable:false})
    returnDate!: string;
}
