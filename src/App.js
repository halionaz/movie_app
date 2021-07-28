import Magpie from './Magpie';

let magpieList = [
  {name : 'halion', gender : 'male', age : 18, rating : 3.5},
  {name : 'Jason', gender : 'male', age : 24, rating : 2},
  {name : 'JungSeungHyun', gender : 'female', age : 19, rating : 4.5}
]

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      {magpieList.map(person => {
        return <Magpie key={person.name} name={person.name} gender={person.gender} age={person.age} rating={person.rating} />
      })}
    </div>
  );
}

export default App;
