import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Rent } from '../rent/rent.model';
import { AdminCount } from './admin-count.output';

@ObjectType()
export class Admin {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => [Rent], {nullable:true})
    rents?: Array<Rent>;

    @Field(() => AdminCount, {nullable:false})
    _count?: AdminCount;
}
