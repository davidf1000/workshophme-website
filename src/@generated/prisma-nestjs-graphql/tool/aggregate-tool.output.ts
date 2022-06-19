import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ToolCountAggregate } from './tool-count-aggregate.output';
import { ToolAvgAggregate } from './tool-avg-aggregate.output';
import { ToolSumAggregate } from './tool-sum-aggregate.output';
import { ToolMinAggregate } from './tool-min-aggregate.output';
import { ToolMaxAggregate } from './tool-max-aggregate.output';

@ObjectType()
export class AggregateTool {

    @Field(() => ToolCountAggregate, {nullable:true})
    _count?: ToolCountAggregate;

    @Field(() => ToolAvgAggregate, {nullable:true})
    _avg?: ToolAvgAggregate;

    @Field(() => ToolSumAggregate, {nullable:true})
    _sum?: ToolSumAggregate;

    @Field(() => ToolMinAggregate, {nullable:true})
    _min?: ToolMinAggregate;

    @Field(() => ToolMaxAggregate, {nullable:true})
    _max?: ToolMaxAggregate;
}
