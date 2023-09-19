import Image from 'next/image'

export default function Home() {
  return (



    <main >

      {/* corpo site */}
      <div className='container'>


    {/* site topo */}
    <div className='dados'>

    <div className='dadosInputs'>

    <div>CPF : <input type="number" /></div> 
    <br />
    <div>Name : <input type="text" /></div> 
<br />
    <div>Birthdate : <input type="date"/></div> 
<br />
    </div>  

    {/* button topo */}
    <div className='dadosButtons'>

    <button className='reset'>🔄</button>
    <button className='add'>➕</button>
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
    <div className='itemList'>

      <div className='cpf'>17243871453</div>

      <div className='name'>pedro</div>

      <div className='birthdate'>10/11/2004</div>


      <div className='actions'>

        <button className='update'>update</button>

        <button className='delte'>delete</button>

      </div>


    </div>



    </div>



    </div>


    </main>
  )
}
