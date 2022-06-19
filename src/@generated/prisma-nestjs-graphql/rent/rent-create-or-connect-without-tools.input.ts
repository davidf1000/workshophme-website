import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentWhereUniqueInput } from './rent-where-unique.input';
import { Type } from 'class-transformer';
import { RentCreateWithoutToolsInput } from './rent-create-without-tools.input';

@InputType()
export class RentCreateOrConnectWithoutToolsInput {

    @Field(() => RentWhereUniqueInput, {nullable:false})
    @Type(() => RentWhereUniqueInput)
    where!: RentWhereUniqueInput;

    @Field(() => RentCreateWithoutToolsInput, {nullable:false})
    @Type(() => RentCreateWithoutToolsInput)
    create!: RentCreateWithoutToolsInput;
}
