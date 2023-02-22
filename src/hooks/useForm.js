import { useState } from "react"

export const useForm = (inicialState  = {}) => {
  
    const [values, setvalues] = useState(inicialState);

    const reset = ( newFormatState = inicialState) => {
        setvalues( newFormatState );
    }

    const handleInputChange = ({ target })=>{

        setvalues({
            ...values,
            [ target.name ]: target.value
        })
    }

    return [values, handleInputChange, reset];
}