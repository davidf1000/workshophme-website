import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentCreatetoolsInput } from './rent-createtools.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class RentCreateWithoutAdminInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => RentCreatetoolsInput, {nullable:true})
    tools?: RentCreatetoolsInput;

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

    @Field(() => Int, {nullable:false})
    totalPrice!: number;

    @Field(() => String, {nullable:true})
    status?: string;

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
