import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminOrderByWithRelationInput } from '../admin/admin-order-by-with-relation.input';
import { ToolOrderByRelationAggregateInput } from '../tool/tool-order-by-relation-aggregate.input';

@InputType()
export class RentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => AdminOrderByWithRelationInput, {nullable:true})
    admin?: AdminOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    adminId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organisation?: keyof typeof SortOrder;

    @Field(() => ToolOrderByRelationAggregateInput, {nullable:true})
    tools?: ToolOrderByRelationAggregateInput;
}
