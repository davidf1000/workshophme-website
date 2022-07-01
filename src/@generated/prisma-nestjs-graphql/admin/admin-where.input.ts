import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class AdminWhereInput {

    @Field(() => [AdminWhereInput], {nullable:true})
    AND?: Array<AdminWhereInput>;

    @Field(() => [AdminWhereInput], {nullable:true})
    OR?: Array<AdminWhereInput>;

    @Field(() => [AdminWhereInput], {nullable:true})
    NOT?: Array<AdminWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;
}
