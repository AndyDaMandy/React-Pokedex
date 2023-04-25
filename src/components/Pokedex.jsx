import pokemonData from '/pokedex.json'


function Pokedex () {
  function getImageUrl(id) {
    if (parseInt(id) < 100 && parseInt(id) >= 10)
    { id = "0" + parseInt(id) }
    else if (parseInt(id) < 10 ){
      id = "00" + parseInt(id) 
    }
  return (
    '/thumbnails/' +
     id +
    '.png'
    );
  };
  const pokemon = pokemonData.map((data) => {
    return (
    <div key={data.id} className="col p-3">
      <img src={getImageUrl(data.id)} className="img-flex"></img>
      <p><strong>{data.name.english}</strong></p>
      <ul className="list-group">
        <li className="list-group-item">{data.type[0]} / {data.type[1]}</li>
        <li className="list-group-item">HP: {data.base.HP}</li> 
        <li className="list-group-item">Attack: {data.base.Attack}</li> 
        <li className="list-group-item">Defense: {data.base.Defense}</li>
        <li className="list-group-item">Sp. Attack: {data.base["Sp. Attack"]}</li>
        <li className="list-group-item">Sp. Defense: {data.base["Sp. Defense"]}</li>
        <li className="list-group-item">Speed: {data.base.Speed}</li>
      </ul>
    </div>
      )
  })
  /*
  const rows = pokemon.map((col) => {
    let row = []
    for (let i = 0; i < pokemon.length; i++){
      let minirow = []
      minirow.push(col)
    }
  })
  */

  /*

  function rowGen(arr){
    const size = 5; 
    let arrayOfArrays = [];
    for (let i=0; i < arr.length; i += size) {
     arrayOfArrays.push(arr.slice(i, i+size));
    }
    console.log(arrayOfArrays[0])
  }
  const rowsArr = rowGen(pokemon)
  const rows = rowsArr.map((row) => {
    return (
      <div className="row">
        {row}
      </div>
    )
  })
  */
  return (
    <div className="container">
      <div className="row p-4">
        {pokemon}
      </div>
    </div>
  )
}

export default Pokedex