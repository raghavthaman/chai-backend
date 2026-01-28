import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true // Create a database index on this field to make searches faster.
    }, 
    password: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    }, 
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true // Create a database index on this field to make searches faster.
    }, 
    avatar: {
        type: String, // cloudinary URL
        required: true
    },
    coverImage: {
        type: String, // cloudinary URL
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String
    }
},
{
    timestamps: true
});

// Runs before saving a user to the database
// You must use normal function(), NOT arrow function () => {}

// Why?
// Because this is required, and arrow functions don’t have their own this.
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) {
        return next();
}
    this.password = await bcrypt.hash(this.password, 10); // Salt rounds = 10
    next()
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}

// creating and returning a JWT token.
userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName // this fields are coming from the database.
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id: this._id, // this fields are coming from the database.
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}

export const User = mongoose.model("User", userSchema);
