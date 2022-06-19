import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolCreateWithoutRentsInput } from './tool-create-without-rents.input';
import { Type } from 'class-transformer';
import { ToolCreateOrConnectWithoutRentsInput } from './tool-create-or-connect-without-rents.input';
import { ToolWhereUniqueInput } from './tool-where-unique.input';

@InputType()
export class ToolCreateNestedManyWithoutRentsInput {

    @Field(() => [ToolCreateWithoutRentsInput], {nullable:true})
    @Type(() => ToolCreateWithoutRentsInput)
    create?: Array<ToolCreateWithoutRentsInput>;

    @Field(() => [ToolCreateOrConnectWithoutRentsInput], {nullable:true})
    @Type(() => ToolCreateOrConnectWithoutRentsInput)
    connectOrCreate?: Array<ToolCreateOrConnectWithoutRentsInput>;

    @Field(() => [ToolWhereUniqueInput], {nullable:true})
    @Type(() => ToolWhereUniqueInput)
    connect?: Array<ToolWhereUniqueInput>;
}
