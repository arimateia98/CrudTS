import {Ser} from './Ser';
const fs = require('fs');

class ControllerSer{
    private serList:Ser[];
    constructor(){
        this.serList = new Array()
        let jsonData = require('./array.json')
        if(jsonData){
            jsonData.forEach(element => {
                this.serList.push(new Ser(element.id,element.nome));
             });
        }
    }
    public createSer(id:number,nome:string):void{
        if(!this.serList.some(e => e.getId() == id)){
                var aux = new Ser(id,nome);
                this.serList.push(aux);
            }
    }

    public deleteSer(id:number):void{
        this.serList = this.serList.filter(e => e.getId() != id);
    }

    public updateSer(id:number,nome:string):void{
        this.serList.forEach(element => {
            if(element.getId() == id){
                element.setNome(nome);
            }
        });
    }

    public readAll():Ser[]{
        return this.serList;
    }

    public readOne(id:number):Ser{
        for(var i = 0;i < this.serList.length; i++){
            if(this.serList[i].getId() == id){
                return this.serList[i];
            }
        }
        return null;
    }

    public saveAll():void{
        var data = JSON.stringify(this.serList,null,2);
        fs.writeFileSync('array.json',data);
    }
}

export {ControllerSer}