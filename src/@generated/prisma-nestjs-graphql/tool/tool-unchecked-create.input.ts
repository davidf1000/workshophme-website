import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { RentUncheckedCreateNestedManyWithoutToolsInput } from '../rent/rent-unchecked-create-nested-many-without-tools.input';

@InputType()
export class ToolUncheckedCreateInput {

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

    @Field(() => RentUncheckedCreateNestedManyWithoutToolsInput, {nullable:true})
    rents?: RentUncheckedCreateNestedManyWithoutToolsInput;
}
