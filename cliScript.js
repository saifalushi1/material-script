//Import the execSync method from child_process module
const execSync = require('child_process').execSync;
//Import our json file that contains all of our urls 
const unit1Array = require("./unit1.json")
const unit2Array = require("./unit2.json")
const unit3Array = require("./unit3.json")
const unit4Array = require("./unit4.json")
const encode = { encoding: 'utf-8' }

//Here we want to run a for loop to iterate through our array of urls
const unit1 = () => {

    for(let i = 0; i < unit1Array.length; i++){
        //Within our for loop we simply call our execSync method 
        //with the arguments being the cli command we want to run and our encoding
        execSync(`git clone ${unit1Array[i]}`, encode)   
    }
}

const unit2 = () => {

    for(let i = 0; i < unit2Array.length; i++){
        execSync(`git clone ${unit2Array[i]}`, encode)   
    }
}

const unit3 = () => {

    for(let i = 0; i < unit3Array.length; i++){
        execSync(`git clone ${unit3Array[i]}`, encode)   
    }
}

const unit4 = () => {

    for(let i = 0; i < unit4Array.length; i++){
        execSync(`git clone ${unit4Array[i]}`, encode)   
    }
}

unit1()
unit2()
unit3()
unit4()
