export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `Powered by OpenAI Vercel
- 该预览页面域名由 [@AUDI_GUZZ](https://m.okjike.com/users/4af3cfb4-1291-4a8b-b210-f515c86934a9) 和 [@Airyland](https://m.okjike.com/users/C6C8DE3A-E89D-4978-9E7D-B2E167D835A9) 免费提供，感谢。API Key 由我自己免费提供，注意不要滥用。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
