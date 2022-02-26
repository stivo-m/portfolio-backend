import { PostInput } from "../../presentation/resolvers/blog.resolver";
import { Blog } from "src/domain/schema/blog.schema";
import { Profile } from "src/domain/schema/profile.schema";

export abstract class DBInterface {
	// profile
	saveUserProfile(user: Profile) {}
	getUserProfile(userID: String) {}
	updateUserProfile(userID: String, updatedProfile: Profile) {}

	// posts
	addPost(post: PostInput) {}
	updatePost(id: string, post: Blog) {}
	deletePost(id: string) {}
	getPosts(limit?: number) {}
	getPost(id?: string) {}
}
