import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolWhereUniqueInput } from './tool-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueToolArgs {

    @Field(() => ToolWhereUniqueInput, {nullable:false})
    @Type(() => ToolWhereUniqueInput)
    where!: ToolWhereUniqueInput;
}
