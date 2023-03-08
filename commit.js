const execSync = require('child_process').execSync;
const encode = { encoding: 'utf-8' }
const fs = require('fs');
let year = 2022
let month = 8;
let day = 1 
while( year !== 2023 && month !== 3 && day !== 8){
    if(day === 30){
        month++
    }
    if(month == 12 && day == 30){
        month = 1 
        day = 1
        year = 2023
    }
    fs.appendFile(`garbo.txt`, "foo", function (err)  {
        if (err) console.log("error while creating file", err);
    })
    execSync(`git add garbo.txt"`, {encoding: "utf-8"})
    if(month > 9){
        execSync(`git commit --date='${year}-${month}-0${day}' -m "test"`, {encoding: "utf-8"})
        execSync(`git push origin`, {encoding: "utf-8"})
        fs.unlink("garbo.txt", (err) => {
            if (err) console.log("error while creating file", err);
        })
        execSync(`git add garbo.txt`, {encoding: "utf-8"})
        execSync(`git push origin`, {encoding: "utf-8"})
    } else if (day > 9){
        execSync(`git commit --date='${year}-0${month}-${day}' -m "test"`, {encoding: "utf-8"})
        execSync(`git push origin`, {encoding: "utf-8"})
        fs.unlink("garbo.txt", (err) => {
            if (err) console.log("error while creating file", err);
        })
        execSync(`git add garbo.txt`, {encoding: "utf-8"})
        execSync(`git push origin`, {encoding: "utf-8"})
    } else if (day > 9 && month > 9){
        execSync(`git commit --date='${year}-${month}-${day}' -m "test"`, {encoding: "utf-8"})
        execSync(`git push origin`, {encoding: "utf-8"})
        fs.unlink("garbo.txt", (err) => {
            if (err) console.log("error while creating file", err);
        })
        execSync(`git add garbo.txt`, {encoding: "utf-8"})
        execSync(`git push origin`, {encoding: "utf-8"})
    } else {
        execSync(`git commit --date='${year}-0${month}-0${day}' -m "test"`, {encoding: "utf-8"})
        execSync(`git push origin`, {encoding: "utf-8"})
        fs.unlink("garbo.txt", (err) => {
            if (err) console.log("error while creating file", err);
        })
        execSync(`git add garbo.txt`, {encoding: "utf-8"})
        execSync(`git push origin`, {encoding: "utf-8"})
    }
    
    day++
}
