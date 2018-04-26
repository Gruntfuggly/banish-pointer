var vscode = require( 'vscode' );
var path = require( 'path' );
var process = require( 'child_process' );

function activate( context )
{
    var banishPending = false;

    var mouseExePath = path.join( vscode.extensions.getExtension( "Gruntfuggly.banish-pointer" ).extensionPath, "mouse.bat" );

    function banish()
    {
        process.exec( mouseExePath + " " + vscode.workspace.getConfiguration( "banishPointer" ).action );
    }

    function handleEvent( e )
    {
        if( e.kind === vscode.TextEditorSelectionChangeKind.Keyboard )
        {
            if( banishPending )
            {
                banish();
                banishPending = false;
            }
        }
        else if( e.kind === vscode.TextEditorSelectionChangeKind.Mouse )
        {
            banishPending = true;
        }
    }

    vscode.window.onDidChangeTextEditorSelection( handleEvent );
}

exports.activate = activate;

function deactivate()
{
}
exports.deactivate = deactivate;
