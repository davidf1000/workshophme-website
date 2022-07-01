import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopCreateInput } from './shop-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneShopArgs {

    @Field(() => ShopCreateInput, {nullable:false})
    @Type(() => ShopCreateInput)
    data!: ShopCreateInput;
}
