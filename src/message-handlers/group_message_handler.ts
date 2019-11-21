import { ContextMessageUpdate } from 'telegraf'

function createPoll(ctx: ContextMessageUpdate, message: string) {
    ctx.reply('')
}

const groupMessageHandler = (ctx: ContextMessageUpdate) => {
    const message = ctx.message.text.trim()
    if (message.startsWith('/poll-create')) {
        createPoll(ctx, message)
    } else if (message.startsWith('/poll-end')) {
        createPoll(ctx, message)
    }
}

export default groupMessageHandler