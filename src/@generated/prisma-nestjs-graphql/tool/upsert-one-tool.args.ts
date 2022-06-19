import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolWhereUniqueInput } from './tool-where-unique.input';
import { Type } from 'class-transformer';
import { ToolCreateInput } from './tool-create.input';
import { ToolUpdateInput } from './tool-update.input';

@ArgsType()
export class UpsertOneToolArgs {

    @Field(() => ToolWhereUniqueInput, {nullable:false})
    @Type(() => ToolWhereUniqueInput)
    where!: ToolWhereUniqueInput;

    @Field(() => ToolCreateInput, {nullable:false})
    @Type(() => ToolCreateInput)
    create!: ToolCreateInput;

    @Field(() => ToolUpdateInput, {nullable:false})
    @Type(() => ToolUpdateInput)
    update!: ToolUpdateInput;
}
