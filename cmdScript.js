const execSync = require('child_process').execSync;
const unit1Array = require("./unit1.json")
const encode = { encoding: 'utf-8' }

// const x = execSync('git clone git@git.generalassemb.ly:seir-1213/intro-to-python.git', encode)
for(let i = 0; i < unit1Array.length; i++){
    let x = execSync(`git clone ${unit1Array[i]}`, encode)
    console.log(`The command: ${x}`)
}

// console.log('Output was:\n', output)
