import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AdminRelationFilter } from '../admin/admin-relation-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class RentWhereInput {

    @Field(() => [RentWhereInput], {nullable:true})
    AND?: Array<RentWhereInput>;

    @Field(() => [RentWhereInput], {nullable:true})
    OR?: Array<RentWhereInput>;

    @Field(() => [RentWhereInput], {nullable:true})
    NOT?: Array<RentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => AdminRelationFilter, {nullable:true})
    admin?: AdminRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    adminId?: IntFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    tools?: IntNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    rentName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    rentNim?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    rentPhone?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    rentLineId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    organisation?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    fromDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expectedReturnDate?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    totalPrice?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    fine?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    pickupName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    pickupNim?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    returnName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    returnNim?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    returnDate?: StringFilter;
}
