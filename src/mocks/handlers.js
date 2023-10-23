import { rest } from "msw";

export const handlers = [
	rest.get('https://fakestoreapi.com/products', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					body: 'This is a body',
					id: 1,
					title: 'Title',
					userId: 1,
				},
			])
		);
	}),
];