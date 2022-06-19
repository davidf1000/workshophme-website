import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ToolMinAggregate {

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

    @Field(() => Int, {nullable:true})
    totalStock?: number;

    @Field(() => Int, {nullable:true})
    priceHour?: number;

    @Field(() => Int, {nullable:true})
    priceDay?: number;
}
