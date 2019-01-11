"use strict";
exports.__esModule = true;
var ControllerSer_1 = require("./ControllerSer");
var readline = require('readline');
var main = /** @class */ (function () {
    function main() {
    }
    main.exec = function () {
        var reader = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        var controller = new ControllerSer_1.ControllerSer();
        console.log("c - create \n u - update \n d - delete \n 1 - read one \n a - read all \n f - fim \n");
        var opcao = reader.on('line', function (input) {
            return input.trim();
        });
        switch (opcao) {
            case "c":
                console.log("c");
                break;
            case "u":
                break;
            case "d":
                break;
            case "a":
                console.log(controller.readAll);
                break;
            case "1":
                break;
            case "f":
                controller.saveAll();
                break;
        }
        console.log("c - create \n u - update \n d - delete \n 1 - read one \n a - read all \n f - fim \n");
    };
    return main;
}());
main.exec();
