export interface INotification {
    Send(message:string): void
}

export class BaseNotification implements INotification {
    public Send(message: string): void {
        console.log(message)
    }
}

export abstract class NotificationDecorator implements INotification {
    protected notifier: INotification

    constructor(notifier: INotification) {
        this.notifier = notifier
    }

    public Send(message: string): void {
        this.notifier.Send(message)
    }
}

export class EmailDecorator extends NotificationDecorator  {
    public Send(message: string): void {
        super.Send("Enviar E-mail...")
        console.log(message + '\n')
    }
}

export class SMSDecorator extends NotificationDecorator {
    public Send(message: string): void {
        super.Send("Enviar SMS...")
        console.log(message + '\n')
    }
}

export class PushDecorator extends NotificationDecorator {
    public Send(message: string): void {
        super.Send("Enviar PUSH...")
        console.log(message + '\n')
    }
}