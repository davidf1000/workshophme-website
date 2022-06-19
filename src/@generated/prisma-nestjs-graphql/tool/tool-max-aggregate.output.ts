import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ToolMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    desc?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Boolean, {nullable:true})
    activated?: boolean;

    @Field(() => Int, {nullable:true})
    totalStock?: number;

    @Field(() => Int, {nullable:true})
    priceHour?: number;

    @Field(() => Int, {nullable:true})
    priceDay?: number;
}
