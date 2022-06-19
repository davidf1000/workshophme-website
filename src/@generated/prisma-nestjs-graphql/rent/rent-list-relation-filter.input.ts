import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentWhereInput } from './rent-where.input';

@InputType()
export class RentListRelationFilter {

    @Field(() => RentWhereInput, {nullable:true})
    every?: RentWhereInput;

    @Field(() => RentWhereInput, {nullable:true})
    some?: RentWhereInput;

    @Field(() => RentWhereInput, {nullable:true})
    none?: RentWhereInput;
}
