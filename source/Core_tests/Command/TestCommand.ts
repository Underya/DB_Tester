import { CommandResult } from "../../Core/Command/CommandResult";
import { ICommand } from "../../Core/Command/ICommand";
import { IConnect } from "../../Core/Connect/IConnect";

class TestCommand implements ICommand {
    _selectNumber : number = 1;

    constructor(selectNumber: number){
        this._selectNumber = selectNumber;
    }

    Execute(connect : IConnect): Promise<CommandResult> {
        return connect.ExuteScalar(`SELECT ${this._selectNumber}`);
    }
} 

export { TestCommand };