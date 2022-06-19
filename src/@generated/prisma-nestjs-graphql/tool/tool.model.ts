import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Rent } from '../rent/rent.model';
import { ToolCount } from './tool-count.output';

@ObjectType()
export class Tool {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    desc!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Int, {nullable:false})
    totalStock!: number;

    @Field(() => Int, {nullable:false})
    priceHour!: number;

    @Field(() => Int, {nullable:false})
    priceDay!: number;

    @Field(() => [Rent], {nullable:true})
    rents?: Array<Rent>;

    @Field(() => ToolCount, {nullable:false})
    _count?: ToolCount;
}
