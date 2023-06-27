import test from 'test'
import { IConnect } from '../../Core/Connect/IConnect';
import { MSSQLServerConnect } from '../../Core/Connect/MSSQLServerConnect';

function CreateConnect() : IConnect {
    return new MSSQLServerConnect();
}

test('Open Connect', async (t) => {
    let connect = CreateConnect();

    await connect.OpenConnect();
    await connect.CloseConnect();
})
