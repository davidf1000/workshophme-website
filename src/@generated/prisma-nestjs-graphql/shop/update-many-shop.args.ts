import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopUpdateManyMutationInput } from './shop-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ShopWhereInput } from './shop-where.input';

@ArgsType()
export class UpdateManyShopArgs {

    @Field(() => ShopUpdateManyMutationInput, {nullable:false})
    @Type(() => ShopUpdateManyMutationInput)
    data!: ShopUpdateManyMutationInput;

    @Field(() => ShopWhereInput, {nullable:true})
    @Type(() => ShopWhereInput)
    where?: ShopWhereInput;
}
