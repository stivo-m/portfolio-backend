import { PostInput } from "../presentation/resolvers/blog.resolver";

import { DBInterface } from "../infrastructure/interfaces/db.interface";

export class BlogUseCase {
	constructor(private db: DBInterface) {
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

	async deletePost(id: string) {
		return this.db.deletePost(id);
	}
}
