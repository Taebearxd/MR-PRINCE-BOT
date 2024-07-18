let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`🦢̼ࣳ 𝐆𝗋ⱺυρ : *${groupMetadata.subject}*\n𝄳ꨪ🎀̸̷ 𝐌𝖾ꭑᑲ𝖾𝗋𝗌 : *${participants.length}*${text ? `\n˖᰷🍶̸໋˖۫ 𝐌𝖾𝗌𝗌α𝗀𝖾 : ${text}\n` : ''}\n╭┄┅┄┅ *𝐌𝖾𐓣𝗍𝗂ⱺ𐓣𝗌*\n` + users.map(v => '░⃝᜔🧸᜔ֺ @' + v.replace(/@.+/, '')).join`\n` + '\n╼ֺ꤫╾۟╾ִ╼ֺ 𐀔 ֺ╾ִ╼۟╼ֺ╾꤫', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
