import {
	Arg,
	Field,
	ID,
	InputType,
	Mutation,
	Query,
	Resolver,
} from "type-graphql";
import { BlogUseCase } from "../../usecase/blog.usecase";
import { MongoDB } from "../../infrastructure/repository/mongo.db";
import { Blog } from "../../domain/schema/blog.schema";

@InputType()
export class PostInput {
	@Field(() => String)
	title: string;

	@Field(() => String)
	body: string;

	@Field(() => String)
	slug: string;

	@Field(() => String, { nullable: true })
	banner?: string;

	@Field(() => String, { nullable: true })
	tag?: string;

	@Field(() => Boolean)
	published: boolean;
}

@InputType()
export class PostUpdateInput extends PostInput {
	@Field(() => ID)
	id: string;
}

@Resolver()
export class BlogResolver {
	constructor(private useCase: BlogUseCase) {
		this.useCase = new BlogUseCase(new MongoDB());
	}

	@Query(() => [Blog], { nullable: true })
	async posts() {
		return this.useCase.getPosts();
	}

	@Query(() => Blog, { nullable: true })
	async post(@Arg("id", () => ID) id: string) {
		return await this.useCase.getPost(id);
	}

	@Mutation(() => Blog)
	async addPost(@Arg("input", () => PostInput) input: PostInput) {
		return await this.useCase.addPost(input);
	}

	@Mutation(() => Blog, { nullable: true })
	updatePost(@Arg("input", () => PostUpdateInput) input: PostUpdateInput) {}

	@Mutation(() => Boolean, { nullable: true })
	async deletePost(@Arg("id", () => ID) id: string) {
		return this.useCase.deletePost(id);
	}
}
