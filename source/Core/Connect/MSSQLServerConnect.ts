import { IConnect } from "./IConnect";


class MSSQLServerConnect implements IConnect {

    OpenConnect(): void {
        throw new Error("Method not implemented.");
    }
    CloseConnect(): void {
        throw new Error("Method not implemented.");
    }

}

export { MSSQLServerConnect }