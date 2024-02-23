import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const requireAuth = async (req, res, next) => {
	// to verify authentication
	const { authorization } = req.headers

	if (!authorization) {
		return res.status(401).json({error: 'The authorization token is required'})
	}

	const token = authorization.split(" ")[1]

	try {
		// get id from the payload
		const {_id} = jwt.verify(token, process.env.SECRET)

		req.user = await User.findOne({ _id }).select('_id')
		next()


	} catch(error) {
		console.log(error);
		res.status(401).json({error: 'The request is not authorized'})

	}
}

export default requireAuth
