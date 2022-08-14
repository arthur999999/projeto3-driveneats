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

function zapzap() {
  if (xis == 3) {
    let textow = `Olá, gostaria de fazer o pedido:\n- Prato: ${textprin}\n- Bebida: ${textbe} \n- Sobremesa: ${textsob}\nTotal: R$ ${(
      precprin +
      precbe +
      precsob
    ).toFixed(2)}`
    let celular = '554891564265'

    textow = encodeURIComponent(textow)

    window.open(
      'https://api.whatsapp.com/send?phone=' + celular + '&text=' + textow,
      '_blank'
    )
  }
}
