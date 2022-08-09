import './App.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import { AboutPage, ContactPage, ProjectsPage, BlogPage } from './pages/pageExportMap.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hi, I'm Matheus.
      </header>
      <nav> 
        <Link to='/about'>
          <button>
            About
          </button>
        </Link>
        <Link to='/contact'>
          <button>
            Contact
          </button>
        </Link>
        <Link to='/projects'>
          <button>
            Projects
          </button>
        </Link>
        <Link to='/blog'>
          <button>
            Blog
          </button>
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<div>Welcome!</div>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </div>
  );
}

export default App;
