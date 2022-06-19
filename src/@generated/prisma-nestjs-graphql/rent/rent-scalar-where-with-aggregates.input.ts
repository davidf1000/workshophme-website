import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class RentScalarWhereWithAggregatesInput {

    @Field(() => [RentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RentScalarWhereWithAggregatesInput>;

    @Field(() => [RentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RentScalarWhereWithAggregatesInput>;

    @Field(() => [RentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RentScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    adminId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    organisation?: StringWithAggregatesFilter;
}
