import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Admin } from '../admin/admin.model';
import { Int } from '@nestjs/graphql';
import { Tool } from '../tool/tool.model';
import { RentCount } from './rent-count.output';

@ObjectType()
export class Rent {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false,defaultValue:'waiting'})
    status!: string;

    @Field(() => Admin, {nullable:false})
    admin?: Admin;

    @Field(() => Int, {nullable:false})
    adminId!: number;

    @Field(() => String, {nullable:false})
    organisation!: string;

    @Field(() => [Tool], {nullable:true})
    tools?: Array<Tool>;

    @Field(() => RentCount, {nullable:false})
    _count?: RentCount;
}
