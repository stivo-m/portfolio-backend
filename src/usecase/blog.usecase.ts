import { PostInput } from "../application/resolvers/blog.resolver";

import { DBInterface } from "../infrastructure/interfaces/db.interface";
import { MongoDB } from "../infrastructure/repository/mongo.db";

export class BlogUseCase {
	constructor(private db: DBInterface) {
		db ?? new MongoDB();
		this.db = db;
	}

	async getPosts() {
		return this.db.getPosts();
	}

	async getPost(id: string) {
		return this.db.getPost(id);
	}

	async addPost(post: PostInput) {
		return this.db.addPost(post);
	}

	deletePost(id: string): boolean {
		return this.db.deletePost(id);
	}
}
