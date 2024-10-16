import mongoose, {Schema} from "mongoose";

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



export const user = mongoose.model("User" , userSchema);