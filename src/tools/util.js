export function getRedirectPath({type, avatar}) {
  console.log('util-type',type);
  console.log('util-avatar',avatar)
  // 根据用户信息，返回跳转地址
  // user.type /boss /genius
  // user.avatar /bossinfo /geniusinfo
  let url = (type==='boss')? '/boss': '/genius'
  if (!avatar) {
    url += 'info'
  }
  return url
}


export function getChatId( userId, targetId) {
  return [userId, targetId].sort().join('_')
}