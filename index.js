/* eslint no-console: 0 */
'use strict';
const chalk = require( 'chalk' ),
	Logger = {
		success: ( msg ) => {
			console.log( chalk.green.bold( 'OK: ' ), msg );
		},
		error: ( msg ) => {
			console.log( chalk.red.bold( 'Error: ' ), msg );
		},
		warning: ( msg ) => {
			console.log( chalk.yellow.bold( 'Warning: ' ), msg );
		},
		info: ( msg ) => {
			console.log( chalk.blue.bold( 'Info:' ), msg );
		}
	};

Logger.success( 'Logger working!' );
Logger.error( 'Logger NOT working!' );
Logger.warning( 'Logger has problem!' );
Logger.info( 'Logger OK!' );
