import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
	const method = req.method ?? "GET";
	let body = {};
	res.setHeader("Content-Type", "application/json");

	switch (method) {
		case "GET":
			body = req.query;
			res.statusCode = 200;
			break;
		case "DELETE":
			res.statusCode = 204;
			break;
		default:
			res.statusCode = 201;
			body = req.body;
			break;
	}

	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify({ body }));
};
