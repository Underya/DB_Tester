import { IConnect } from "../Connect/IConnect";
import { CommandResult } from "./CommandResult";

interface ICommand {
    Execute(connect : IConnect) : Promise<CommandResult>;
}

export { ICommand };