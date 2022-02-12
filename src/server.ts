import "reflect-metadata";
import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { resolvers } from "./application/resolvers";
import {
	ApolloServerPluginLandingPageGraphQLPlayground,
	ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import mongoose from "mongoose";

const PORT: any = process.env.PORT || 4000;

const main = async () => {
	const schema = await buildSchema({
		resolvers,
		// authChecker,
	});
	const app = express();

	// setup the apollo server
	const server = new ApolloServer({
		schema,
		plugins: [
			process.env.NODE_ENV === "production"
				? ApolloServerPluginLandingPageProductionDefault()
				: ApolloServerPluginLandingPageGraphQLPlayground(),
		],
	});

	// start apollo server and apply the middleware
	await server.start();
	server.applyMiddleware({ app });

	app.listen({ port: PORT }, () => {
		// TODO: connect to the database
		console.log(`Server started on http://localhost:${PORT}/graphql`);
		mongoose
			.connect(process.env.MONGODB_URL!, {})
			.then(() => console.log("Mongo DB connected successfully!"));
	});
};

main();
