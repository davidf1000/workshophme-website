import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentCreateWithoutToolsInput } from './rent-create-without-tools.input';
import { Type } from 'class-transformer';
import { RentCreateOrConnectWithoutToolsInput } from './rent-create-or-connect-without-tools.input';
import { RentWhereUniqueInput } from './rent-where-unique.input';

@InputType()
export class RentCreateNestedManyWithoutToolsInput {

    @Field(() => [RentCreateWithoutToolsInput], {nullable:true})
    @Type(() => RentCreateWithoutToolsInput)
    create?: Array<RentCreateWithoutToolsInput>;

    @Field(() => [RentCreateOrConnectWithoutToolsInput], {nullable:true})
    @Type(() => RentCreateOrConnectWithoutToolsInput)
    connectOrCreate?: Array<RentCreateOrConnectWithoutToolsInput>;

    @Field(() => [RentWhereUniqueInput], {nullable:true})
    @Type(() => RentWhereUniqueInput)
    connect?: Array<RentWhereUniqueInput>;
}
