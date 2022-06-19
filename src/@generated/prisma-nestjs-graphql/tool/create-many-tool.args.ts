import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolCreateManyInput } from './tool-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyToolArgs {

    @Field(() => [ToolCreateManyInput], {nullable:false})
    @Type(() => ToolCreateManyInput)
    data!: Array<ToolCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
