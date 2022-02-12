import { Prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Profile {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	@Prop({ required: true })
	name: string;

	@Field(() => String)
	@Prop({ required: true, unique: true })
	email: string;

	@Field(() => String)
	@Prop({ required: false })
	avatar?: string;

	@Prop({ required: true, unique: true })
	password: string;
}
