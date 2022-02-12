import { Prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Blog {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	@Prop({ required: true })
	title: string;

	@Field(() => String)
	@Prop({ required: true })
	slug: string;

	@Field(() => String)
	@Prop({ required: true })
	body: string;

	@Field(() => String)
	@Prop({ required: false })
	banner?: string;

	@Field(() => Boolean)
	@Prop({ default: false })
	published?: boolean;
}
