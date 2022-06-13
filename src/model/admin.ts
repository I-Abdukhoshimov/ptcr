import mongoose,{Schema,Document, model} from "mongoose"

export interface IAdmin extends Document{
    id:string
    name:string
    password:string
}

let adminSchema = new mongoose.Schema({
    name:{
        type:String,
        default:"Shedevr-denta"
    },
    password:{
        type:String,
        default:"Shedevr-denta2022 "
    }
})

export default mongoose.model<IAdmin>("Admin",adminSchema)