/*CMD
  command: /giftcard
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 📥 SEND THE AMOUNT

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("8157659236")
let cur = Bot.getProperty("cur")

if (user.telegramid == 8157659236) {
  if (data.message < 0.1) {
    Bot.sendMessage("*MINIMUM GIFT CARD AMOUNT IS 1 " + cur + "*")
  } else {
    var value = message
    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    }
    if (!isNumeric(value)) {
      Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*")
    } else {
      let gift = User.getProperty("gift")
      User.setProperty("gift", data.message, "string")

      Bot.runCommand("GIFT#2004")
    }
  }
} else {
  Bot.sendMessage("Oh. Error happened 😢.\n Bug report was sent")
}

