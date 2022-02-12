import { Query, Resolver } from "type-graphql";

@Resolver()
export class ProfileResolver {
	@Query(() => String)
	name() {
		return "Me";
	}
}
