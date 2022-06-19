import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateWithoutRentsInput } from './admin-create-without-rents.input';
import { Type } from 'class-transformer';
import { AdminCreateOrConnectWithoutRentsInput } from './admin-create-or-connect-without-rents.input';
import { AdminUpsertWithoutRentsInput } from './admin-upsert-without-rents.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { AdminUpdateWithoutRentsInput } from './admin-update-without-rents.input';

@InputType()
export class AdminUpdateOneRequiredWithoutRentsInput {

    @Field(() => AdminCreateWithoutRentsInput, {nullable:true})
    @Type(() => AdminCreateWithoutRentsInput)
    create?: AdminCreateWithoutRentsInput;

    @Field(() => AdminCreateOrConnectWithoutRentsInput, {nullable:true})
    @Type(() => AdminCreateOrConnectWithoutRentsInput)
    connectOrCreate?: AdminCreateOrConnectWithoutRentsInput;

    @Field(() => AdminUpsertWithoutRentsInput, {nullable:true})
    @Type(() => AdminUpsertWithoutRentsInput)
    upsert?: AdminUpsertWithoutRentsInput;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    @Type(() => AdminWhereUniqueInput)
    connect?: AdminWhereUniqueInput;

    @Field(() => AdminUpdateWithoutRentsInput, {nullable:true})
    @Type(() => AdminUpdateWithoutRentsInput)
    update?: AdminUpdateWithoutRentsInput;
}
