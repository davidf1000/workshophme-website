import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolWhereInput } from './tool-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyToolArgs {

    @Field(() => ToolWhereInput, {nullable:true})
    @Type(() => ToolWhereInput)
    where?: ToolWhereInput;
}
