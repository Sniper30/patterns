


interface Vehicle {
    assembly():void
}

interface Engine {
    start(): void
}

class ElectricCar implements Vehicle {
    assembly(): void {
        console.log("assembly an electric car");
    }
}

class GasCar implements Vehicle {
    assembly(): void {
        console.log("assembling a gas car");
    }
}

class ElectricEngine implements Engine{
    start(): void {
        console.log("starting a electric engine");
    }
}

class GasEngine implements Engine{
    start(): void {
        console.log("starting a gas car");
    }
}

interface Vehicle_Engine_Factory {
    createVehicle(): Vehicle;
    createEngine(): Engine;
}

class MazdaGasFactory implements Vehicle_Engine_Factory {
    createVehicle(): Vehicle {
        return new GasCar();
    }
    createEngine(): Engine {
        return new GasEngine();
    }
}

class MazdaElectricFactory implements Vehicle_Engine_Factory {
    createVehicle(): Vehicle {
        return new ElectricCar();
    }
    createEngine(): Engine {
        return new ElectricEngine();
    }
}



function main(){

    let factory_vehicle:  Vehicle_Engine_Factory | undefined;

    const type = prompt("what type of car you going to build ? (electric/gas)");
    if(type === "e") factory_vehicle = new MazdaElectricFactory();
    if(type === "g") factory_vehicle = new MazdaGasFactory();
    if(factory_vehicle){
        factory_vehicle.createVehicle().assembly()
        factory_vehicle.createEngine().start();
    }
}

main();