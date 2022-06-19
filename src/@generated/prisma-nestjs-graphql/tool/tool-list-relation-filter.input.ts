import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolWhereInput } from './tool-where.input';

@InputType()
export class ToolListRelationFilter {

    @Field(() => ToolWhereInput, {nullable:true})
    every?: ToolWhereInput;

    @Field(() => ToolWhereInput, {nullable:true})
    some?: ToolWhereInput;

    @Field(() => ToolWhereInput, {nullable:true})
    none?: ToolWhereInput;
}
