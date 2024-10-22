import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME ,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (loaclFilePath) => {
    try {
        if(!loaclFilePath) return null
        const response = await cloudinary.uploader.upload (loaclFilePath , {
            resource_type: "auto"
            // file uploaded 
        })
        console.log("file is uploaded on cloudinary" , response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(loaclFilePath)
        return null
        
    }
}


export {cloudinary}
