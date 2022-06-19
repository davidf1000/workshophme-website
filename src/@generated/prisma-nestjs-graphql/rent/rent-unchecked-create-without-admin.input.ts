import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ToolUncheckedCreateNestedManyWithoutRentsInput } from '../tool/tool-unchecked-create-nested-many-without-rents.input';

@InputType()
export class RentUncheckedCreateWithoutAdminInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:false})
    organisation!: string;

    @Field(() => ToolUncheckedCreateNestedManyWithoutRentsInput, {nullable:true})
    tools?: ToolUncheckedCreateNestedManyWithoutRentsInput;
}
