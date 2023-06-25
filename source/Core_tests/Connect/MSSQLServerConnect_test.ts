import test from 'test'
import { IConnect } from '../../Core/Connect/IConnect';
import { MSSQLServerConnect } from '../../Core/Connect/MSSQLServerConnect';

function CreateConnect() : IConnect {
    return new MSSQLServerConnect();
}

test('Open Connect', (t) => {
    let connect = CreateConnect();

    connect.OpenConnect();
    connect.CloseConnect();
})
