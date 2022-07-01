import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class ToolWhereInput {

    @Field(() => [ToolWhereInput], {nullable:true})
    AND?: Array<ToolWhereInput>;

    @Field(() => [ToolWhereInput], {nullable:true})
    OR?: Array<ToolWhereInput>;

    @Field(() => [ToolWhereInput], {nullable:true})
    NOT?: Array<ToolWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    activated?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    totalStock?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    priceHour?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    priceDay?: IntFilter;
}
