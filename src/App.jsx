import './App.css'
import LineChart from './components/LineChart/LineChart'
// import DaisiNav from './components/DaisiNav/DaisiNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
    <NavBar></NavBar>
      {/* <DaisiNav></DaisiNav> */}
      <h1 className='text-7xl bg-red-600'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
     

    </>
  )
}

export default App
