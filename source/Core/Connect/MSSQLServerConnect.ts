import { IConnect } from "./IConnect";
import { connect, query  } from "mssql"

class MSSQLServerConnect implements IConnect {

    OpenConnect(): void {
        connect("Server=localhost,1433;Database=master;User Id=sa;Password=StrongPassword123!@#")
            .then((connectionPool) => {
                console.log(connectionPool);
            })
            
    }

    CloseConnect(): void {
        
    }

}

export { MSSQLServerConnect }