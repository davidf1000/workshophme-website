import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentCreateWithoutAdminInput } from './rent-create-without-admin.input';
import { Type } from 'class-transformer';
import { RentCreateOrConnectWithoutAdminInput } from './rent-create-or-connect-without-admin.input';
import { RentCreateManyAdminInputEnvelope } from './rent-create-many-admin-input-envelope.input';
import { RentWhereUniqueInput } from './rent-where-unique.input';

@InputType()
export class RentUncheckedCreateNestedManyWithoutAdminInput {

    @Field(() => [RentCreateWithoutAdminInput], {nullable:true})
    @Type(() => RentCreateWithoutAdminInput)
    create?: Array<RentCreateWithoutAdminInput>;

    @Field(() => [RentCreateOrConnectWithoutAdminInput], {nullable:true})
    @Type(() => RentCreateOrConnectWithoutAdminInput)
    connectOrCreate?: Array<RentCreateOrConnectWithoutAdminInput>;

    @Field(() => RentCreateManyAdminInputEnvelope, {nullable:true})
    @Type(() => RentCreateManyAdminInputEnvelope)
    createMany?: RentCreateManyAdminInputEnvelope;

    @Field(() => [RentWhereUniqueInput], {nullable:true})
    @Type(() => RentWhereUniqueInput)
    connect?: Array<RentWhereUniqueInput>;
}
