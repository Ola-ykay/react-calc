import Calculator from "./components/Calculator";
import Display from "./components/Display";
import Button from "./components/Button";
import ButtonCont from "./components/ButtonCont";
import CalcProvider from "./context/CalcContext";
const btnValues = [
  ["AC", "+-", "%", "/"],
  [7, 8, 9, "+"],
  [4, 5, 6, "-"],
  [1, 2, 3, "x"],
  [0, ".", "="],
];

function App() {
  return (
    
    <CalcProvider>
      <Calculator>
        <Display />
     <ButtonCont>
      {btnValues.flat().map((btn, i) =>(
        <Button 
        value={btn}
        key={i}/>
      ))}
     </ButtonCont>
      </Calculator>
      </CalcProvider>
    
   
  );
}

export default App;

