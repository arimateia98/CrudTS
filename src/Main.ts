import {ControllerSer} from './ControllerSer';
const readline = require('readline');

class main{
    static exec(){
        var reader = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        var controller = new ControllerSer();
        console.log("c - create \n u - update \n d - delete \n 1 - read one \n a - read all \n f - fim \n");
        var opcao:string ;
        switch(opcao){
                case "c":
                    console.log("c")
                    break;
                case "u":
                    break;
                case "d":
                    break;
                case "a":
                    console.log(controller.readAll());
                    break
                case "1":
                    break
                case "f":
                    controller.saveAll();
                    break;
                    
        }
        console.log("c - create \n u - update \n d - delete \n 1 - read one \n a - read all \n f - fim \n");
    }
}

main.exec();

