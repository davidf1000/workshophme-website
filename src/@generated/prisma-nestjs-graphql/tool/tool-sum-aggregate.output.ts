import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ToolSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    totalStock?: number;

    @Field(() => Int, {nullable:true})
    priceHour?: number;

    @Field(() => Int, {nullable:true})
    priceDay?: number;
}
