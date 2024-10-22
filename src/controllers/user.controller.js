import { asyncHandler } from "../utlis/asynchandler";


const registerUser = asyncHandler(async (res,res) => {
    res.status(200).jsoon({
        message: "ok"
    })
})



export { registerUser};