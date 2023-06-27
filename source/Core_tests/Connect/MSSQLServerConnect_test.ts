import test from 'test'
import { IConnect } from '../../Core/Connect/IConnect';
import { MSSQLServerConnect } from '../../Core/Connect/MSSQLServerConnect';
import { ICommand } from '../../Core/Command/ICommand';
import { TestCommand } from '../Command/TestCommand';
import assert from 'assert';
import { CommandResult } from '../../Core/Command/CommandResult';

let returnedNumber : CommandResult = 1;

function CreateConnect() : IConnect {
    return new MSSQLServerConnect();
}

function CreateCommand() : ICommand{
    return new TestCommand(returnedNumber as number);
}

test('Open Connect', async (t) => {
    let connect = CreateConnect();
    let command = CreateCommand();

    await connect.OpenConnect()

    let res = await command.Execute(connect);

    await connect.CloseConnect();

    assert.strictEqual(res, returnedNumber);
})
