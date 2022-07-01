import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class RentUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

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
    fromDate!: Date | string;

    @Field(() => Date, {nullable:false})
    expectedReturnDate!: Date | string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Int, {nullable:true})
    totalPrice?: number;

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

    @Field(() => Date, {nullable:true})
    returnDate?: Date | string;
}
