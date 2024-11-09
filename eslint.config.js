import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		ignores: ["lib", "node_modules", "pnpm-lock.yaml"],
	},
	{
		linterOptions: {
			reportUnusedDisableDirectives: "error",
		},
	},
);
