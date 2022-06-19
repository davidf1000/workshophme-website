import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ToolUncheckedUpdateManyWithoutRentsInput } from '../tool/tool-unchecked-update-many-without-rents.input';

@InputType()
export class RentUncheckedUpdateWithoutAdminInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    organisation?: StringFieldUpdateOperationsInput;

    @Field(() => ToolUncheckedUpdateManyWithoutRentsInput, {nullable:true})
    tools?: ToolUncheckedUpdateManyWithoutRentsInput;
}
