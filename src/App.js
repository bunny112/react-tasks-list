import React from 'react';
import FormValidation from './components/FormValidation';
import TodoList from './components/TodoList';
import ColorButton from './components/ColorButton';
import StatusBox from './components/StatusBox';



export default function App() {
  return (
    <div>
      <h1>React Tasks</h1>

      <h2>1. Form Validation</h2>
      < FormValidation />

      <h2>2. TodoList</h2>
      < TodoList />

      <h2>3. ColorButton</h2>
      < ColorButton />

      <h2>4. StatusBox</h2>

      <StatusBox status="success" />
      <StatusBox status="error" />
      <StatusBox status="warning" />

      
    </div>
  );
}

