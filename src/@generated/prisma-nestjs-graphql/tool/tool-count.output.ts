import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ToolCount {

    @Field(() => Int, {nullable:false})
    rents?: number;
}
