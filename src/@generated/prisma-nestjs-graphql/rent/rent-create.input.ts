import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateNestedOneWithoutRentsInput } from '../admin/admin-create-nested-one-without-rents.input';
import { ToolCreateNestedManyWithoutRentsInput } from '../tool/tool-create-nested-many-without-rents.input';

@InputType()
export class RentCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => AdminCreateNestedOneWithoutRentsInput, {nullable:false})
    admin!: AdminCreateNestedOneWithoutRentsInput;

    @Field(() => String, {nullable:false})
    organisation!: string;

    @Field(() => ToolCreateNestedManyWithoutRentsInput, {nullable:true})
    tools?: ToolCreateNestedManyWithoutRentsInput;
}
