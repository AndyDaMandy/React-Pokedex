import pokemonData from '/pokedex.json'
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  return (
    <Container>
      <Row>
        {pokemonData.map((pokemon) => (
          <Col key={pokemon.id} sm={4} className="mb-4">
            <Card>
              <Card.Body>
                <img src={getImageUrl(pokemon.id)} className="img-flex"></img>
                <Card.Title>{pokemon.name.english}</Card.Title>
                <Card.Text>
                  <strong>ID:</strong> {pokemon.id}<br />
                  <strong>Types:</strong> {pokemon.type.join(', ')}<br />
                  <strong>Base Stats:</strong>
                  <ul className="list-group">
                    {Object.entries(pokemon.base).map(([stat, value]) => (
                      <li className="list-group-item" key={stat}>
                        {stat}: {value}
                      </li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
 
}

export default Pokedex