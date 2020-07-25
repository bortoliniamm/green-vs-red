import React from 'react'

export default function ArrayStringDisplay({ strGridArray }) {
    return (
            <div  className='container'>
                <div className='input-field'>
                    Your initial array is {strGridArray.length!==0 ? strGridArray : "empty" }
                </div>
            </div>
    )
}
