import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class RentUncheckedCreateWithoutToolsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Int, {nullable:false})
    adminId!: number;

    @Field(() => String, {nullable:false})
    organisation!: string;
}
