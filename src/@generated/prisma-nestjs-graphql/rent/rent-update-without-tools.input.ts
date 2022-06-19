import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AdminUpdateOneRequiredWithoutRentsInput } from '../admin/admin-update-one-required-without-rents.input';

@InputType()
export class RentUpdateWithoutToolsInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => AdminUpdateOneRequiredWithoutRentsInput, {nullable:true})
    admin?: AdminUpdateOneRequiredWithoutRentsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    organisation?: StringFieldUpdateOperationsInput;
}
