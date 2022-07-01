import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tools?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rentName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rentNim?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rentPhone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rentLineId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organisation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fromDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expectedReturnDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fine?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pickupName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pickupNim?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    returnName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    returnNim?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    returnDate?: keyof typeof SortOrder;
}
