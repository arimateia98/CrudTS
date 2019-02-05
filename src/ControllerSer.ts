import {Ser} from './Ser';
const fs = require('fs');
const R = require('ramda');
const jsonPath = './files/array.json'

class ControllerSer{
    private serList:Ser[];
    teste;
    constructor(){
        this.serList = [];
        let data;
        if(fs.existsSync(jsonPath)){
            data = JSON.parse(fs.readFileSync(jsonPath,'utf-8'));
            this.addAllSer(data);
        }else{
            data = JSON.stringify(this.serList)
            fs.writeFileSync(jsonPath,data);
        }
    }

    public createSer(id:number,nome:string):void{
        if(!this.contains(id)){
                let aux = new Ser(id,nome);
                this.serList.push(aux);
            }
    }

    public deleteSer = R.pipe(
        this.search,
        this.delete
    )

    public addAllSer(data){
        data.forEach(e => {
            this.serList.push(new Ser(e.id,e.nome));
        })
    }

    public updateSer(id:number,nome:string):void{
        let auxSer:Ser = R.find(R.propEq('id', id))(this.serList)
        if(auxSer != undefined){
            auxSer.setNome(nome);
        }
    }

    public readAll():Ser[]{
        return this.serList;
    }

    public contains(id:number):Boolean{
        return this.serList.some(e => e.getId() == id);
    }

    public readOne = R.pipe(
        this.search,
        this.returnSer
    )
 
    public delete(index:number):void{
        if(index != - 1 && index < this.serList.length){
            this.serList.splice(index,1);
        }
    }
    public returnSer(index:number):Ser{
        if(index != -1 && index < this.serList.length){
            return this.serList[index];
        }
        return null;
    }

    public saveAll():void{
        let data = JSON.stringify(this.serList,null,2);
        fs.writeFileSync(jsonPath,data);
    }

    public search(id:number):number{
        return R.findIndex(R.propEq('id',id))(this.serList);

    }
}

export{ControllerSer};

