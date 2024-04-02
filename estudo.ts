//é uma linguagem de programação, nada mais é que o javascript com ferramentas a mais.
// essas ferramentas são: "tipagem estatica" onde vamos deixar explicito qual deve ser um tipo de dado em um 
//determinado momento.

//let idade: number = 22

//idade = 30 //Ex: "30" em formato de string daria um erro pois , o ts idica que é uma váriavel do tipo number.

//function mostrarNome(nome: string){
 //   alert('paulo')
//}

//mostrarNome('Paulo')//o ts está mostrando que o tipo é uma string.


//tipo
//type para criar um novo tipo ou podemos atribuir diretamente 
//no nosso dado

// diretamente no dado , type , boolean ,number ,array...
// array ex: const string[] = ['Paulo', 'andressa'].
// sempre colocar antes dos colchetes a tipagem.
// outra maneira de tipar um array , ex: const array<istring> = ['Paulo', 'andressa']
// tuple vai servir para tiparmos um array com tipos de dados diferentes
// ex: const [string,number,boolean] = ['Daniel',3,false]
//null e undefined.
// objetc , ex:

//const pessoa: pessoa ={
  //  nome:'paulo',
   // cidade: 'fortaleza',
    //idade: 22
//}

//type pessoa = {
 //   nome: string,
 //   cidade: string,
 //   idade: 22
//}

//enum conjunto de chave e valor para facilitar nossa organização e a escrita do código.
//enum cores {
   // WHAITE = '#fff',
   // BLACK = '#000',
  //  GRAY = '#f2f2f2'
//}

//cores.GRAY

//normalmente usado para evitar erro de escrita.
// any = qualquercoisa = não aconselhavel.
// vold = para tipar funcinções sem retorno.

//interfaces 

//por padrão o navegador não entende typescript so entendem js , é ai que vão
// entrar os compiladores.
// interfaces = outra maneira de tipar um objeto.

//interface endereco {
    //cidade: string
  //  estado: string
//}

//interface pessoa {
  //  nome: string,
    //idade: number,
    //endereco: endereco
//}

//let pessoa: pessoa = {
    //nome: 'Paulo',
    //idade: 22,
    //endereco:{
      //  cidade: 'Fortaleza',
    //    estado: 'CE'
  //  }
//}

// union = inica que um determinado dado é de um tipo ou de outro tipo.

//interface ocupacao{
    //trabalho: string,
  //  local: string
//}

//interface pessoa{
//name: String,
//idade: number,
//cidade: string
//}

//const pessoa: pessoa | ocupacao = {
    //name:'paulo',
    //idade: 22,
  //  cidade: 'fortaleza'
//}

//type dados = ocupacao & pessoa

//const pessoa: dados = {
    //name:'paulo',
    //idade: 22,
    //cidade: 'fortaleza',
    //trabalho: 'programador',
  //  local: 'remoto'
//}

// aliases serve para unir e union para dizer é esse ou ese dado.
// para indicar que é opcional ele pode ou não estar dentro do objeto , basta colocar um '?'.

// redes e protocolos = uma rede é dispositivos computadores , celulares interconectados trocando informações e recursos.
// protocolo é uma regra de comunicação de troca de informações.
//hub tem o poder de unir vários dispositivos a uma rede o switch também a diferença é que o switch consegue indentificar cada computador em sua rede.
//o roteador uni e além de conectar e permintir a conecção ele também da um número de IP a cada dispositivo.

//osi , tcp ip são dois odelos de padrinização de comunicaçãoem uma rede.

//sistemas de internet 