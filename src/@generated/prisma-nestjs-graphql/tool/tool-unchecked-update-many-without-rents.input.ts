import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolCreateWithoutRentsInput } from './tool-create-without-rents.input';
import { Type } from 'class-transformer';
import { ToolCreateOrConnectWithoutRentsInput } from './tool-create-or-connect-without-rents.input';
import { ToolUpsertWithWhereUniqueWithoutRentsInput } from './tool-upsert-with-where-unique-without-rents.input';
import { ToolWhereUniqueInput } from './tool-where-unique.input';
import { ToolUpdateWithWhereUniqueWithoutRentsInput } from './tool-update-with-where-unique-without-rents.input';
import { ToolUpdateManyWithWhereWithoutRentsInput } from './tool-update-many-with-where-without-rents.input';
import { ToolScalarWhereInput } from './tool-scalar-where.input';

@InputType()
export class ToolUncheckedUpdateManyWithoutRentsInput {

    @Field(() => [ToolCreateWithoutRentsInput], {nullable:true})
    @Type(() => ToolCreateWithoutRentsInput)
    create?: Array<ToolCreateWithoutRentsInput>;

    @Field(() => [ToolCreateOrConnectWithoutRentsInput], {nullable:true})
    @Type(() => ToolCreateOrConnectWithoutRentsInput)
    connectOrCreate?: Array<ToolCreateOrConnectWithoutRentsInput>;

    @Field(() => [ToolUpsertWithWhereUniqueWithoutRentsInput], {nullable:true})
    @Type(() => ToolUpsertWithWhereUniqueWithoutRentsInput)
    upsert?: Array<ToolUpsertWithWhereUniqueWithoutRentsInput>;

    @Field(() => [ToolWhereUniqueInput], {nullable:true})
    @Type(() => ToolWhereUniqueInput)
    set?: Array<ToolWhereUniqueInput>;

    @Field(() => [ToolWhereUniqueInput], {nullable:true})
    @Type(() => ToolWhereUniqueInput)
    disconnect?: Array<ToolWhereUniqueInput>;

    @Field(() => [ToolWhereUniqueInput], {nullable:true})
    @Type(() => ToolWhereUniqueInput)
    delete?: Array<ToolWhereUniqueInput>;

    @Field(() => [ToolWhereUniqueInput], {nullable:true})
    @Type(() => ToolWhereUniqueInput)
    connect?: Array<ToolWhereUniqueInput>;

    @Field(() => [ToolUpdateWithWhereUniqueWithoutRentsInput], {nullable:true})
    @Type(() => ToolUpdateWithWhereUniqueWithoutRentsInput)
    update?: Array<ToolUpdateWithWhereUniqueWithoutRentsInput>;

    @Field(() => [ToolUpdateManyWithWhereWithoutRentsInput], {nullable:true})
    @Type(() => ToolUpdateManyWithWhereWithoutRentsInput)
    updateMany?: Array<ToolUpdateManyWithWhereWithoutRentsInput>;

    @Field(() => [ToolScalarWhereInput], {nullable:true})
    @Type(() => ToolScalarWhereInput)
    deleteMany?: Array<ToolScalarWhereInput>;
}
