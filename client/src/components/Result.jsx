import React from 'react'
function Result({ result, loading }) {

    return (
        <div className="h-4/5 ">
            <h1 className='text-2xl font-semibold py-2 '>Prompt</h1>
            <div className='bg-slate-700  h-full rounded-md overflow-y-scroll '>
                {
                    loading ?
                        <p className='p-2 text-gray-400'>Loading</p>
                        : <article className='p-2 leading-8'
                            dangerouslySetInnerHTML={{ __html: result }}
                        />
                }
            </div>
        </div>
    )
}

export default Result
