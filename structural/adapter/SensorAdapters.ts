import { SensorA, SensorB, SensorC } from "./Sensors"

export interface ITemperatureSensor {
    ReadTemperature(): number
}

export class SensorAdapterA implements ITemperatureSensor {
    private sensor: SensorA

    constructor() {
       this.sensor = new SensorA();
    }

    public ReadTemperature(): number {
        return this.sensor.GetTemperatureInCelsius();
    }
}

export class SensorAdapterB implements ITemperatureSensor {
    private sensor: SensorB

    constructor() {
       this.sensor = new SensorB();
    }

    public ReadTemperature(): number {
        return this.sensor.ObtenerTemperaturaEnCentigrados();
    }
}

export class SensorAdapterC implements ITemperatureSensor {
    private sensor: SensorC

    constructor() {
       this.sensor = new SensorC();
    }

    public ReadTemperature(): number {
        return this.sensor.FetchTempC();
    }
}