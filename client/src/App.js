import { useState } from 'react';
import './App.css';
import Prompt from './components/Prompt';
import Result from './components/Result';

function App() {
  const [result,setResult]=useState("");
  const [loading,setLoading]=useState("")
  return (
    <div className="bg-slate-800 h-dvh text-white ">
      <div className="w-3/5 h-full m-auto  flex flex-col justify-between">
        <Result result={result} loading={loading}/>
        <Prompt setResult={setResult} loading={loading} setLoading={setLoading}/>
      </div>
    </div>
  );
}

export default App;
