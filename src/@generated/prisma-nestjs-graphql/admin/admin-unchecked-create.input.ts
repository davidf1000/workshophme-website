import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RentUncheckedCreateNestedManyWithoutAdminInput } from '../rent/rent-unchecked-create-nested-many-without-admin.input';

@InputType()
export class AdminUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => RentUncheckedCreateNestedManyWithoutAdminInput, {nullable:true})
    rents?: RentUncheckedCreateNestedManyWithoutAdminInput;
}
