import { Profile } from "../../domain/schema/profile.schema";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";

@InputType()
class UpdateProfileInput {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	name: string;

	@Field(() => String)
	email: string;

	@Field(() => String, { nullable: true })
	avatar?: string;

	@Field(() => String, { nullable: true })
	password?: string;
}

@Resolver()
export class ProfileResolver {
	@Query(() => Profile, { nullable: true })
	profile() {
		return null;
	}

	@Mutation(() => Profile)
	updateProfile(
		@Arg("input", () => UpdateProfileInput) input: UpdateProfileInput,
	) {}
}
