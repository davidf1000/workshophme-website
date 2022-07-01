import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShopCountAggregate } from './shop-count-aggregate.output';
import { ShopAvgAggregate } from './shop-avg-aggregate.output';
import { ShopSumAggregate } from './shop-sum-aggregate.output';
import { ShopMinAggregate } from './shop-min-aggregate.output';
import { ShopMaxAggregate } from './shop-max-aggregate.output';

@ObjectType()
export class ShopGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => String, {nullable:false})
    link!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => ShopCountAggregate, {nullable:true})
    _count?: ShopCountAggregate;

    @Field(() => ShopAvgAggregate, {nullable:true})
    _avg?: ShopAvgAggregate;

    @Field(() => ShopSumAggregate, {nullable:true})
    _sum?: ShopSumAggregate;

    @Field(() => ShopMinAggregate, {nullable:true})
    _min?: ShopMinAggregate;

    @Field(() => ShopMaxAggregate, {nullable:true})
    _max?: ShopMaxAggregate;
}
