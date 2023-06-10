import React, { useState } from 'react'

const App = () => {
  const [expression,setExpression]=useState('')
  const [display,setDisplay]=useState('0')
  const handleClick = (event) =>{
    if(['1','2','3','4','5','6','7','8','9'].includes(event.target.textContent)){
      if(display==='0'){
        setDisplay(a =>'')
      }
      setDisplay(a => a + event.target.textContent)
    }
    if(event.target.id==='zero' && display!=='0'){setDisplay(a=>a+'0')}
      
    if(event.target.id==='clear'){
      (display==='0')?setExpression(a=>''):setDisplay(a=>'0')
    }
    if(event.target.id==='decimal' && display.indexOf('.') === -1){setDisplay(a=>a+'.')}
    if(['-','+'].includes(event.target.textContent)){
      setExpression(expression + display + event.target.textContent)
      setDisplay(a=>'0')
    }
    if(event.target.textContent==='='){
      setExpression(expression+display)
      const result = eval(expression + display);
      setDisplay(result);
      setExpression('')
    }
    if(['*','/'].includes(event.target.textContent)){
      setExpression(expression+display+ event.target.textContent)
      setDisplay(a=>'0')
      

      }
    }
  
  return (
    <div className="calc">
      <div className="calcExp c"    >&nbsp;{expression}</div>
      <div className="calcRes c"    id="display">{display}</div>
      <div onClick={(event)=>{handleClick(event)}} className="calcAC c"     id="clear">AC</div>
      <div onClick={(event)=>{handleClick(event)}} className="calcDiv Op c" id="divide">/</div>
      <div onClick={(event)=>{handleClick(event)}} className="calcMul Op c" id="multiply">*</div>
      <div onClick={(event)=>{handleClick(event)}} className="calcMin Op c" id="subtract">-</div>
      <div onClick={(event)=>{handleClick(event)}} className="calcPlus Op c"id="add">+</div>
      <div onClick={(event)=>{handleClick(event)}} className="calcEq c"     id="equals">=</div>
      <div onClick={(event)=>{handleClick(event)}} className="calc1 nbr c"  id="one">1</div>
      <div onClick={(event)=>{handleClick(event)}} className="calc2 nbr c"  id="two">2</div>
      <div onClick={(event)=>{handleClick(event)}} className="calc3 nbr c"  id="three">3</div>
      <div onClick={(event)=>{handleClick(event)}} className="calc4 nbr c"  id="four">4</div>
      <div onClick={(event)=>{handleClick(event)}} className="calc5 nbr c"  id="five">5</div>
      <div onClick={(event)=>{handleClick(event)}} className="calc6 nbr c"  id="six">6</div>
      <div onClick={(event)=>{handleClick(event)}} className="calc7 nbr c"  id="seven">7</div>
      <div onClick={(event)=>{handleClick(event)}} className="calc8 nbr c"  id="eight">8</div>
      <div onClick={(event)=>{handleClick(event)}} className="calc9 nbr c"  id="nine">9</div>
      <div onClick={(event)=>{handleClick(event)}} className="calc0 nbr c"  id="zero">0</div>
      <div onClick={(event)=>{handleClick(event)}} className="calcDot nbr c"id="decimal">.</div>
    </div>
    
  )
}

export default App