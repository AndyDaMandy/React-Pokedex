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
    <div>
      <img src={getImageUrl(data.id)}></img>
      <p>Name: {data.name.english}</p>
      <ul>
        <li>Type: {data.type[0]} / {data.type[1]}</li>
        <li>Base Stats:</li>
        <li>HP: {data.base.HP}</li> 
        <li>Attack: {data.base.Attack}</li> 
        <li>Defense: {data.base.Defense}</li>
        <li>Sp. Attack: {data.base["Sp. Attack"]}</li>
        <li>Sp. Defense: {data.base["Sp. Defense"]}</li>
        <li>Speed: {data.base.Speed}</li>
      </ul>
    </div>
      )
  })
  return (
    pokemon
  )
}

export default Pokedex
