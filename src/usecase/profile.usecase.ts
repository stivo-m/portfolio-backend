import { DBInterface } from "../infrastructure/interfaces/db.interface";

export class ProfileUseCase {
	constructor(private db: DBInterface) {
		this.db = db;
	}

	async getProfile() {
		return this.db.getUserProfile("1");
	}

	async updateProfile() {}
}
