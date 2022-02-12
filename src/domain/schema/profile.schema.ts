import { getModelForClass, Prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Profile {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	@Prop({ required: true, type: String })
	name: string;

	@Field(() => String)
	@Prop({ required: true, unique: true, type: String })
	email: string;

	@Field(() => String)
	@Prop({ required: false, type: String })
	avatar?: string;

	@Prop({ required: true, unique: true, type: String })
	password: string;
}

export const ProfileModel = getModelForClass<typeof Profile>(Profile);
