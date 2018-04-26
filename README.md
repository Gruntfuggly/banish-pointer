# Banish Pointer

Moves the pointer a small distance away when you start typing.

_Note: Current only works for Windows._

## TODO

 - [ ] Support other platforms by default
 - [ ] Allow other tools to be used to do something with the pointer, e.g. xbanish

## Installing

You can install the latest version of the extension via the Visual Studio Marketplace [here](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.banish-pointer).

Alternatively, open Visual Studio code, press `Ctrl+P` or `Cmd+P` and type:

    > ext install banish-pointer

### Source Code

The source code is available on GitHub [here](https://github.com/Gruntfuggly/banish-pointer).

## Configuration

`banishPointer.action`

Defaults to "moveBy -30x-30" which moves the mouse 30 pixels up and to the left. You can also use "moveTo" which will move the mouse to an absolute position.

## Credits

Uses a neat [script](https://github.com/npocmaka/batch.scripts/blob/master/hybrids/.net/c/mouse.bat) by Vasil Arnaudov to move the mouse in Windows.

