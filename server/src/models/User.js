import mongoose from 'mongoose'
import validator from 'validator'

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('This value should be email format')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate(value) {
            if(value.includes('password')) {
                throw new Error('Password is invalid')
            }
        }
    },
    address: {
        type: String
    }
},{
    timestamps: true
})

const User = mongoose.model('users', UserSchema);

export default User;