import mongoose, {Schema,Document} from "mongoose"

export interface IPerson extends Document{
    id:string
    name:string
    dateOfBirth:string
    Seria:string
    CovidTest:string
    anaylsDate:string
    gender:string
}

let personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dateOfBirth:{
       type:String,
       required:true
    },
    Seria:{
        type:String,
        required:true
    },
    CovidTest:{
        type:String,
        required:true
    },
    analysDate:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
}, {timestamps: true})

export default mongoose.model<IPerson>("Person",personSchema)
