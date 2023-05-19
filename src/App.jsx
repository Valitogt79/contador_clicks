import './App.css'
import Boton from './components/Boton'
import Contador from './components/Contador'
import './components/styleSheets/Boton.css'
import './components/styleSheets/Contador.css'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import { useState } from 'react'


function App() {

  const [numClics, setNumClics] = useState(0);
 
  const manejarClic = () => {
    setNumClics(numClics + 1)
  }

  const reiniciarContador = () => {
   setNumClics(0);
  }

  return (
    <div className='App'>
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} alt="Logo de freeCodeCamp" className='freecodecamp-logo'/>
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics}/>
        <Boton 
        texto = 'Click'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>

        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  )
}

export default App
