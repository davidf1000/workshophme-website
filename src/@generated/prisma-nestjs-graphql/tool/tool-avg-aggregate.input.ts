import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ToolAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    totalStock?: true;

    @Field(() => Boolean, {nullable:true})
    priceHour?: true;

    @Field(() => Boolean, {nullable:true})
    priceDay?: true;
}
