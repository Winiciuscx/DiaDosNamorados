import { useState } from 'react'
import foto1 from './assets/foto1.jpeg';
import foto2 from './assets/foto2.jpeg';
import foto3 from './assets/foto3.jpeg';
import foto4 from './assets/foto4.jpeg';
import RelogioNamoro from './RelogioNamoro';
import CarrosselMusicas from './CarrosselMusicas';  

import './App.css'

function App() {
  const fotos = [foto1, foto2, foto3, foto4]
  const [index, setIndex] = useState(0)

  const proximaFoto = () => {
    if (index === fotos.length - 1) {  // se estiver na última foto
      setIndex(0);                     // volta para a primeira
    } else {
      setIndex(index + 1);             // vai para a próxima foto
    }
  };

  const fotoAnterior = () => {
    if (index === 0) {
      setIndex(fotos.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  return (
    <div className="App">
      <h1>Feliz Dia dos Namorados 💌</h1>
      <p>
        Sou muito feliz por ter a oportunidade de dividir os meus dias com alguém que inspira, motiva e encanta.
      </p>
      <div className="carrossel">
        <button onClick={fotoAnterior}>◀</button>
        <img src={fotos[index]} alt={`Foto ${index + 1}`} style={{ width: '300px', borderRadius: '20px' }} />
        <button onClick={proximaFoto}>▶</button>
      </div>
      <p>Olha aqui em cima a gente sendo felizes juntos, me sinto feliz ao seu lado!</p>
      <RelogioNamoro />
      <div style={{ marginTop: "2rem" }}>
        <h2 style={{ color: "red" }}>Nossa música 💞</h2>
        <p>ou uma delas kkk</p>
        <CarrosselMusicas/>
     
      </div>




    </div>

  );
}


export default App

