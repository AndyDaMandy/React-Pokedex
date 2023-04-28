import Pokedex from './components/Pokedex'
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <main>
      <h1>Pokedex Application - React</h1>
      <Pokedex />
    </main>
  )
}
