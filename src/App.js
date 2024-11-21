//import logo from './logo.svg';
import './App.css';
import ManageData from './components/ManageData';

import City from './assets/city.jpg';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetais from './components/UserDetais';
import { useState } from 'react';

function App() {

  const name = 'Romildo A. Lima Jr.';
  const [userName] = useState('Romildo Alves');

  const cars = [
    { id: 1, brand: "Ferrari", km: 0, color: 'Yellow', newCar: true },
    { id: 2, brand: "KIA", km: 34343, color: 'White', newCar: false },
    { id: 3, brand: "Renault", km: 23450, color: 'Black', newCar: false },
  ];

  function showMessage() {
    console.log("Evento do componente pai!...");
  };

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    { id: 1, name: "Romildo", job: "Programador", age: 28 },
    { id: 1, name: "Clara", job: "Estudante", age: 11 },
    { id: 1, name: "Nancy", job: "Comerciante", age: 51 },
    { id: 1, name: "Cecília", job: "Jovem Aprendiz", age: 10 },
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <img src="/paisagem.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <div>
        <ManageData />
      </div>
      <div>
        <ListRender />
      </div>
      <div>
        <ConditionalRender />
      </div>
      <div>
        <h1>Uso de Props</h1>
        <ShowUserName name="Romildo Jr." />
        <ShowUserName name={name} />
        <ShowUserName name={userName} />
      </div>
      <div>
        <h1>Uso de Destructuring</h1>
        <CarDetails brand='VW' Km={100000} color='Azul' />
      </div>
      <div>
        <h1>Reaproveitamento</h1>
        <CarDetails brand='Ford' Km={0} color='Vermelha' newCar={true} />
        <CarDetails brand='Fiat' Km={4500} color='Preto' newCar={false} />
        <CarDetails brand='Citroen' Km={30000} color='Branco' newCar={false} />
        <CarDetails brand='Strada' Km={0} color='Cinza' newCar={true} />
      </div>
      <div>
        <h1>Reutilização com loop</h1>
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            Km={car.km}
            color={car.color}
            newCar={car.newCar}
          />
        ))}
      </div>
      <div>
        <h1>React Fragments</h1>
        <Fragment propFragment="teste" />
      </div>
      <div>
        <h1>Children prop</h1>
        <Container myValue="testing">
          <p>E este é o conteúdo</p>
        </Container>
        <Container myValue="testing">
          <p>E este é o conteúdo</p>
        </Container>
        <Container myValue="testing 2">
          <h5>Testando o container</h5>
        </Container>
      </div>
      <div>
        <h1>Funções em props</h1>
        <ExecuteFunction myFunction={showMessage} />
      </div>
      <div>
        <h1>State Lift</h1>
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />
      </div>
      <div>
        <h1>Desafio</h1>
        {users.map((user) => (
          <UserDetais
            key={user.id}
            name={user.name}
            job={user.job}
            age={user.age}
          />
        ))}

      </div>
    </div>
  );
}

export default App;
