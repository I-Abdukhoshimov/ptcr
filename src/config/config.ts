import dotenv from "dotenv"

dotenv.config()

interface Config{
    HttpPort:string
    MongoHost:string
    MongoPort:number
    MongoDatabase:string
    MongoPassword:string
    MongoUser:string
    MongoAuthDisable:boolean
    NodeEnv:string
    MongoDbAtlasURI:string
}

let config: Config = {
    HttpPort: getConf("PORT", ""),
    MongoHost: getConf("MONGO_HOST", "localhost"),
    MongoPort: parseInt(getConf("MONGO_PORT", "27017")),
    MongoDatabase: getConf("MONGO_DATABASE", "pt"),
    MongoPassword: getConf("MONGO_PASSWORD", ""),
    MongoDbAtlasURI:getConf("MONGODB_URI",""),
    MongoUser: getConf("MONGO_USER", ""),
    NodeEnv: getConf("NODE_ENV", "production"),
    MongoAuthDisable: false
}

function getConf(name: string, def: string = ""): string {
    if (process.env[name]) {
        return process.env[name] || ""
    }

    return def
}

export default config

// mongodb+srv://ikhtiyar:ikhtiyar9207@cluster0.4gwl4.mongodb.net/vgik?retryWrites=true&w=majority
//mongodb+srv://ibro-tech:0141ikhtiyar@cluster0.sbzdj.mongodb.net/?retryWrites=true&w=majority
