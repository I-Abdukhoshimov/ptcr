import {PersonStorage} from "./mongo/person"
import {AdminStorage} from "./mongo/admin"

interface IStorage {
    person:PersonStorage
    admin:AdminStorage
}

export let storage: IStorage = {
    person: new PersonStorage(),
    admin: new AdminStorage(),
   
}