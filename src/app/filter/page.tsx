

export default function Filter(){

    const frutas = ['maçã', 'uva', 'melancia', 'banana']

   const resultado = frutas.filter((fruta)=>{
        const ultimaLetra = fruta[fruta.length-1]
        const primeiraLetra = fruta[0]
        if (primeiraLetra == 'm' && ultimaLetra == 'a') {
            return true
        } else {
            return false
        }
    })


    return (
        <div>
            <div className="text-center text-3xl capitalize">
                <p>{resultado}</p>
                {/* <p>{resultado[1]}</p> */}
            </div>
        </div>
    )
}