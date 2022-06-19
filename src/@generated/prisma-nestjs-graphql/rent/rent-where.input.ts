import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AdminRelationFilter } from '../admin/admin-relation-filter.input';
import { ToolListRelationFilter } from '../tool/tool-list-relation-filter.input';

@InputType()
export class RentWhereInput {

    @Field(() => [RentWhereInput], {nullable:true})
    AND?: Array<RentWhereInput>;

    @Field(() => [RentWhereInput], {nullable:true})
    OR?: Array<RentWhereInput>;

    @Field(() => [RentWhereInput], {nullable:true})
    NOT?: Array<RentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => AdminRelationFilter, {nullable:true})
    admin?: AdminRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    adminId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    organisation?: StringFilter;

    @Field(() => ToolListRelationFilter, {nullable:true})
    tools?: ToolListRelationFilter;
}
