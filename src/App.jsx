import { Stack, TextField , Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  //create state to store data
  const [interest,setInterest] =useState(0)
  const [principle,setPrinciple] =useState(0)
  const [rate,setRate] =useState(0)
  const [year,setYear] =useState(0)

  const [principleAmountValid,setPrincipleAmountValid] =useState(true)
  const [rateValid,setRateValid] =useState(true)
  const [yearValid,setYearValid] =useState(true)

  const handleReset=()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)

  }

  const handleValidation=(tag)=>{
    const {value,name} = tag
    console.log(value,name);
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name==="principle"){
        setPrinciple(value)
        setPrincipleAmountValid(true)
      }
      else if(name==="rate"){
        setRate(value) 
        setRateValid(true)
      }
      else{
        setYear(value)
        setYearValid(true)
      }

    }
    else{
      if(name==="principle"){
        setPrinciple(value)
        setPrincipleAmountValid(false)
      }
      else if(name==="rate"){
        setRate(value)
        setRateValid(false)
      }
      else{
        setYear(value)
        setYearValid(false)
      }
    }
  
  }


  const handleCalculate=()=>{
    if(principle && rate && year){
      setInterest(principle*year*rate/100)

    }
    else{
      alert("please fill the form completely")
    }
  }

  return (
    <>
      
      
      <div style={{width:'100%' , height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>

       <div style={{width:'600px'}} className='bg-light p-5 rounded shadow'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest easly</p>

        <div className="d-flex justify-content-center align-items-center bg-danger p-3 rounded shadow flex-column text-light">
          <h1> ₹{interest} </h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        
        
        
        <form className='mt-5'>
          
          
          <div className="mb-3">
           <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" value={principle || ""} onChange={(e)=>handleValidation(e.target)} name='principle'  />
          </div>
          { !principleAmountValid && <div className="text-danger mb-3">Invalid User Input</div>}

          <div className="mb-3">
           <TextField className='w-100' id="outlined-basic-rate" label="Rate of Interest (p.a) %" variant="outlined" value={rate|| ""} onChange={(e)=>handleValidation(e.target)} name='rate' />
          </div>
          {!rateValid && <div className="text-danger mb-3">Invalid User Input</div>}

          <div className="mb-3">
           <TextField className='w-100' id="outlined-basic-time" label="Time Peroid (yr)" variant="outlined" value={year || ""} onChange={(e)=>handleValidation(e.target)} name='year' />
          </div>
          {!yearValid && <div className="text-danger mb-3">*Invalid User Input</div>}
          


          <Stack direction="row" spacing={2}>
           <Button onClick={handleCalculate} disabled={!principleAmountValid || !rateValid || !yearValid} style={{width:'50%',height:'60px'}} className='bg-blue' variant="contained">CALCULATE</Button>
           <Button onClick={handleReset} style={{width:'50%',height:'60px'}} variant="outlined">RESET</Button>
          </Stack>


        </form>
      </div>
      </div>
    </>
  )
}

export default App
