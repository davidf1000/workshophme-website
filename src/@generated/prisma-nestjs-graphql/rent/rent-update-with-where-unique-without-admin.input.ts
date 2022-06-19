import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentWhereUniqueInput } from './rent-where-unique.input';
import { Type } from 'class-transformer';
import { RentUpdateWithoutAdminInput } from './rent-update-without-admin.input';

@InputType()
export class RentUpdateWithWhereUniqueWithoutAdminInput {

    @Field(() => RentWhereUniqueInput, {nullable:false})
    @Type(() => RentWhereUniqueInput)
    where!: RentWhereUniqueInput;

    @Field(() => RentUpdateWithoutAdminInput, {nullable:false})
    @Type(() => RentUpdateWithoutAdminInput)
    data!: RentUpdateWithoutAdminInput;
}
