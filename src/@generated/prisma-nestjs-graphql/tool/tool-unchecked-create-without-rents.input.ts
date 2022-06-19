import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class ToolUncheckedCreateWithoutRentsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;

    @Field(() => String, {nullable:false})
    desc!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Int, {nullable:false})
    totalStock!: number;

    @Field(() => Int, {nullable:false})
    priceHour!: number;

    @Field(() => Int, {nullable:false})
    priceDay!: number;
}
