export class SensorA {
    public GetTemperatureInCelsius(): number {
        console.log("Sensor A")
        return Math.floor(Math.random() * 100)
    }
}

export class SensorB {
    public ObtenerTemperaturaEnCentigrados(): number {
        console.log("Sensor B")
        return Math.floor(Math.random() * 100)
    }
}

export class SensorC {
    public FetchTempC(): number {
        console.log("Sensor C")
        return Math.floor(Math.random() * 100)
    }
}