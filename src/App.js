function Food({name,picture}){
  return(
    <div>
      <h3>I like {name}!!!!</h3>
      <img src={picture} alt={name}/>
    </div>
    
  )
}

// id를 통해 react가 컴포넌트가 각각 다르다는걸 알게 함.
const foodILIKE = [{id:1,name:"kimchi",image:"https://www.maangchi.com/wp-content/uploads/2015/07/tongbaechu-kimchi.jpg"},
{id:2,name:"pizza",image:"https://i.ytimg.com/vi/P-Ojv_1veCg/maxresdefault.jpg"},
{id:3,name:"chicken",image:"https://cdn0.wideopeneats.com/wp-content/uploads/2016/10/FriedChicken-950x535.jpeg"}];

function App() {
  return (
    <div className="App">
      <h1>Hi there!!</h1>
      {foodILIKE.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image}/>))}
    </div>
  );
}

export default App;
