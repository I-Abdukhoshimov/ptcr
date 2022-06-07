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
    },
    dateOfBirth:{
       type:String,
    },
    Seria:{
        type:String,
    },
    CovidTest:{
        type:String,
    },
    analysDate:{
        type:String,
    },
    gender:{
        type:String
    }
})

export default mongoose.model<IPerson>("Person",personSchema)
