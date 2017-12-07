module.exports = () => {
  const taskParams = ctx.task.getParams('fortest')

  ctx.logger.info(`task param t is ${taskParams.t}`)
}
