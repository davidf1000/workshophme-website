import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentWhereUniqueInput } from './rent-where-unique.input';
import { Type } from 'class-transformer';
import { RentUpdateWithoutToolsInput } from './rent-update-without-tools.input';

@InputType()
export class RentUpdateWithWhereUniqueWithoutToolsInput {

    @Field(() => RentWhereUniqueInput, {nullable:false})
    @Type(() => RentWhereUniqueInput)
    where!: RentWhereUniqueInput;

    @Field(() => RentUpdateWithoutToolsInput, {nullable:false})
    @Type(() => RentUpdateWithoutToolsInput)
    data!: RentUpdateWithoutToolsInput;
}
