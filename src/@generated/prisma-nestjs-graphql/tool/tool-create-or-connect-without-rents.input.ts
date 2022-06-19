import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolWhereUniqueInput } from './tool-where-unique.input';
import { Type } from 'class-transformer';
import { ToolCreateWithoutRentsInput } from './tool-create-without-rents.input';

@InputType()
export class ToolCreateOrConnectWithoutRentsInput {

    @Field(() => ToolWhereUniqueInput, {nullable:false})
    @Type(() => ToolWhereUniqueInput)
    where!: ToolWhereUniqueInput;

    @Field(() => ToolCreateWithoutRentsInput, {nullable:false})
    @Type(() => ToolCreateWithoutRentsInput)
    create!: ToolCreateWithoutRentsInput;
}
