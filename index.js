'use strict'; 
var chalk = require( 'chalk' )
	,Logger = {
		success:function(msg) {
			console.log(chalk.green.bold('OK: '), msg);
		},
		error:function(msg) {
			console.log(chalk.red.bold('Error: '), msg);
		},
		warning:function(msg) {
			console.log(chalk.yellow.bold('Warning: '), msg);
		},
		info:function(msg) {
			console.log(chalk.blue.bold('Info:'), msg);
		}
	}; 

Logger.success('Logger working!');
Logger.error('Logger NOT working!');
Logger.warning('Logger has problem!');
Logger.info('Logger OK!');
