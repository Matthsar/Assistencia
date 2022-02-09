function jj(num, size) {
  var s = num
  while (s.length < size);
  return s
}
var ultimasSenhas = []
jQuery(document).ready(function ($) {
  $('body').on('keydown', function (e) {
    var senhaAtual = $('#senhaAtualNumero')
    var senhaNormal = $('#senhaNormal')
    var senhaPrior = $('#senhaPrioridade')
    var ultimaSenha = $('#ultimaSenhaNumero')
    var ultimaSenha2 = $('#ultimaSenhaNumero2')
    var ultimaSenha3 = $('#ultimaSenhaNumero3')
    var ultimaSenha4 = $('#ultimaSenhaNumero4')
    var audioChamada = $('#audioChamada')

    //Codigo da Senha Normal
    if (e.keyCode == 39) {
      /* Seta direita */ ultimasSenhas.push(senhaAtual.html())

      ultimaSenha.html(senhaAtual.html())
      ultimaSenha2.html(
        ultimasSenhas.slice(ultimasSenhas.length - 2, ultimasSenhas.length - 1)
      )
      ultimaSenha3.html(
        ultimasSenhas.slice(ultimasSenhas.length - 3, ultimasSenhas.length - 2)
      )
      ultimaSenha4.html(
        ultimasSenhas.slice(ultimasSenhas.length - 4, ultimasSenhas.length - 3)
      )

      senha = parseInt(senhaNormal.val()) + 1
      senhaAtual.html(jj('AB-' + senha, 3))
      senhaNormal.val(jj(senha, 3))
      audioChamada.trigger('play')
    }

    //Codigo Para Chamar Novamente

    if (e.keyCode == 37) {
      /* Seta esquerda */
      //   ultimasSenhas.push(senhaAtual.html())

      //   ultimaSenha.html(senhaAtual.html())
      //   ultimaSenha2.html(
      //     ultimasSenhas.slice(ultimasSenhas.length - 2, ultimasSenhas.length - 1)
      //   )
      //   ultimaSenha3.html(
      //     ultimasSenhas.slice(ultimasSenhas.length - 3, ultimasSenhas.length - 2)
      //   )
      //   ultimaSenha4.html(
      //     ultimasSenhas.slice(ultimasSenhas.length - 4, ultimasSenhas.length - 3)
      //   )

      if (senha != 0 && senha > 0) {
        senha = parseInt(senhaNormal.val()) - 1
      }

      senhaAtual.html(jj('AB-' + senha, 3))
      senhaNormal.val(jj(senha, 3))

      audioChamada.trigger('play')
      senha = 0
    }

    // Chamada generica que vai so tocar o audio
    if (e.keyCode == 13) {
      audioChamada.trigger('play')
    }

    //Codigo da Senha prioridade

    if (e.keyCode == 38) {
      /* Seta Up */ ultimasSenhas.push(senhaAtual.html())

      ultimaSenha.html(senhaAtual.html())
      ultimaSenha2.html(
        ultimasSenhas.slice(ultimasSenhas.length - 2, ultimasSenhas.length - 1)
      )
      ultimaSenha3.html(
        ultimasSenhas.slice(ultimasSenhas.length - 3, ultimasSenhas.length - 2)
      )
      ultimaSenha4.html(
        ultimasSenhas.slice(ultimasSenhas.length - 4, ultimasSenhas.length - 3)
      )

      senha = parseInt(senhaPrior.val().replace('P', '')) + 1
      senhaAtual.html('PAB-' + jj(senha, 1))
      senhaPrior.val(jj(senha, 1))
      audioChamada.trigger('play')
    }

    //Codigo para voltar senha prioridade anterior

    if (e.keyCode == 40) {
      /* tecla S */
      if (senha != 0 && senha > 0) {
        senha = parseInt(senhaPrior.val().replace('P', '')) - 1
      }
      senhaAtual.html('PAB-' + jj(senha, 3))
      senhaPrior.val(jj(senha, 3))
      senha = 0
    }
  })
})
