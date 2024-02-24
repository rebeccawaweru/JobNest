// contains email and password field

import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import validator from 'validator';

const Schema = mongoose.Schema

const userSchema = new Schema({
  type : { type: String, required: true},
  fullname : { type: String, required: true},
  username : { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true },
  tagline: {type:String},
  password: { type: String, required: true },
  phone : { type: String },
  address : { type: String },
  website : { type: String },
  about : { type: String },
  education : { type: Array },
  experience : { type: Array },
  skills : { type: Array },
  certifications : { type: Array },
  updated : { type: Boolean }

})

// register static method
userSchema.statics.register = async function (
	type, fullname, username, email, password,
	) {
	// validate the email and password strength
	if (!type || !fullname || !username || !email || !password) {
		throw new Error('All fields must be filled to proceed')
	}
	if (!validator.isEmail(email)) {
		throw new Error('The email is not valid')
	}

	// if (!validator.isStrongPassword(password)) {
	// 	throw new Error('Please use a stronger password')
	// }
	// if email exists throw new error else create user
	const exists = await this.findOne({ email })
	if (exists) {
		throw new Error("Email is already in use")
	}

	const salt = await bcrypt.genSalt(10)
	const hash = await bcrypt.hash(password, salt)
	const user = await this.create({ type, fullname, username, email, password: hash })

	return user
}

// static login method

userSchema.statics.login = async function(username, password) {
	if (!username || !password) {
		throw new Error('All fields must be filled to proceed')
	}

	const user = await this.findOne({ username })
	// if no username exists throw new error
	if (!user) {
		throw new Error('This username does not exist, try again')
	}

	const passwordMatch = await bcrypt.compare(password, user.password)
	if (!passwordMatch) {
		throw new Error('Incorrect password, try again')
	}

	return user
}
const User = mongoose.model('User', userSchema)
export default User

