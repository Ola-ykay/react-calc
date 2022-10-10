import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const getStylename = btn => {
  
    const className = {
        "x" : "operator",
        "+" : "operator",
        "-" : "operator",
        "/" : "operator",
        "=" : "operator",
        0 : "zero",
        "AC": "clear"
      
    }
    return className[btn]
}
const Button = ({ value }) => {
const { calc, setCalc } = useContext (CalcContext);

  const periodClick = () => {
setCalc({
  ...calc,
  num: !calc.num.toString().includes('.') ? calc.num + value :calc.num
});

  }
  //allclear click
  const allClearClick = () => {
    setCalc({ sign:'', num: 0, res: 0 })
  }
 
  //num click
  const handleNumClick = () => {
    const numberString = value.toString()

    let numberValue;
    if (numberString === '0' && calc.num === 0){
      numberValue ="0"
    } else{
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num: numberValue
    })
  }
  //operators click
  const operatorClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0

    })
  }
  //equals click
  const equalsClick = () => {
    if(calc.res && calc.num) {
const math = (b, c, sign) => {
  const result = {
    '/': (b, c) => b / c,
    '-': (b, c) => b-c,
    '+': (b, c) => b + c,
    'x': (b, c) => b * c,
  }
  return result[sign](b, c)
}
    setCalc({
      res: math(calc.res, calc.num, calc.sign),
      sign:'',
      num: 0
    })
  }
  }
  //percent click
  const percentClick = () => {
    setCalc ({
      num: (calc.num / 100),
      res: (calc.res / 100),
    })

  }
  //invert click
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ''
    })
  }
  const handleButtonClick = () => {
  
    const results = {
      '.': periodClick,
      'AC': allClearClick,
      '-': operatorClick,
      '+': operatorClick,
      '/': operatorClick,
      'x': operatorClick,
      '=': equalsClick,
      '%': percentClick,
       '+-': invertClick
    
    }
    if (results[value]) {
    return results[value]()
    } else {
      return handleNumClick()
    }
  }
  return (
    <button onClick={handleButtonClick} className={`${getStylename(value)} button`}>{value}</button>
  )
}

export default Button