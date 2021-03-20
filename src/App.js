import { useState,useEffect } from 'react';
import './App.css';
import restaurant from './restaurant.jpg';
import { Routes,Route} from "react-router-dom";
import {Home,Events,Contact,About,Oops404} from './pages';

// https://api.github.com/users/ShreyaWaghmare

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <h3> We server {props.adj} food here </h3>
      <img src={restaurant} height={300} width={500} alt="photo of a recipe"/>
      <h3>Check out...</h3>
      {/* this is JSX not CSS */}
      <ul style={{textAlign:"left"}}> 
        {props.dishes.map((dish) => (
        <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
      </section>
  );
}

const dishes =[
  'Pizza',
  'Bhel',
  'Pani Puri',
  'SPDP',
  'Ragda Pattice',
];

const dishObject = dishes.map((dish,i) => ({id:i, title:dish}));
console.log(dishObject)

function SecretComponent({ login }) {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);// to handle no data
  const [error,setError] = useState(null);// to handle no data

  useEffect(()=>{
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setData)
    .then(()=>setLoading(false))// to handle no data
    .catch(setError);// to handle no data 
  },[login]);

  // to handle no data
  if (loading) return <h5>Loading Form...</h5>
  if (error) return <pre>{JSON.stringify(data,null,2)}</pre>

  if (data) {
    return (
      <>
      {/* <div>{JSON.stringify(data)}</div> */}
      <div>{data.login}</div>
      <h1>Order Food!!</h1>
      <h5>Food ordering Form here</h5>
      </>
    );
  }else{
    return (
      <>
      <h5>Data not found....</h5>
      <h5>SignUp window here</h5>
      </>
    );
  }

}

function PublicComponent() {
  return (
    <h5>Login window here</h5>
  );
}
// rplace props with {authorized}- destructuring arrays
function App({authorized,login}) {
    return(
      <>
      <div className="App">
        <h1>Welcome</h1> {/* to test using react library */}
      <Header name="Shreya"/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}>
            <Route path="events" element={<Events />}/>
            <Route path="contacts" element={<Contact />}/>
          </Route>
          <Route path="*" element={<Oops404 />}/>
        </Routes>
      
      <Main adj="amazing" dishes={dishObject}/>
      
    </div>
      {authorized ? <SecretComponent login={login}/> : <PublicComponent />}
      
      </>
    ); 
}

export default App;
