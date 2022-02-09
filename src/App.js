/*import Card from './Components/Card'*/
import Header from './Components/Header'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Routers/Home'
import About from './Components/Routers/About'
import Contact from './Components/Routers/Contact'
function App(){
  return (
    <>
      <Router>
        <Header/> 
        <Routes>
          <Route path='/' element={<Home />} />
          < Route path='/about' element={<About />} />
          <Route path='/contact'  element={<Contact />} />
        </Routes>
      </Router>
      {/* <Card/>  */}
      
    </>
      

    
  );
}

export default App;


