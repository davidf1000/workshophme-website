import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ToolCountOrderByAggregateInput } from './tool-count-order-by-aggregate.input';
import { ToolAvgOrderByAggregateInput } from './tool-avg-order-by-aggregate.input';
import { ToolMaxOrderByAggregateInput } from './tool-max-order-by-aggregate.input';
import { ToolMinOrderByAggregateInput } from './tool-min-order-by-aggregate.input';
import { ToolSumOrderByAggregateInput } from './tool-sum-order-by-aggregate.input';

@InputType()
export class ToolOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalStock?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    priceHour?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    priceDay?: keyof typeof SortOrder;

    @Field(() => ToolCountOrderByAggregateInput, {nullable:true})
    _count?: ToolCountOrderByAggregateInput;

    @Field(() => ToolAvgOrderByAggregateInput, {nullable:true})
    _avg?: ToolAvgOrderByAggregateInput;

    @Field(() => ToolMaxOrderByAggregateInput, {nullable:true})
    _max?: ToolMaxOrderByAggregateInput;

    @Field(() => ToolMinOrderByAggregateInput, {nullable:true})
    _min?: ToolMinOrderByAggregateInput;

    @Field(() => ToolSumOrderByAggregateInput, {nullable:true})
    _sum?: ToolSumOrderByAggregateInput;
}
