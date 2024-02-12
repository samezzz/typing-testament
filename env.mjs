import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		// This is optional because it's only used in development.
		// See https://next-auth.js.org/deployment.
		BIBLE_API_SECRET_DEV: z.string().min(1),
		BIBLE_API_SECRET_PROD: z.string().min(1),
	},
	client: {},
	runtimeEnv: {
		BIBLE_API_SECRET_DEV: process.env.BIBLE_API_SECRET_DEV,
		BIBLE_API_SECRET_PROD: process.env.BIBLE_API_SECRET_PROD,
	},
});
