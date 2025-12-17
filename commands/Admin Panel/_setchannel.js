/*CMD
  command: /setchannel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 😇 *Send Your Channel @Username For Get Notifications :*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ad = Bot.getProperty("8157659236")
if (user.telegramid == 8157659236) {
  Bot.setProperty("Chan", message)
  Bot.sendMessage("*Done*") 
} else {
  Bot.sendMessage("")
}

