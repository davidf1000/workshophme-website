import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RentAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    adminId?: number;

    @Field(() => Float, {nullable:true})
    tools?: number;

    @Field(() => Float, {nullable:true})
    totalPrice?: number;

    @Field(() => Float, {nullable:true})
    fine?: number;
}
