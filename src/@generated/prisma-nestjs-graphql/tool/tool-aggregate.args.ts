import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolWhereInput } from './tool-where.input';
import { Type } from 'class-transformer';
import { ToolOrderByWithRelationInput } from './tool-order-by-with-relation.input';
import { ToolWhereUniqueInput } from './tool-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ToolCountAggregateInput } from './tool-count-aggregate.input';
import { ToolAvgAggregateInput } from './tool-avg-aggregate.input';
import { ToolSumAggregateInput } from './tool-sum-aggregate.input';
import { ToolMinAggregateInput } from './tool-min-aggregate.input';
import { ToolMaxAggregateInput } from './tool-max-aggregate.input';

@ArgsType()
export class ToolAggregateArgs {

    @Field(() => ToolWhereInput, {nullable:true})
    @Type(() => ToolWhereInput)
    where?: ToolWhereInput;

    @Field(() => [ToolOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ToolOrderByWithRelationInput>;

    @Field(() => ToolWhereUniqueInput, {nullable:true})
    cursor?: ToolWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ToolCountAggregateInput, {nullable:true})
    _count?: ToolCountAggregateInput;

    @Field(() => ToolAvgAggregateInput, {nullable:true})
    _avg?: ToolAvgAggregateInput;

    @Field(() => ToolSumAggregateInput, {nullable:true})
    _sum?: ToolSumAggregateInput;

    @Field(() => ToolMinAggregateInput, {nullable:true})
    _min?: ToolMinAggregateInput;

    @Field(() => ToolMaxAggregateInput, {nullable:true})
    _max?: ToolMaxAggregateInput;
}
