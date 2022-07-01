import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopWhereUniqueInput } from './shop-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneShopArgs {

    @Field(() => ShopWhereUniqueInput, {nullable:false})
    @Type(() => ShopWhereUniqueInput)
    where!: ShopWhereUniqueInput;
}
