import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RentCountAggregate } from './rent-count-aggregate.output';
import { RentAvgAggregate } from './rent-avg-aggregate.output';
import { RentSumAggregate } from './rent-sum-aggregate.output';
import { RentMinAggregate } from './rent-min-aggregate.output';
import { RentMaxAggregate } from './rent-max-aggregate.output';

@ObjectType()
export class RentGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Int, {nullable:false})
    adminId!: number;

    @Field(() => String, {nullable:false})
    organisation!: string;

    @Field(() => RentCountAggregate, {nullable:true})
    _count?: RentCountAggregate;

    @Field(() => RentAvgAggregate, {nullable:true})
    _avg?: RentAvgAggregate;

    @Field(() => RentSumAggregate, {nullable:true})
    _sum?: RentSumAggregate;

    @Field(() => RentMinAggregate, {nullable:true})
    _min?: RentMinAggregate;

    @Field(() => RentMaxAggregate, {nullable:true})
    _max?: RentMaxAggregate;
}
