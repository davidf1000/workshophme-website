import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class RentScalarWhereInput {

    @Field(() => [RentScalarWhereInput], {nullable:true})
    AND?: Array<RentScalarWhereInput>;

    @Field(() => [RentScalarWhereInput], {nullable:true})
    OR?: Array<RentScalarWhereInput>;

    @Field(() => [RentScalarWhereInput], {nullable:true})
    NOT?: Array<RentScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

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

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    totalPrice?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fine?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    pickupName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    pickupNim?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    returnName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    returnNim?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    returnDate?: DateTimeNullableFilter;
}
