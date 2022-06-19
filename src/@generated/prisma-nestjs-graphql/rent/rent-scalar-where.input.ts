import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class RentScalarWhereInput {

    @Field(() => [RentScalarWhereInput], {nullable:true})
    AND?: Array<RentScalarWhereInput>;

    @Field(() => [RentScalarWhereInput], {nullable:true})
    OR?: Array<RentScalarWhereInput>;

    @Field(() => [RentScalarWhereInput], {nullable:true})
    NOT?: Array<RentScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    adminId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    organisation?: StringFilter;
}
