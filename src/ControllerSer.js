"use strict";
exports.__esModule = true;
var Ser_1 = require("./Ser");
var fs = require('fs');
var ControllerSer = /** @class */ (function () {
    function ControllerSer() {
        var _this = this;
        this.serList = new Array();
        var jsonData = require('./array.json');
        if (jsonData) {
            jsonData.forEach(function (element) {
                _this.serList.push(new Ser_1.Ser(element.id, element.nome));
            });
        }
    }
    ControllerSer.prototype.createSer = function (id, nome) {
        if (!this.serList.some(function (e) { return e.getId() == id; })) {
            var aux = new Ser_1.Ser(id, nome);
            this.serList.push(aux);
        }
    };
    ControllerSer.prototype.deleteSer = function (id) {
        this.serList = this.serList.filter(function (e) { return e.getId() != id; });
    };
    ControllerSer.prototype.updateSer = function (id, nome) {
        this.serList.forEach(function (element) {
            if (element.getId() == id) {
                element.setNome(nome);
            }
        });
    };
    ControllerSer.prototype.readAll = function () {
        return this.serList;
    };
    ControllerSer.prototype.readOne = function (id) {
        for (var i = 0; i < this.serList.length; i++) {
            if (this.serList[i].getId() == id) {
                return this.serList[i];
            }
        }
        return null;
    };
    ControllerSer.prototype.saveAll = function () {
        var data = JSON.stringify(this.serList, null, 2);
        fs.writeFileSync('array.json', data);
    };
    return ControllerSer;
}());
exports.ControllerSer = ControllerSer;
