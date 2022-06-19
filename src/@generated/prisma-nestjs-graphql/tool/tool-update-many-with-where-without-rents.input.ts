import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolScalarWhereInput } from './tool-scalar-where.input';
import { Type } from 'class-transformer';
import { ToolUpdateManyMutationInput } from './tool-update-many-mutation.input';

@InputType()
export class ToolUpdateManyWithWhereWithoutRentsInput {

    @Field(() => ToolScalarWhereInput, {nullable:false})
    @Type(() => ToolScalarWhereInput)
    where!: ToolScalarWhereInput;

    @Field(() => ToolUpdateManyMutationInput, {nullable:false})
    @Type(() => ToolUpdateManyMutationInput)
    data!: ToolUpdateManyMutationInput;
}
