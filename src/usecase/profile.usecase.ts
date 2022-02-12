import { DBInterface } from "../infrastructure/interfaces/db.interface";
import { MongoDB } from "../infrastructure/repository/mongo.db";

export class ProfileUseCase {
	constructor(private db: DBInterface) {
		db ?? new MongoDB();
		this.db = db;
	}

	async getProfile() {
		return this.db.getUserProfile("1");
	}

	async updateProfile() {}
}
