import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShopCountOrderByAggregateInput } from './shop-count-order-by-aggregate.input';
import { ShopAvgOrderByAggregateInput } from './shop-avg-order-by-aggregate.input';
import { ShopMaxOrderByAggregateInput } from './shop-max-order-by-aggregate.input';
import { ShopMinOrderByAggregateInput } from './shop-min-order-by-aggregate.input';
import { ShopSumOrderByAggregateInput } from './shop-sum-order-by-aggregate.input';

@InputType()
export class ShopOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => ShopCountOrderByAggregateInput, {nullable:true})
    _count?: ShopCountOrderByAggregateInput;

    @Field(() => ShopAvgOrderByAggregateInput, {nullable:true})
    _avg?: ShopAvgOrderByAggregateInput;

    @Field(() => ShopMaxOrderByAggregateInput, {nullable:true})
    _max?: ShopMaxOrderByAggregateInput;

    @Field(() => ShopMinOrderByAggregateInput, {nullable:true})
    _min?: ShopMinOrderByAggregateInput;

    @Field(() => ShopSumOrderByAggregateInput, {nullable:true})
    _sum?: ShopSumOrderByAggregateInput;
}
