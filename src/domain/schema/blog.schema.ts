import { getModelForClass, Prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Blog {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	@Prop({ required: true, type: String })
	title: boolean;

	@Field(() => String)
	@Prop({ required: true, type: String })
	slug: string;

	@Field(() => String)
	@Prop({ required: true, type: String })
	body: string;

	@Field(() => String)
	@Prop({ required: false, type: String })
	banner?: string;

	@Field(() => String, { nullable: true, defaultValue: "blog-post" })
	@Prop({ required: false, type: String })
	tag?: string;

	@Field(() => Boolean)
	@Prop({ default: false, type: Boolean })
	published?: boolean;
}

export const BlogModel = getModelForClass<typeof Blog>(Blog);
