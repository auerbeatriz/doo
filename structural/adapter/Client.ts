import { ITemperatureSensor, SensorAdapterA, SensorAdapterB, SensorAdapterC } from "./SensorAdapters"

export class Client {
    private sensorA: ITemperatureSensor
    private sensorB: ITemperatureSensor
    private sensorC: ITemperatureSensor

    constructor() {
        this.sensorA = new SensorAdapterA()
        this.sensorB = new SensorAdapterB()
        this.sensorC = new SensorAdapterC()
    }

    public readSensorA(): void {
        console.log(this.sensorA.ReadTemperature())
    }

    public readSensorB(): void {
        console.log(this.sensorB.ReadTemperature())
    }

    public readSensorC(): void {
        console.log(this.sensorC.ReadTemperature())
    }
}

const client = new Client();
client.readSensorA();
client.readSensorB();
client.readSensorC();