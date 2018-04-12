var vscode = require( 'vscode' ),
    path = require( 'path' ),
    process = require( 'child_process' );

function activate( context )
{
    var lastDocument;
    var lastVersion;
    var isTyping = false;

    var mouseExePath = path.join( vscode.extensions.getExtension( "Gruntfuggly.banish-pointer" ).extensionPath, "mouse.bat" );

    function banish()
    {
        process.exec( mouseExePath + " " + vscode.workspace.getConfiguration( "banishPointer" ).action );
    }

    function checkForTyping( e )
    {
        if( e.textEditor && e.textEditor.document )
        {
            if( e.textEditor.document !== lastDocument )
            {
                lastDocument = e.textEditor.document;
                lastVersion = e.textEditor.document.version;
            }

            var version = e.textEditor.document.version;
            var wasTyping = isTyping;
            isTyping = ( version != lastVersion );
            if( lastVersion && !wasTyping && isTyping )
            {
                banish();
            }
            else
            {
                wasTyping = false;
            }

            lastVersion = version;
        }
    }

    vscode.window.onDidChangeTextEditorSelection( checkForTyping );
}

exports.activate = activate;

function deactivate()
{
}
exports.deactivate = deactivate;
