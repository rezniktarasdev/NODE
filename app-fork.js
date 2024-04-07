const {fork} = require('child_process');
const forkProcess = fork('fork.js')

forkProcess.on('message', (msg) => {
    console.log(`Coобщение ${msg}`)
})

forkProcess.on('close', (code) => {
    console.log(`Завершено  ${code}`)
})

forkProcess.send('Ping');
forkProcess.send('disconnect');