import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateWithoutRentsInput } from './admin-create-without-rents.input';
import { Type } from 'class-transformer';
import { AdminCreateOrConnectWithoutRentsInput } from './admin-create-or-connect-without-rents.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';

@InputType()
export class AdminCreateNestedOneWithoutRentsInput {

    @Field(() => AdminCreateWithoutRentsInput, {nullable:true})
    @Type(() => AdminCreateWithoutRentsInput)
    create?: AdminCreateWithoutRentsInput;

    @Field(() => AdminCreateOrConnectWithoutRentsInput, {nullable:true})
    @Type(() => AdminCreateOrConnectWithoutRentsInput)
    connectOrCreate?: AdminCreateOrConnectWithoutRentsInput;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    @Type(() => AdminWhereUniqueInput)
    connect?: AdminWhereUniqueInput;
}
