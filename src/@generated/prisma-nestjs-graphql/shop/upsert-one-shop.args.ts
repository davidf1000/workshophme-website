import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopWhereUniqueInput } from './shop-where-unique.input';
import { Type } from 'class-transformer';
import { ShopCreateInput } from './shop-create.input';
import { ShopUpdateInput } from './shop-update.input';

@ArgsType()
export class UpsertOneShopArgs {

    @Field(() => ShopWhereUniqueInput, {nullable:false})
    @Type(() => ShopWhereUniqueInput)
    where!: ShopWhereUniqueInput;

    @Field(() => ShopCreateInput, {nullable:false})
    @Type(() => ShopCreateInput)
    create!: ShopCreateInput;

    @Field(() => ShopUpdateInput, {nullable:false})
    @Type(() => ShopUpdateInput)
    update!: ShopUpdateInput;
}
