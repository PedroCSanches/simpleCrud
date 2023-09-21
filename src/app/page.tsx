"use client"
import { ChangeEvent ,useRef,useState } from 'react'
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

  const [filterText , setFilterText] = useState("")

  const [editIndex , setEditIndex] = useState<number>(-1)

  const nameRef = useRef<HTMLInputElement>(null)

  const [list , setList] = useState<Array<listType>>([])

  const [filteredList , setFilteredList] = useState<Array<listType>>([])

  function saveCpf(inputElement: ChangeEvent<HTMLInputElement>){
    setCpf(inputElement.target.value)

}

function saveName(inputElement: ChangeEvent<HTMLInputElement>){
  setName(inputElement.target.value)

}

function saveDate(inputElement: ChangeEvent<HTMLInputElement>){
  setBirthdate(inputElement.target.value)
 
}

function saveFilter(inputElement: ChangeEvent<HTMLInputElement>){
  setFilterText(inputElement.target.value)
 
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
  reset()
  nameRef.current?.focus()

  setFilteredList(list)
  setEditIndex(-1)
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
  setFilteredList(tempArray)
}


function edit(index:number) {

  setEditIndex(index)

  setCpf(list[index].cpf)
  setName(list[index].name)
  setBirthdate(list[index].birthdate)

}

function saveEdit() {
  list[editIndex].cpf = cpf
  list[editIndex].name = name
  list[editIndex].birthdate = birthdate

  setList([...list])
  setFilteredList(list)
  setEditIndex(-1)
  reset()
}


function onFilter() {
  const filteredList = list.filter((item) => item.name.includes(filterText))
  setFilteredList(filteredList)
  console.log(filteredList)
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
    <div>Birthdate : <input type="date" value={birthdate} onChange={saveDate}/></div>
    <div>Name : <input type="text" ref={nameRef} value={name} onChange={saveName}/></div> 
<br />
     
<br />
    </div>  

    {/* button topo */}
    <div className='dadosButtons'>

    <button className='reset' onClick={reset}>🔄</button>
    {editIndex == -1 &&<button className='add' onClick={addTask}>+</button>}
    {editIndex > -1 && <button className='add' onClick={saveEdit}>edit</button>}
    </div>  

    </div>

  {/* pesquisar */}
    <div className='filter'>

      Filter : <input type='text' value={filterText} onChange={saveFilter}/>

      <button className='filterButton' onClick={onFilter}>🔍</button>

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
    

    {filteredList.map((listItem, index) =>
    <div key={index} className='itemList'>

      <div className='cpf'>{listItem.cpf}</div>

      <div className='name'>{listItem.name}</div>

      <div className='birthdate'>{listItem.birthdate.toString()}</div>


      <div className='actions'>

        <button className='update' onClick={() => edit(index)}>update</button>

        <button className='delte' onClick={() => remove(index)}>delete</button>

      </div>


    </div>

    )}

    </div>



    </div>


    </main>
  )
}
