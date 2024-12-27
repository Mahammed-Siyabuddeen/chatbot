import React, { useState } from 'react'
import axios from 'axios'
import Dompurify from 'dompurify'
import { marked } from 'marked'

function Prompt({ setResult, loading, setLoading }) {
  const [input, setInput] = useState("")

  marked.use({
    gfm: true
  });

  const handleSumbit = async () => {
    try {
      setLoading(true)
      const { data } = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/prompt/generateresult`,
        method: "POST",
        data: { input }
      })
      console.log(data);
      const html = Dompurify.sanitize(marked(data))
      setResult(html)
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false)
      setInput("")
    }
  }
  return (
    <div className='m-2 flex gap-2'>
      <input value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text" className='w-full focus:outline-none px-4 py-2 bg-slate-700 rounded-lg '
      />
      <button disabled={loading ? true : false} onClick={handleSumbit} className='bg-blue-500 disabled:bg-sky-300 px-3 rounded-md'>Submit</button>
    </div>
  )
}

export default Prompt
