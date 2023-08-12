const CLOCK = document.querySelector('#clock')

function pad(n) {
  const s = '' + n
  return s.length < 2 ? `0${s}` : s
}

function time(date /* Date */) {
  return [date.getHours(), date.getMinutes(), date.getSeconds()].map(pad).join(':')
}

function time_until_beginning_of_next_second(now /* Date */) {
  return 1000 - now.getMilliseconds()
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function main(now) {
  CLOCK.innerText = time(now) // draw clock

  await wait(time_until_beginning_of_next_second(now))

  main(new Date())
}

main(new Date())
