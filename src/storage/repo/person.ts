import { IPerson } from "../../model/person"; 

export interface IPersonAllResponse {
    payload:IPerson[]
    count: number
}

export interface PersonRepo {
    create(payload:IPerson):Promise<IPerson>
    delete(id:string):Promise<any>
    find(query:Object):Promise<IPerson[]>
    findOne(id:Object):Promise<IPerson>
}