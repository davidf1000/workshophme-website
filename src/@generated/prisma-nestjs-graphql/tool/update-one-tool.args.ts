import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolUpdateInput } from './tool-update.input';
import { Type } from 'class-transformer';
import { ToolWhereUniqueInput } from './tool-where-unique.input';

@ArgsType()
export class UpdateOneToolArgs {

    @Field(() => ToolUpdateInput, {nullable:false})
    @Type(() => ToolUpdateInput)
    data!: ToolUpdateInput;

    @Field(() => ToolWhereUniqueInput, {nullable:false})
    @Type(() => ToolWhereUniqueInput)
    where!: ToolWhereUniqueInput;
}
