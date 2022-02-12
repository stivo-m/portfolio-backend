import { Blog } from "../../domain/schema/blog.schema";
import {
	Arg,
	Field,
	ID,
	InputType,
	Mutation,
	Query,
	Resolver,
} from "type-graphql";

@InputType()
class PostInput {
	@Field(() => String)
	title: string;

	@Field(() => String)
	body: string;

	@Field(() => String, { nullable: true })
	banner?: string;

	@Field(() => Boolean)
	published: boolean;
}

@InputType()
class PostUpdateInput extends PostInput {
	@Field(() => ID)
	id: string;
}

@Resolver()
export class BlogResolver {
	@Query(() => [Blog])
	async posts() {
		return [];
	}

	@Query(() => Blog)
	async post(@Arg("id", () => ID) id: string) {
		return null;
	}

	@Mutation(() => Blog)
	addPost(@Arg("input", () => PostInput) input: PostInput) {}

	@Mutation(() => Blog)
	updatePost(@Arg("input", () => PostUpdateInput) input: PostUpdateInput) {}

	@Mutation(() => Boolean)
	deletePost(@Arg("id", () => ID) id: string) {}
}
