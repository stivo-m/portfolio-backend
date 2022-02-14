import { Profile } from "../../domain/schema/profile.schema";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { ProfileUseCase } from "../../usecase/profile.usecase";
import { MongoDB } from "../../infrastructure/repository/mongo.db";

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
	constructor(private useCase: ProfileUseCase) {
		this.useCase = new ProfileUseCase(new MongoDB());
	}

	@Query(() => Profile, { nullable: true })
	profile() {
		return this.useCase.getProfile();
	}

	@Mutation(() => Profile)
	updateProfile(
		@Arg("input", () => UpdateProfileInput) input: UpdateProfileInput,
	) {}
}
