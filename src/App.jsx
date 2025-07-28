import { useState } from "react";
import CardSection from "./components/CardSection";
import FormSection from "./components/FormSection";
import Completed from "./pages/Completed";

function App() {
  const [name, setName] = useState("JAMES APPLESEED");
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [complete, setComplete] = useState(false)

  function handleName(e) {
    setName(e.target.value);
  }
  function handleNumber(e) {
    const value = e.target.value;

    const digitsOnly = value.replace(/\D/g, "");
    const limited = digitsOnly.slice(0, 16);
    const formatted = limited.replace(/(.{4})/g, "$1 ").trim();
    setNumber(formatted);
  }
  function handleMonth(e) {
    setMonth(e.target.value);
  }
  function handleYear(e) {
    setYear(e.target.value);
  }
  function handleSubmit() {
    setName("JAMES APPLESEED");
    setNumber("0000 0000 0000 0000");
    setMonth("00");
    setYear("00");
    setComplete(true)
  }
  return (
    <section className="min-h-screen flex flex-col lg:flex-row ">
     <CardSection name={name} number={number} month={month} year={year}/>
   { complete ? <Completed  setComplete={setComplete}/> : <FormSection handleMonth={handleMonth} handleName={handleName} handleNumber={handleNumber} handleSubmit={handleSubmit} handleYear={handleYear}/>}
    
    </section>
  );
}

export default App;
