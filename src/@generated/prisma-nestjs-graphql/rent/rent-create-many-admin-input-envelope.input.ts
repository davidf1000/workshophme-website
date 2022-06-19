import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentCreateManyAdminInput } from './rent-create-many-admin.input';
import { Type } from 'class-transformer';

@InputType()
export class RentCreateManyAdminInputEnvelope {

    @Field(() => [RentCreateManyAdminInput], {nullable:false})
    @Type(() => RentCreateManyAdminInput)
    data!: Array<RentCreateManyAdminInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
