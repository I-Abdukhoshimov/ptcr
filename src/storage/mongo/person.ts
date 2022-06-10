import { PersonRepo } from "../repo/person";
import Person,{IPerson} from "../../model/person"
import { logger } from "../../config/logger";
import AppError from "../../utils/appError";

export class PersonStorage implements PersonRepo{
    private scope = "storage.person"

    async find(query:Object):Promise<IPerson[]>{
        try{
            let dbobj = await Person.find({...query})
            
            return dbobj
        }catch(error){
            logger.error(`${this.scope}.find: finished with error: ${error}`)
            throw error
        }
    }

    async findOne(id: Object): Promise<IPerson> {
        try {
            let dbObj = await Person.findOne({ ...id })

            if (!dbObj) {
                logger.warn(`${this.scope}.get failed to findOne`)
                throw new AppError(404, "Db object is not found")
            }

            return dbObj
        } catch (error) {
            logger.error(`${this.scope}.findOne: finished with error: ${error}`)
            throw error
        }
    }

    async create(payload: IPerson): Promise<IPerson> {
        try {
            let dbObj = await Person.create(payload)

            return dbObj
        } catch (error) {
            console.log(error)
            logger.error(`${this.scope}.create: finished with error: ${error}`)
            throw error
        }
    }

    async delete(id: string): Promise<any> {
        try {
            let dbObj = await Person.findByIdAndDelete(id)

            if (!dbObj) {
                logger.warn(`${this.scope}.delete failed to findByIdAndDelete`)
                throw new AppError(404, "Db object is not found")
            }

            return dbObj
        } catch (error) {
            logger.error(`${this.scope}.delete: finished with error: ${error}`)
            throw error
        }
    }
}