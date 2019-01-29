"use strict";
var Carro = /** @class */ (function () {
    function Carro() {
        this.velocidad = 0;
    }
    Carro.prototype.getColor = function () {
        return this.color;
    };
    Carro.prototype.setColor = function (color) {
        this.color = color;
    };
    Carro.prototype.acelerar = function () {
        this.velocidad++;
    };
    Carro.prototype.frenar = function () {
        this.velocidad--;
    };
    Carro.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Carro;
}());
var carro = new Carro();
var carro_dos = new Carro();
var carro_tres = new Carro();
carro.setColor("ROJO");
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro_dos.setColor("AZUL");
carro_tres.setColor("VERDE");
console.log("la velocidad del carro 1 es: " + carro.getVelocidad());
/*
console.log("El color de Carro 1 es: " +carro.getColor());
console.log("El color de Carro 1 es: " +carro_dos.getColor());
console.log("El color de Carro 1 es: " +carro_tres.getColor());
*/ 
