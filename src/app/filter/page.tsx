

export default function Filter() {

    const frutas = ['maçã', 'uva', 'melancia', 'carambola']
    // -> ["maça", "melancia"]
    const resultado = frutas.filter((fruta)=>{
        const primeiraLetra = fruta[0]
        const ultimaLetra = fruta[fruta.length-1]
        if(ultimaLetra == "a" && primeiraLetra == "m"){
            return true
        }else{
            return false
        }
           
    })
    console.log(resultado)


    return(
        <div>
            
        </div>
    )
}