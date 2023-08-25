import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';
dotenv.config();

const config: CodegenConfig = {
	schema: {
		'https://api.start.gg/gql/alpha': { 
			headers: {
				Authorization: `Bearer ${process.env.VITE_GQL_TOKEN!}`
			}
		},
	},
	documents: ['src/**/*.ts'],
	generates: {
		'./src/__generated__/': {
			preset: 'client',
		}
	},
	ignoreNoDocuments: true,
};

export default config;