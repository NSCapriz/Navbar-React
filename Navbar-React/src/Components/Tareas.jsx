import { useState } from "react"

export const Tarea = ({agregarTarea})=>{
    const [inputValue, setInputValue] = useState('')
    const ingresarTarea = (e) =>{
        setInputValue(e.target.value)
    }
    const manejarEnvio = (e)=>{
        e.preventDefault()
        agregarTarea(inputValue)
    }
    return(
        <>
        <form onSubmit={manejarEnvio}>
        <input type="text" placeholder="Ingresar nueva tarea" value={inputValue}
        onChange={ingresarTarea}/>
        </form>
        </>
    )
}