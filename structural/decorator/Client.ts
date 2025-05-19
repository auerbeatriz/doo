import { BaseNotification, EmailDecorator, PushDecorator, SMSDecorator } from "./Decorators"

// Criando notificação simples
const base = new BaseNotification()
const email = new EmailDecorator(base)
const sms = new SMSDecorator(base)
const push = new PushDecorator(base)

// Notificações simples
console.log("** Notificações em canais específicos **\n")
email.Send("Seu pedido foi confirmado!")
sms.Send("Seu pedido foi confirmado!")
push.Send("Seu pedido foi confirmado!")

// Notificações compostas
const sms_email = new SMSDecorator(email)
const sms_push = new SMSDecorator(push)
const sms_email_push = new PushDecorator(sms_email)

console.log("** Notificações em canais compostos **\n")
sms_email.Send("Seu pedido foi confirmado!")
sms_push.Send("Seu pedido foi confirmado!")
sms_email_push.Send("Seu pedido foi confirmado!")