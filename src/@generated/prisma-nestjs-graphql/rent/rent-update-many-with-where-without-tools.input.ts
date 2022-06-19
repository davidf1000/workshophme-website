import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentScalarWhereInput } from './rent-scalar-where.input';
import { Type } from 'class-transformer';
import { RentUpdateManyMutationInput } from './rent-update-many-mutation.input';

@InputType()
export class RentUpdateManyWithWhereWithoutToolsInput {

    @Field(() => RentScalarWhereInput, {nullable:false})
    @Type(() => RentScalarWhereInput)
    where!: RentScalarWhereInput;

    @Field(() => RentUpdateManyMutationInput, {nullable:false})
    @Type(() => RentUpdateManyMutationInput)
    data!: RentUpdateManyMutationInput;
}
