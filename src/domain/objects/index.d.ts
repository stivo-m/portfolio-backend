import { Request, Response } from "express";
import { Field, InputType } from "type-graphql";
import { Profile } from "../schema/profile.schema";

export interface AppContext {
	req: Request;
	res: Response;
	profile?: Profile;
}

