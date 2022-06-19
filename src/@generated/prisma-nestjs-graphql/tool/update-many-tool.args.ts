import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolUpdateManyMutationInput } from './tool-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ToolWhereInput } from './tool-where.input';

@ArgsType()
export class UpdateManyToolArgs {

    @Field(() => ToolUpdateManyMutationInput, {nullable:false})
    @Type(() => ToolUpdateManyMutationInput)
    data!: ToolUpdateManyMutationInput;

    @Field(() => ToolWhereInput, {nullable:true})
    @Type(() => ToolWhereInput)
    where?: ToolWhereInput;
}
