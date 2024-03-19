import './App.css'
import LineChart from './Components/LineChart/LineChart'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBer from './Components/NavBer/NavBer'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {
  return (
    <>
      <NavBer></NavBer>
      <h1 className='text-3xl'>React With Taildwind</h1>
      <br />
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
