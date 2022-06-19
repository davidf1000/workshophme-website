import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AdminScalarWhereWithAggregatesInput {

    @Field(() => [AdminScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AdminScalarWhereWithAggregatesInput>;

    @Field(() => [AdminScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AdminScalarWhereWithAggregatesInput>;

    @Field(() => [AdminScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AdminScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: StringWithAggregatesFilter;
}
