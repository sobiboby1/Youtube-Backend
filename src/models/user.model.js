import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({

    username: {
      type: String,
      requried: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true
    },
    email: {
        type: String,
        requried: true,
        unique: true,
        trim: true,
        lowercase: true,
        
    },
    fullname: {
        type: String,
        requried: true,
        trim: true,
        lowercase: true,
        index: true
    },
    avatar: {
        type: String,
        requried: true,
    },
    coverimage: {
        type: String,
    },
    watchHistory: {
        type: Schema.Types.ObjectId,
        ref: "video"
    },
    password: {
        type: String,
        requried: [true, 'Password is requried']
    },
    refreshToken: {
        type: String
    }

},
{
    timestamps: true
}
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

this.password = bcrypt.hash(this.password, 10)
next()
})

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAcessToken = function (){
  return  jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return  jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



export const user = mongoose.model("User" , userSchema);