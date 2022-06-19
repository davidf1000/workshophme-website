import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolCreateNestedManyWithoutRentsInput } from '../tool/tool-create-nested-many-without-rents.input';

@InputType()
export class RentCreateWithoutAdminInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:false})
    organisation!: string;

    @Field(() => ToolCreateNestedManyWithoutRentsInput, {nullable:true})
    tools?: ToolCreateNestedManyWithoutRentsInput;
}
