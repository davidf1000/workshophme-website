import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentWhereUniqueInput } from './rent-where-unique.input';
import { Type } from 'class-transformer';
import { RentUpdateWithoutToolsInput } from './rent-update-without-tools.input';
import { RentCreateWithoutToolsInput } from './rent-create-without-tools.input';

@InputType()
export class RentUpsertWithWhereUniqueWithoutToolsInput {

    @Field(() => RentWhereUniqueInput, {nullable:false})
    @Type(() => RentWhereUniqueInput)
    where!: RentWhereUniqueInput;

    @Field(() => RentUpdateWithoutToolsInput, {nullable:false})
    @Type(() => RentUpdateWithoutToolsInput)
    update!: RentUpdateWithoutToolsInput;

    @Field(() => RentCreateWithoutToolsInput, {nullable:false})
    @Type(() => RentCreateWithoutToolsInput)
    create!: RentCreateWithoutToolsInput;
}
