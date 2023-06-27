import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Nav, Navbar,Row,Col }from 'react-bootstrap';

import{Routes, Route, Link, useNavigate} from 'react-router-dom'; 
import {useState} from 'react'
import data from './pages/productData'
import About from './pages/About';
import Detail from './pages/Detail';
import Cart from './pages/Cart';



function App() {

  const navigate = useNavigate()
  const [bests] = useState(data)

  return (
    <div className="App">
     


      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/info')}}>Info</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='cont'>

          <Routes>

            <Route path='/' element={
              <Container>
                <img src={process.env.PUBLIC_URL + './images/visual_main_01.jpg'} alt = 'img'/>
                <h2>베스트상품</h2>
              <Row>
                {
                  bests.map((best,index)=>{
                    return(
                      <Col key={index}>
                        <Link to={`detail/${index}`}>
                          <img src={best.image} alt='img' style={{width:280}} />
                          <h4>{best.title}</h4>  
                          <p>{best.desc}</p>  
                          <p>{best.price}</p>  
                        </Link>
                      </Col>
                    )
                  })
                }
              </Row>
            </Container>
            } />
            <Route path='about' element={<About />}> 
              <Route path='info' element={<div>info</div>}></Route>
              <Route path='loca' element={<div>loca</div>}></Route>
            </Route>

            <Route path='detail/:id' element={<Detail bests={bests}/>}></Route>
            <Route path='cart' element={<Cart />}></Route>
          </Routes>


      </div>




      
    </div>
  );
}

export default App;
