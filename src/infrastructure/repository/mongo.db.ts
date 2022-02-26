import { PostInput } from "../../presentation/resolvers/blog.resolver";
import { Blog, BlogModel } from "../../domain/schema/blog.schema";
import { Profile, ProfileModel } from "../../domain/schema/profile.schema";
import { DBInterface } from "../interfaces/db.interface";

export class MongoDB implements DBInterface {
	async saveUserProfile(user: Profile): Promise<Profile> {
		return await ProfileModel.create(user);
	}
	async getUserProfile(userID: string): Promise<Profile | null> {
		return await ProfileModel.findOne({ id: userID });
	}
	updateUserProfile(userID: string, updatedProfile: Profile): Profile {
		throw new Error("Method not implemented.");
	}
	async addPost(post: PostInput): Promise<Blog> {
		return await BlogModel.create(post);
	}
	updatePost(id: string, post: Blog): Promise<Blog> {
		throw new Error("Method not implemented.");
	}
	async deletePost(id: string): Promise<boolean> {
		await BlogModel.deleteOne({ id });
		return true;
	}
	async getPosts(limit?: number): Promise<Blog[] | null> {
		return await BlogModel.find({});
	}

	async getPost(id: string): Promise<Blog[] | null> {
		return await BlogModel.findById(id);
	}
}
