import { cleanEnv, port, str, url} from "envalid";
import {config as dotenvConfig} from "dotenv";

dotenvConfig()

function validateEnv(){
    cleanEnv(process.env, {
        PORT:port(),
        Node_env: str(),
        DB_SERVER: url(),
    })
}
export default validateEnv