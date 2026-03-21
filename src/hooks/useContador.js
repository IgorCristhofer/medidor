import { useEffect, useState } from "react"

export const useContador = () =>{
    const [tempo, setTempo] = useState(new Date())

    useEffect(()=>{
        //armazena o tempo atual
        const intervalo = setInterval(()=>{
            setTempo(new Date())
        }, 1000)

        //limpa o tempo armazenado após exibir
        return() => clearInterval(intervalo)
    }, [])

    //retorna hora formatada
    const formaHora = tempo.toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
    })

    return formaHora;
}