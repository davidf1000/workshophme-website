import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentWhereUniqueInput } from './rent-where-unique.input';
import { Type } from 'class-transformer';
import { RentCreateWithoutAdminInput } from './rent-create-without-admin.input';

@InputType()
export class RentCreateOrConnectWithoutAdminInput {

    @Field(() => RentWhereUniqueInput, {nullable:false})
    @Type(() => RentWhereUniqueInput)
    where!: RentWhereUniqueInput;

    @Field(() => RentCreateWithoutAdminInput, {nullable:false})
    @Type(() => RentCreateWithoutAdminInput)
    create!: RentCreateWithoutAdminInput;
}
