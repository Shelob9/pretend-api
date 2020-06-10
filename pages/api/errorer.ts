import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.statusCode = 500;
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify({ message: "Hi Roy" }));
};
