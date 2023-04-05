console.log('Starting . . .')
const { spawn: spawn } = require('child_process')
const path = require('path')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
process.on('uncaughtException', console.error)

var isRunning = false;
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start() {
	let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
	let p = spawn(process.argv[0], args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] })
	.on('message', data => {
		if (data == 'reset') {
			console.log('Restarting...')
			p.kill()
			delete p
		}
	})
	.on('exit', code => {
		console.error('Exited with code:', code)
		start()
	})
}

start();
