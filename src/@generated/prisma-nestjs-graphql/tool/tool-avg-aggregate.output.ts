import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ToolAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    totalStock?: number;

    @Field(() => Float, {nullable:true})
    priceHour?: number;

    @Field(() => Float, {nullable:true})
    priceDay?: number;
}
