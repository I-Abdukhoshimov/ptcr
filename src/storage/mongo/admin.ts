import admin, { IAdmin } from "../../model/admin"
import { logger } from "../../config/logger";
import AppError from "../../utils/appError";

export class AdminStorage {
    private scope = "storage.admin"



    async findOne(query:Object):Promise<IAdmin |
     null>{
        try{
            let dbobj = await admin.findOne({...query}) 
            
            if(!dbobj) throw new Error('Admin not found')
            return dbobj
        }catch(error){
           return null
        }
    }

    async find(query:Object):Promise<IAdmin[]>{
        try{
            let dbobj = await admin.find({...query})
            
            return dbobj
        }catch(error){
            logger.error(`${this.scope}.find: finished with error: ${error}`)
            throw error
        }
    }
    async create(payload: IAdmin): Promise<IAdmin> {
        try {
            let dbObj = await admin.create(payload)

            return dbObj
        } catch (error) {
            console.log(error)
            logger.error(`${this.scope}.create: finished with error: ${error}`)
            throw error
        }
    }
}