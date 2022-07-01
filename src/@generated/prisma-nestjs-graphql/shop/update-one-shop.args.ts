import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopUpdateInput } from './shop-update.input';
import { Type } from 'class-transformer';
import { ShopWhereUniqueInput } from './shop-where-unique.input';

@ArgsType()
export class UpdateOneShopArgs {

    @Field(() => ShopUpdateInput, {nullable:false})
    @Type(() => ShopUpdateInput)
    data!: ShopUpdateInput;

    @Field(() => ShopWhereUniqueInput, {nullable:false})
    @Type(() => ShopWhereUniqueInput)
    where!: ShopWhereUniqueInput;
}
