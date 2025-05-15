import React from 'react';
import Home from './components/homePage/Home';
import FormValidation from './components/formValidation/FormValidation';
import TodoList from './components/todoList/TodoList';
import ColorButton from './components/colorButton/ColorButton';
import Navbar from './components/navbar/Navbar';
import Toggle from './components/toggleButton/Toggle';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Tasks from './components/tasksPage/Tasks';
import About from './components/aboutPage/About';
import { ThemeProvider } from "./components/toggleButton/ThemeContext";
import TodoLists from './functionComponent/TodoLists';







export default function App() {
  return (
    <div>
    
   <ThemeProvider>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/form' element={< FormValidation />} />
        <Route path='/todo' element={<TodoList />} />
        <Route path='/Button' element={< ColorButton />} />
        <Route path='/toggle' element={<Toggle />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/about' element={<About />} />
        <Route path='/todos' element={<TodoLists />} />
        
      </Routes>
    </ThemeProvider>

      
    </div>
  );
}

