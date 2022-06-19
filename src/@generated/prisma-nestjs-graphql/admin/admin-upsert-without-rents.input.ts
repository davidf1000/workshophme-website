import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUpdateWithoutRentsInput } from './admin-update-without-rents.input';
import { Type } from 'class-transformer';
import { AdminCreateWithoutRentsInput } from './admin-create-without-rents.input';

@InputType()
export class AdminUpsertWithoutRentsInput {

    @Field(() => AdminUpdateWithoutRentsInput, {nullable:false})
    @Type(() => AdminUpdateWithoutRentsInput)
    update!: AdminUpdateWithoutRentsInput;

    @Field(() => AdminCreateWithoutRentsInput, {nullable:false})
    @Type(() => AdminCreateWithoutRentsInput)
    create!: AdminCreateWithoutRentsInput;
}
