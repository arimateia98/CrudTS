"use strict";
exports.__esModule = true;
var Ser = /** @class */ (function () {
    function Ser(_id, _nome) {
        this.id = _id;
        this.nome = _nome;
    }
    Ser.prototype.greet = function () {
        console.log("E ae moral");
    };
    Ser.prototype.getNome = function () {
        return this.nome;
    };
    Ser.prototype.getId = function () {
        return this.id;
    };
    Ser.prototype.setNome = function (_nome) {
        this.nome = _nome;
    };
    return Ser;
}());
exports.Ser = Ser;
