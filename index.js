const { rejects } = require('node:assert');
const { resolve } = require('node:path');
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  rl.close();
});


async function main() {
    try{
        let value = await new Promise( (resolve, rejects)=>{
            rl.question('What is your name?', (name) => {
                if (name === "pack"){
                    resolve(name);

                }
                else{
                    rejects("error");

                }
                rl.close();
            });
        });
        console.log('My name is   ${value}');
    }catch (e){
        console.log(e);
    }

    }
