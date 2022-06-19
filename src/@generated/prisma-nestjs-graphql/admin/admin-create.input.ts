import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentCreateNestedManyWithoutAdminInput } from '../rent/rent-create-nested-many-without-admin.input';

@InputType()
export class AdminCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => RentCreateNestedManyWithoutAdminInput, {nullable:true})
    rents?: RentCreateNestedManyWithoutAdminInput;
}
