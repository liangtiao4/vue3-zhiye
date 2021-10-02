// 获取格式为utc的当前时间
const currentTimeUTC = (): number => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDay()
  const hour = date.getHours()
  const min = date.getMinutes()
  const second = date.getSeconds()
  const currenttimeutc = Date.UTC(year, month, day, hour, min, second)
  return currenttimeutc
}

export { currentTimeUTC }
