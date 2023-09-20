"use client"
import { ChangeEvent ,useState } from 'react'
import { getLeadingCommentRanges } from 'typescript'



{/* tipo do array */}
type listType = {
  cpf: string
  name: string
  birthdate: string
}
export default function Home() {
  const [cpf , setCpf] = useState("")
  const [name , setName] = useState("")
  const [birthdate , setBirthdate] = useState("")

  const [list , setList] = useState<Array<listType>>([])

  function saveCpf(inputElement: ChangeEvent<HTMLInputElement>){
    setCpf(inputElement.target.value)

}

function saveName(inputElement: ChangeEvent<HTMLInputElement>){
  setName(inputElement.target.value)

}

function saveDate(inputElement: ChangeEvent<HTMLInputElement>){
  setBirthdate(inputElement.target.value)
 
}

{/* adiciando item na lista */}
function addTask() {

  {/* adicionando os itens que estão no array para a lista  */}
  list.push({
    cpf: cpf,
    name: name,
    birthdate: birthdate
    })

    {/* atualizando a lista com os novos cpf, name , birthdate */}
  setList([...list])

  {/* apagando o que estava escrito dentro dos inputs */}
  setCpf("")
  setName("")
  setBirthdate("")

}

  {/* apagando o que estava escrito dentro dos inputs 2 */}
function reset() {

  setCpf("")
  setName("")
  setBirthdate("")

}

{/* removendo item da lista */}
function remove(index:number) {
      
  {/* criando um array temporario com a lista */}
  let tempArray = [...list] 
  {/* pegando qual é o item da lista e do lado direito escolhendo a quantidade que sera removida */}
  tempArray.splice(index,1)

  {/* e por ultimo passando o array temporario sem o item que foi removido para a lista original */}
  setList(tempArray)
}


  return (



    <main >

      {/* corpo site */}
      <div className='container'>


    {/* site topo */}
    <div className='dados'>

    <div className='dadosInputs'>

    <div>CPF : <input type="text" value={cpf} onChange={saveCpf}/></div> 
    <br />
    <div>Name : <input type="text" value={name} onChange={saveName}/></div> 
<br />
    <div>Birthdate : <input type="date" value={birthdate} onChange={saveDate}/></div> 
<br />
    </div>  

    {/* button topo */}
    <div className='dadosButtons'>
<br></br>
    <button className='reset' onClick={reset}>🔄</button>
    <button className='add' onClick={addTask}>➕</button>
    </div>  

    </div>

  {/* pesquisar */}
    <div className='filter'>

      Filter : <input type='text'/>

      <button className='filterButton'>🔍</button>

    </div>

    {/* topo lista */}
    <div className='list'>

      <div className='topList'>

        <div className='cpfTitle'>CPF</div>
        
        <div className='nameTitle'>Name</div>

        <div className='birthdateTitle'>Birthdate</div>

        <div className='actionsTitle'>Actions</div>
      </div>

    {/* itens lista */}
    

    {list.map((listItem, index) =>
    <div className='itemList'>

      <div className='cpf'>{listItem.cpf}</div>

      <div className='name'>{listItem.name}</div>

      <div className='birthdate'>{listItem.birthdate.toString()}</div>


      <div className='actions'>

        <button className='update' >update</button>

        <button className='delte' onClick={() => remove(index)}>delete</button>

      </div>


    </div>

    )}

    </div>



    </div>


    </main>
  )
}
