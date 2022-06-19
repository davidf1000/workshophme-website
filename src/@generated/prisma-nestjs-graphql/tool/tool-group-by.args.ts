import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolWhereInput } from './tool-where.input';
import { Type } from 'class-transformer';
import { ToolOrderByWithAggregationInput } from './tool-order-by-with-aggregation.input';
import { ToolScalarFieldEnum } from './tool-scalar-field.enum';
import { ToolScalarWhereWithAggregatesInput } from './tool-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ToolCountAggregateInput } from './tool-count-aggregate.input';
import { ToolAvgAggregateInput } from './tool-avg-aggregate.input';
import { ToolSumAggregateInput } from './tool-sum-aggregate.input';
import { ToolMinAggregateInput } from './tool-min-aggregate.input';
import { ToolMaxAggregateInput } from './tool-max-aggregate.input';

@ArgsType()
export class ToolGroupByArgs {

    @Field(() => ToolWhereInput, {nullable:true})
    @Type(() => ToolWhereInput)
    where?: ToolWhereInput;

    @Field(() => [ToolOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ToolOrderByWithAggregationInput>;

    @Field(() => [ToolScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ToolScalarFieldEnum>;

    @Field(() => ToolScalarWhereWithAggregatesInput, {nullable:true})
    having?: ToolScalarWhereWithAggregatesInput;

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
