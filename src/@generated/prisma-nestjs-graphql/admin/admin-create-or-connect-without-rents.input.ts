import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { Type } from 'class-transformer';
import { AdminCreateWithoutRentsInput } from './admin-create-without-rents.input';

@InputType()
export class AdminCreateOrConnectWithoutRentsInput {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    @Type(() => AdminWhereUniqueInput)
    where!: AdminWhereUniqueInput;

    @Field(() => AdminCreateWithoutRentsInput, {nullable:false})
    @Type(() => AdminCreateWithoutRentsInput)
    create!: AdminCreateWithoutRentsInput;
}
