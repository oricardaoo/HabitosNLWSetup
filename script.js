const form = document.querySelector('#form-habits') // puxa as infos do formulário habits
const nlwSetup = new NLWSetup(form)  // carrega as infos da lib - section form
const button = document.querySelector('header button') //seleciona o button do topo da página

button.addEventListener('click', add) // executa o evento de click do botão do topo e salva na memória 
form.addEventListener('change', save) // executa a function que salva as mudanças do formulário 

//funtion de criar ou não um dia na rotina
function add() {
    //cria uma nova data   -    transforma em pt-br     -  muda o formato de apresentação
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5) 
    // utiliza a lib para adicionar ou não um dia a rotina
    const dayExists = nlwSetup.dayExists(today)
    // adiciona o dia apenas se ele não existir
    if(dayExists) {
        alert('🤚🏼 Dia já incluso! 🤚🏼')
        return
    }
    // se o dia não existir ele é adicionado
    nlwSetup.addDay(today)
}

// salva as mudanças feitas na rotina no storage do navegador
function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  }
 
// se existir uma informação carregada ele mostrará, senão começa uma do zero
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
// carrega as informações armazenadas
nlwSetup.load()


document.querySelector('.ball').addEventListener('click', (e)=>{
    e.target.classList.toggle('ball-move');
    document.body.classList.toggle('white');
});
