import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ToolMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    image?: true;

    @Field(() => Boolean, {nullable:true})
    activated?: true;

    @Field(() => Boolean, {nullable:true})
    totalStock?: true;

    @Field(() => Boolean, {nullable:true})
    priceHour?: true;

    @Field(() => Boolean, {nullable:true})
    priceDay?: true;
}
