import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateNestedOneWithoutRentsInput } from '../admin/admin-create-nested-one-without-rents.input';

@InputType()
export class RentCreateWithoutToolsInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => AdminCreateNestedOneWithoutRentsInput, {nullable:false})
    admin!: AdminCreateNestedOneWithoutRentsInput;

    @Field(() => String, {nullable:false})
    organisation!: string;
}
