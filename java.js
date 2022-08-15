let xis = 0
let textprin
let textbe
let textsob
let precprin
let precbe
let precsob
function greened(a, b, c) {
  const z = a
  const classup = document.querySelectorAll(b)
  for (const zipzip of classup) {
    if (zipzip.classList.length > 1) {
      zipzip.classList.remove('javafun')
      xis = xis - 1
    }
  }

  z.classList.toggle('javafun')
  xis = xis + 1
  const fisese = document.querySelector('.lowlow a')
  if (xis == 3) {
    fisese.classList.add('javafun')
    fisese.innerHTML = 'Fechar pedido'
  }
  const textolo = document.querySelector(b + '.iten.javafun h2')
  const prec = document.querySelector(b + '.iten.javafun h3')
  if (b == '.itens1 div') {
    textprin = textolo.innerHTML
    precprin = Number(c)
  }
  if (b == '.itens2 div') {
    textbe = textolo.innerHTML
    precbe = Number(c)
  }
  if (b == '.itens3 div') {
    textsob = textolo.innerHTML
    precsob = Number(c)
  }
}
function menuuu() {
  const menuend = document.querySelector('.menuresum')
  menuend.classList.add('javafun')
  document.querySelector('.princ p').innerHTML = textprin
  document.querySelector('.princ span').innerHTML = String(
    precprin.toFixed(2)
  ).replace('.', ',')
  document.querySelector('.beb p').innerHTML = textbe
  document.querySelector('.beb span').innerHTML = String(
    precbe.toFixed(2)
  ).replace('.', ',')
  document.querySelector('.sob p').innerHTML = textsob
  document.querySelector('.sob span').innerHTML = String(
    precsob.toFixed(2)
  ).replace('.', ',')
  document.querySelector('.price span').innerHTML =
    'R$ ' + String((precprin + precbe + precsob).toFixed(2)).replace('.', ',')
}
function zapzap() {
  if (xis == 3) {
    let namer = prompt('Qual é seu nome?')
    let homer = prompt('Qual é seu endereço?')
    let textow = `Olá, gostaria de fazer o pedido:\n- Prato: ${textprin}\n- Bebida: ${textbe} \n- Sobremesa: ${textsob}\nTotal: R$ ${(
      precprin +
      precbe +
      precsob
    ).toFixed(2)}\n\nNome: ${namer}\nEndereço: ${homer}`
    console.log(textow)
    let celular = '554891564265'

    textow = encodeURIComponent(textow)

    window.open(
      'https://api.whatsapp.com/send?phone=' + celular + '&text=' + textow,
      '_blank'
    )
  }
}

function cancelmenu() {
  const menuend = document.querySelector('.menuresum')
  menuend.classList.remove('javafun')
}
