import { CommandResult } from "../Command/CommandResult";

interface IConnect {
    OpenConnect() : void;
    CloseConnect() : void;
    ExuteScalar(quert : string) : Promise<CommandResult>;
}

export { IConnect }