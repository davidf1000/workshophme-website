import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RentMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    adminId?: true;

    @Field(() => Boolean, {nullable:true})
    rentName?: true;

    @Field(() => Boolean, {nullable:true})
    rentNim?: true;

    @Field(() => Boolean, {nullable:true})
    rentPhone?: true;

    @Field(() => Boolean, {nullable:true})
    rentLineId?: true;

    @Field(() => Boolean, {nullable:true})
    organisation?: true;

    @Field(() => Boolean, {nullable:true})
    fromDate?: true;

    @Field(() => Boolean, {nullable:true})
    expectedReturnDate?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    totalPrice?: true;

    @Field(() => Boolean, {nullable:true})
    fine?: true;

    @Field(() => Boolean, {nullable:true})
    pickupName?: true;

    @Field(() => Boolean, {nullable:true})
    pickupNim?: true;

    @Field(() => Boolean, {nullable:true})
    returnName?: true;

    @Field(() => Boolean, {nullable:true})
    returnNim?: true;

    @Field(() => Boolean, {nullable:true})
    returnDate?: true;
}
