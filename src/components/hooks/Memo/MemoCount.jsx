import React, { useRef } from "react"

const Count = () =>{
    const rendercount = useRef(0) ;
    console.log(rendercount)
    return(
        <>
            <div className="mt-3 font-display text-center">
                <p>Nothing Chnage here but Ive now rendred. <span className="text-red-400">time(s)</span></p>
            </div>
        </>
    )
}
export default React.memo(Count) ; 
// export default Count ; 