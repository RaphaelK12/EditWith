// ****************************************************************************
// Run this script as "Administrator"

if ( WScript.Arguments.length == 0 )
{
	var objShell = WScript.CreateObject( "Shell.Application" );
	objShell.ShellExecute( "wscript.exe",
		'"' + WScript.ScriptFullName + '"' + " uac", "", "runas", 1 );
	WScript.Quit( 0 );
}

var WshShell = WScript.CreateObject( "WScript.Shell" );

MyDeleteKey(
	"HKCR\\*\\shell\\Open with Sublime Text 2\\command\\" );
MyDeleteKey(
	"HKCR\\*\\shell\\Open with Sublime Text 2\\" );

WScript.Quit( 0 );

// ****************************************************************************

function MyDeleteKey ( strKey )
{
	try { WshShell.RegDelete( strKey ); }
	catch ( err ) {}
}

// ****************************************************************************
