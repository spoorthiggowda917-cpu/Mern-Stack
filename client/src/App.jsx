import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Layout} from 'lucide-react';
import ResumeBuilder from './pages/ResumeBuilder';
import DashBoard from './pages/Dashboard';
import Preview from './pages/Preview';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="app" element={<Layout/>}>
        <Route index element={<DashBoard/>}/>
        <Route path="builder/:resumeId" element={<ResumeBuilder/>}/>
      </Route>

      <Route path="view/:resumeId" element={<Preview/>}>
      <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;
