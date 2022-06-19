import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentCreateWithoutToolsInput } from './rent-create-without-tools.input';
import { Type } from 'class-transformer';
import { RentCreateOrConnectWithoutToolsInput } from './rent-create-or-connect-without-tools.input';
import { RentUpsertWithWhereUniqueWithoutToolsInput } from './rent-upsert-with-where-unique-without-tools.input';
import { RentWhereUniqueInput } from './rent-where-unique.input';
import { RentUpdateWithWhereUniqueWithoutToolsInput } from './rent-update-with-where-unique-without-tools.input';
import { RentUpdateManyWithWhereWithoutToolsInput } from './rent-update-many-with-where-without-tools.input';
import { RentScalarWhereInput } from './rent-scalar-where.input';

@InputType()
export class RentUpdateManyWithoutToolsInput {

    @Field(() => [RentCreateWithoutToolsInput], {nullable:true})
    @Type(() => RentCreateWithoutToolsInput)
    create?: Array<RentCreateWithoutToolsInput>;

    @Field(() => [RentCreateOrConnectWithoutToolsInput], {nullable:true})
    @Type(() => RentCreateOrConnectWithoutToolsInput)
    connectOrCreate?: Array<RentCreateOrConnectWithoutToolsInput>;

    @Field(() => [RentUpsertWithWhereUniqueWithoutToolsInput], {nullable:true})
    @Type(() => RentUpsertWithWhereUniqueWithoutToolsInput)
    upsert?: Array<RentUpsertWithWhereUniqueWithoutToolsInput>;

    @Field(() => [RentWhereUniqueInput], {nullable:true})
    @Type(() => RentWhereUniqueInput)
    set?: Array<RentWhereUniqueInput>;

    @Field(() => [RentWhereUniqueInput], {nullable:true})
    @Type(() => RentWhereUniqueInput)
    disconnect?: Array<RentWhereUniqueInput>;

    @Field(() => [RentWhereUniqueInput], {nullable:true})
    @Type(() => RentWhereUniqueInput)
    delete?: Array<RentWhereUniqueInput>;

    @Field(() => [RentWhereUniqueInput], {nullable:true})
    @Type(() => RentWhereUniqueInput)
    connect?: Array<RentWhereUniqueInput>;

    @Field(() => [RentUpdateWithWhereUniqueWithoutToolsInput], {nullable:true})
    @Type(() => RentUpdateWithWhereUniqueWithoutToolsInput)
    update?: Array<RentUpdateWithWhereUniqueWithoutToolsInput>;

    @Field(() => [RentUpdateManyWithWhereWithoutToolsInput], {nullable:true})
    @Type(() => RentUpdateManyWithWhereWithoutToolsInput)
    updateMany?: Array<RentUpdateManyWithWhereWithoutToolsInput>;

    @Field(() => [RentScalarWhereInput], {nullable:true})
    @Type(() => RentScalarWhereInput)
    deleteMany?: Array<RentScalarWhereInput>;
}
