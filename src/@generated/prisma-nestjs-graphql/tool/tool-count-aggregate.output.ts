import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ToolCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    desc!: number;

    @Field(() => Int, {nullable:false})
    image!: number;

    @Field(() => Int, {nullable:false})
    totalStock!: number;

    @Field(() => Int, {nullable:false})
    priceHour!: number;

    @Field(() => Int, {nullable:false})
    priceDay!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
