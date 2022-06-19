import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolWhereInput } from './tool-where.input';
import { Type } from 'class-transformer';
import { ToolOrderByWithRelationInput } from './tool-order-by-with-relation.input';
import { ToolWhereUniqueInput } from './tool-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ToolScalarFieldEnum } from './tool-scalar-field.enum';

@ArgsType()
export class FindManyToolArgs {

    @Field(() => ToolWhereInput, {nullable:true})
    @Type(() => ToolWhereInput)
    where?: ToolWhereInput;

    @Field(() => [ToolOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ToolOrderByWithRelationInput>;

    @Field(() => ToolWhereUniqueInput, {nullable:true})
    cursor?: ToolWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ToolScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ToolScalarFieldEnum>;
}
