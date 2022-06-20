import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RentCreatetoolsInput } from './rent-createtools.input';

@InputType()
export class RentCreateManyAdminInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => String, {nullable:true})
    returnDate?: string;
}
