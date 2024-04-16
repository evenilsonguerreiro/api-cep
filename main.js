const INPUT_CEP = document.getElementById('cep')
const INPUT_LOGRADOURO = document.getElementById('logradouro')
const INPUT_BAIRRO = document.getElementById('bairro')
const INPUT_CIDADE = document.getElementById('cidade')
const INPUT_UF = document.getElementById('uf')
const ERRO = document.querySelector('.erro')




INPUT_CEP.addEventListener('blur', () => {

     let cep = INPUT_CEP.value

     if(cep.length !== 8){
        alert('cep icorreto')
     }

     fetch(`https://viacep.com.br/ws/${cep}/json/`)
     .then(Response => Response.json())
     .then(json => {
        INPUT_LOGRADOURO.value = json.logradouro
        INPUT_BAIRRO.value = json.bairro
        INPUT_CIDADE.value = json.localidade
        INPUT_UF.value = json.uf
     })
})