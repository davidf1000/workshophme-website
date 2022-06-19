import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tool {
  @Field()
  toolId: string;
  @Field()
  name: string;
  @Field()
  desc: string;
  @Field()
  image: string;
  @Field((type) => Int)
  totalStock: number;
  @Field((type) => Int)
  priceHour: number;
  @Field((type) => Int)
  priceDay: number;
}
