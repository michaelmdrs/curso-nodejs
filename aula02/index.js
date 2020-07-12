/**
 * 0 - Obter endereço usuário
 * 1 - Obter o número de telefone do usuario pelo Id
 * 2 - Obter o endereço do usuário pelo Id
 */

 function obterUsuario() {
    setTimeout(function () {
        return {
            id: 1,
            nome: 'Usuário',
            dataNascimento: new Date()
        }
    }, 1000)
 }

 function obterTelefone(idUsuario) {
    setTimeout(() => {
        telefone: '998198080',
        ddd: 84
    }, 2000);
 }

 function obterEndereco(idUsuario) {

 }

 const usuario = obterUsuario()
 const telefone = obterTelefone(usuario.id)

 console.log('usuario', usuario)
 console.log('telefone', telefone)