import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
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
