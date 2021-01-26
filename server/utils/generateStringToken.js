const generateStringToken = (length) => {
    let text = ""
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for (let i = 0; i < length; i++) {
        text += alpha.charAt(Math.floor(Math.random()*alpha.length))
    }

    return text
}

module.exports = generateStringToken