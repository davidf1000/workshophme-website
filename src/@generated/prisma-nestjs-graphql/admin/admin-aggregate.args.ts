import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminWhereInput } from './admin-where.input';
import { Type } from 'class-transformer';
import { AdminOrderByWithRelationInput } from './admin-order-by-with-relation.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminCountAggregateInput } from './admin-count-aggregate.input';
import { AdminAvgAggregateInput } from './admin-avg-aggregate.input';
import { AdminSumAggregateInput } from './admin-sum-aggregate.input';
import { AdminMinAggregateInput } from './admin-min-aggregate.input';
import { AdminMaxAggregateInput } from './admin-max-aggregate.input';

@ArgsType()
export class AdminAggregateArgs {

    @Field(() => AdminWhereInput, {nullable:true})
    @Type(() => AdminWhereInput)
    where?: AdminWhereInput;

    @Field(() => [AdminOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminOrderByWithRelationInput>;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    cursor?: AdminWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdminCountAggregateInput, {nullable:true})
    _count?: AdminCountAggregateInput;

    @Field(() => AdminAvgAggregateInput, {nullable:true})
    _avg?: AdminAvgAggregateInput;

    @Field(() => AdminSumAggregateInput, {nullable:true})
    _sum?: AdminSumAggregateInput;

    @Field(() => AdminMinAggregateInput, {nullable:true})
    _min?: AdminMinAggregateInput;

    @Field(() => AdminMaxAggregateInput, {nullable:true})
    _max?: AdminMaxAggregateInput;
}
