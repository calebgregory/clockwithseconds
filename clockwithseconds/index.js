console.log('hello')

const CLOCK = document.querySelector('#clock')

function pad(n) {
  const s = '' + n
  return s.length < 2 ? `0${s}` : s
}

function time() {
  const d = new Date()
  return [d.getHours(), d.getMinutes(), d.getSeconds()].map(pad).join(':')
}

function time_until_beginning_of_next_second() {
  const now = new Date()
  return 1000 - now.getMilliseconds()
}

function draw_clock() {
  CLOCK.innerText = time()
}

draw_clock()

setTimeout(() => {
  setInterval(draw_clock, 1000)
}, time_until_beginning_of_next_second())
