/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PersonalProfileWhereUniqueInput } from "./PersonalProfileWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PersonalProfileUpdateInput } from "./PersonalProfileUpdateInput";

@ArgsType()
class UpdatePersonalProfileArgs {
  @ApiProperty({
    required: true,
    type: () => PersonalProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PersonalProfileWhereUniqueInput)
  @Field(() => PersonalProfileWhereUniqueInput, { nullable: false })
  where!: PersonalProfileWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PersonalProfileUpdateInput,
  })
  @ValidateNested()
  @Type(() => PersonalProfileUpdateInput)
  @Field(() => PersonalProfileUpdateInput, { nullable: false })
  data!: PersonalProfileUpdateInput;
}

export { UpdatePersonalProfileArgs as UpdatePersonalProfileArgs };
