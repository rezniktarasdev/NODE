const {exec} = require('child_process');
const { stdout, stderr } = require('process');

const childProcess = exec('dir', (err, stdout, stderr) => {
    if(err) {
        console.error(err.message)
    }
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
});

childProcess.on('exit', (code) => {
    console.log(`Код процесса: ${code}` )
})