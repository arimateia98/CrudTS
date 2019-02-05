import {ControllerSer} from './ControllerSer';
const readline = require('readline-sync');

class main{
    static exec(){
        var controller:ControllerSer = new ControllerSer();''
        var opcao:string = readline.question("c - create ser \n u - update ser \n d - delete ser \n a - read all ser \n 1 - read one ser \n e - end\n ");
        while(opcao != "e"){
            switch(opcao){
                case "c":
                    var id:number = readline.question("enter the id\n");
                    var name:string = readline.question("enter the name\n");
                    controller.createSer(id,name);
                    console.log("a new ser was created")
                    break;
                case "u":
                    var id:number = readline.question("enter the id\n");
                    var name:string = readline.question("enter the new name\n");
                    controller.updateSer(id,name);
                    console.log("ser with the ip: " + id + " updated")
                    break;
                case "d":
                    var id:number = readline.question("enter the id\n");
                    controller.deleteSer(id);
                    console.log("ser with the ip: " + id + " deleted");
                    break;
                case "a":
                    console.log(controller.readAll());
                    break
                case "1":
                    var id:number = readline.question("enter the id\n");
                    console.log(controller.readOne(id));
                    break
                
            }
            opcao = readline.question("c - create ser \n u - update ser \n d - delete ser \n a - read all ser \n 1 - read one ser \n e - end\n ");
        }
        controller.saveAll();
    }
}

main.exec();

