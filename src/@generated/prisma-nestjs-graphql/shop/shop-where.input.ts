import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ShopWhereInput {

    @Field(() => [ShopWhereInput], {nullable:true})
    AND?: Array<ShopWhereInput>;

    @Field(() => [ShopWhereInput], {nullable:true})
    OR?: Array<ShopWhereInput>;

    @Field(() => [ShopWhereInput], {nullable:true})
    NOT?: Array<ShopWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    imageUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    link?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;
}
