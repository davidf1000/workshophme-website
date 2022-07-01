import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopWhereInput } from './shop-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyShopArgs {

    @Field(() => ShopWhereInput, {nullable:true})
    @Type(() => ShopWhereInput)
    where?: ShopWhereInput;
}
