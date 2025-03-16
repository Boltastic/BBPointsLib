function createAccount(user) {
    if (!Bot.getProperty(user)) {
        Bot.setProperty(user, 0, 'integer');
        Bot.sendMessage(user + " account created with 0 BB Points.");
    } else {
        Bot.sendMessage(user + " already has an account.");
    }
}

function checkBalance(user) {
    let balance = Bot.getProperty(user, "User does not exist!");
    Bot.sendMessage(user + " has " + balance + " BB Points.");
}

function sendPoints(sender, receiver, amount) {
    let senderBalance = Bot.getProperty(sender, 0);
    let receiverBalance = Bot.getProperty(receiver, 0);

    if (senderBalance < amount) {
        Bot.sendMessage(sender + " does not have enough BB Points.");
        return;
    }

    Bot.setProperty(sender, senderBalance - amount, 'integer');
    Bot.setProperty(receiver, receiverBalance + amount, 'integer');
    Bot.sendMessage(sender + " sent " + amount + " BB Points to " + receiver + ".");
}

// Publish functions for bot usage
publish({
    createAccount: createAccount,
    checkBalance: checkBalance,
    sendPoints: sendPoints
});

