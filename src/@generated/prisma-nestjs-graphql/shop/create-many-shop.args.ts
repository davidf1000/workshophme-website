import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopCreateManyInput } from './shop-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyShopArgs {

    @Field(() => [ShopCreateManyInput], {nullable:false})
    @Type(() => ShopCreateManyInput)
    data!: Array<ShopCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
