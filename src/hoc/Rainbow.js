import React from 'react'

const Rainbow  = (WrappedComponent)=>{

    const colour = ['blue','red','pink','green','black','yellow']
    const colourName = colour[Math.floor(Math.random() * 5)]
    const className = colourName +'-text'; 

    return(props)=>{
        return(
            <div className={className}>
            <WrappedComponent {...props} />
            </div>
        )
        
    }
}
export default Rainbow;
