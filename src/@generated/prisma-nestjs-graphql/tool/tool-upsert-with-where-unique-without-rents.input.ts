import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolWhereUniqueInput } from './tool-where-unique.input';
import { Type } from 'class-transformer';
import { ToolUpdateWithoutRentsInput } from './tool-update-without-rents.input';
import { ToolCreateWithoutRentsInput } from './tool-create-without-rents.input';

@InputType()
export class ToolUpsertWithWhereUniqueWithoutRentsInput {

    @Field(() => ToolWhereUniqueInput, {nullable:false})
    @Type(() => ToolWhereUniqueInput)
    where!: ToolWhereUniqueInput;

    @Field(() => ToolUpdateWithoutRentsInput, {nullable:false})
    @Type(() => ToolUpdateWithoutRentsInput)
    update!: ToolUpdateWithoutRentsInput;

    @Field(() => ToolCreateWithoutRentsInput, {nullable:false})
    @Type(() => ToolCreateWithoutRentsInput)
    create!: ToolCreateWithoutRentsInput;
}
