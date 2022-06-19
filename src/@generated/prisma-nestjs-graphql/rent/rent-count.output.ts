import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RentCount {

    @Field(() => Int, {nullable:false})
    tools?: number;
}
