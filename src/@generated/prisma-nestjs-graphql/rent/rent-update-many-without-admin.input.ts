import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentCreateWithoutAdminInput } from './rent-create-without-admin.input';
import { Type } from 'class-transformer';
import { RentCreateOrConnectWithoutAdminInput } from './rent-create-or-connect-without-admin.input';
import { RentUpsertWithWhereUniqueWithoutAdminInput } from './rent-upsert-with-where-unique-without-admin.input';
import { RentCreateManyAdminInputEnvelope } from './rent-create-many-admin-input-envelope.input';
import { RentWhereUniqueInput } from './rent-where-unique.input';
import { RentUpdateWithWhereUniqueWithoutAdminInput } from './rent-update-with-where-unique-without-admin.input';
import { RentUpdateManyWithWhereWithoutAdminInput } from './rent-update-many-with-where-without-admin.input';
import { RentScalarWhereInput } from './rent-scalar-where.input';

@InputType()
export class RentUpdateManyWithoutAdminInput {

    @Field(() => [RentCreateWithoutAdminInput], {nullable:true})
    @Type(() => RentCreateWithoutAdminInput)
    create?: Array<RentCreateWithoutAdminInput>;

    @Field(() => [RentCreateOrConnectWithoutAdminInput], {nullable:true})
    @Type(() => RentCreateOrConnectWithoutAdminInput)
    connectOrCreate?: Array<RentCreateOrConnectWithoutAdminInput>;

    @Field(() => [RentUpsertWithWhereUniqueWithoutAdminInput], {nullable:true})
    @Type(() => RentUpsertWithWhereUniqueWithoutAdminInput)
    upsert?: Array<RentUpsertWithWhereUniqueWithoutAdminInput>;

    @Field(() => RentCreateManyAdminInputEnvelope, {nullable:true})
    @Type(() => RentCreateManyAdminInputEnvelope)
    createMany?: RentCreateManyAdminInputEnvelope;

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

    @Field(() => [RentUpdateWithWhereUniqueWithoutAdminInput], {nullable:true})
    @Type(() => RentUpdateWithWhereUniqueWithoutAdminInput)
    update?: Array<RentUpdateWithWhereUniqueWithoutAdminInput>;

    @Field(() => [RentUpdateManyWithWhereWithoutAdminInput], {nullable:true})
    @Type(() => RentUpdateManyWithWhereWithoutAdminInput)
    updateMany?: Array<RentUpdateManyWithWhereWithoutAdminInput>;

    @Field(() => [RentScalarWhereInput], {nullable:true})
    @Type(() => RentScalarWhereInput)
    deleteMany?: Array<RentScalarWhereInput>;
}
