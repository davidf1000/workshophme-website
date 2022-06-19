import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Tool } from 'src/tools.entity';

@ObjectType()
export class Rent {
  @Field()
  rentId: string;
  @Field()
  renterName: string;
  @Field()
  renterNim: string;
  @Field()
  renterPhone: string;
  @Field()
  renterLineId: string;
  @Field()
  organisation: string;
  @Field((type) => [Int])
  items: string[];
  @Field((type) => GraphQLISODateTime)
  fromDate: Date;
  @Field((type) => GraphQLISODateTime)
  expectedReturnDate: Date;
  @Field((type) => Int)
  totalPrice: number;
  status: string;
  @Field((type) => Int, { nullable: true })
  fine?: number;
  @Field({ nullable: true })
  pickupNim?: string;
  @Field({ nullable: true })
  pickupName?: string;
  @Field({ nullable: true })
  returnNim?: string;
  @Field({ nullable: true })
  returnName?: string;
  @Field((type) => GraphQLISODateTime, { nullable: true })
  returnDate?: Date;
}
