import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentWhereUniqueInput } from './rent-where-unique.input';
import { Type } from 'class-transformer';
import { RentUpdateWithoutAdminInput } from './rent-update-without-admin.input';
import { RentCreateWithoutAdminInput } from './rent-create-without-admin.input';

@InputType()
export class RentUpsertWithWhereUniqueWithoutAdminInput {

    @Field(() => RentWhereUniqueInput, {nullable:false})
    @Type(() => RentWhereUniqueInput)
    where!: RentWhereUniqueInput;

    @Field(() => RentUpdateWithoutAdminInput, {nullable:false})
    @Type(() => RentUpdateWithoutAdminInput)
    update!: RentUpdateWithoutAdminInput;

    @Field(() => RentCreateWithoutAdminInput, {nullable:false})
    @Type(() => RentCreateWithoutAdminInput)
    create!: RentCreateWithoutAdminInput;
}
