import { CommandResult } from "../Command/CommandResult";
import { IConnect } from "./IConnect";
import { ConnectionPool, connect, query  } from "mssql"

class MSSQLServerConnect implements IConnect {
    private _connectionPool : ConnectionPool | null = null;
    
    async OpenConnect(): Promise<void> {
        this._connectionPool = await connect("Server=localhost,1433;Database=master;User Id=sa;Password=StrongPassword123!@#;trustServerCertificate=True");
    }

    async CloseConnect(): Promise<void> {
        await this._connectionPool!.close();
    }

    async ExuteScalar(query: string): Promise<CommandResult> {
        return (await this._connectionPool!.query(query)).recordset.at(0)[''] as CommandResult;
    }

}

export { MSSQLServerConnect }