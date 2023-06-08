import {Header} from './components/header'
import {Footer} from './components/footer'
import { BrowserRouter, Routes, Route, Switch} from 'react-router-dom'

import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Category} from './pages/Category'
import {NotFound} from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        < Header/>
        <main className='container content'>
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/contacts' Component={Contact} />
            <Route path='/category/:name'  Component={Category}/>
            <Route Component={NotFound} />
          </Routes>
        </main>
        < Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
