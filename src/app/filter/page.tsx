

export default function Filter() {

    const frutas = ['maçã', 'uva', 'melancia', 'carambola']
    // -> ['melancia]
    const resultado = frutas.filter((fruta)=>{
        const primeiraLetra = fruta[0]
        const ultimaletra = fruta[fruta.length-1]
        if(ultimaletra == "a" && primeiraLetra == "m"){
            return true
        }else {
            return false
        }
    })

    

    console.log(resultado)


    return (
        <div>
            <h1>Olá </h1>
        </div>
    )
}