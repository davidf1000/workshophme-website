import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ToolScalarWhereInput {

    @Field(() => [ToolScalarWhereInput], {nullable:true})
    AND?: Array<ToolScalarWhereInput>;

    @Field(() => [ToolScalarWhereInput], {nullable:true})
    OR?: Array<ToolScalarWhereInput>;

    @Field(() => [ToolScalarWhereInput], {nullable:true})
    NOT?: Array<ToolScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    desc?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    totalStock?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    priceHour?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    priceDay?: IntFilter;
}
