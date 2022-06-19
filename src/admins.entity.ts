import { Field } from '@nestjs/graphql';
export class Admin {
  @Field()
  adminId: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  password: string;
}
