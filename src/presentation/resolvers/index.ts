import { BlogResolver } from "./blog.resolver";
import { ProfileResolver } from "./profile.resolver";

export const resolvers = [ProfileResolver, BlogResolver] as const;
