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

    @Field(() => String, {nullable:false,defaultValue:'waiting'})
    status!: string;

    @Field(() => Int, {nullable:true})
    totalPrice!: number | null;

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

    @Field(() => String, {nullable:true})
    returnDate!: string | null;
}
