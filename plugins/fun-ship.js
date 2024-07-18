let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = m.sender
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`${toM(a)} ❤️ ${toM(b)}\n𝐂ⱺ𐓣𝗀𝗋α𝗍υᥣα𝗍𝗂ⱺ𐓣𝗌 !! 𝐍ⱺω ꭑα𝗄𝖾 𝗄𝗂ᑯ𝗌 👩🏻‍❤️‍💋‍👨🏻👶🏻`, null, {
        mentions: [a, b]
    })
}
handler.help = ['ship']
handler.tags = ['fun']
handler.command = ['ship']

handler.group = true

export default handler  
