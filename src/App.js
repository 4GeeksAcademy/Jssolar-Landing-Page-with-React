// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';
import Main from './components/Main';
import Footer from './components/Footer';
import  Card  from './components/Card';
function App() {
  return (
    <div>
      <Navbar />
      <Carrusel/>
      <Main />
      <div className='container'>
        <div className='row'>
        {Array.from([{userId: 1, id: 1, title: "titulo1", body: `"body1`},{userId: 1,id: 2,title: "titulo2",body: `body2`},
              {userId: 1, id: 3, title: "titulo3", body: `body3`},]).map((item, index) => 
              {return <Card key = {item.id} item = {item} />
        })}
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;

