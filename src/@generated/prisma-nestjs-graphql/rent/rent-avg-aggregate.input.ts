import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RentAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    adminId?: true;

    @Field(() => Boolean, {nullable:true})
    tools?: true;

    @Field(() => Boolean, {nullable:true})
    totalPrice?: true;

    @Field(() => Boolean, {nullable:true})
    fine?: true;
}
