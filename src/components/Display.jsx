import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext';

const Display = () => {
  const { calc } = useContext(CalcContext);
  return (
    <div className="display">
      {calc.num ? calc.num : calc.res}
      </div>
  )
}

export default Display