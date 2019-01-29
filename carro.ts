class Carro{
    public color: string;
    public modelo: string;
    public velocidad: number = 0;

    public getColor(){
        return this.color;
    }

    public setColor(color: string){
        this.color = color;
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--
    }

    public getVelocidad():number{
        return this.velocidad
    }

}

var carro = new Carro();
var carro_dos = new Carro();
var carro_tres = new Carro();

carro.setColor("ROJO");
carro.acelerar();
carro.acelerar();
carro.acelerar();

carro_dos.setColor("AZUL");
carro_tres.setColor("VERDE");

console.log("la velocidad del carro 1 es: " +carro.getVelocidad());

/*
console.log("El color de Carro 1 es: " +carro.getColor());
console.log("El color de Carro 1 es: " +carro_dos.getColor());
console.log("El color de Carro 1 es: " +carro_tres.getColor());
*/