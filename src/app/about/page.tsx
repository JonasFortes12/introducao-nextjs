// import NavBar from "@/components/NavBar"
import Button   from "@/components/Button"
import Counter from "@/components/Counter"
import EffectCounter from "@/components/EffectCounter"

export default function About(){

    return(
        <div className="flex flex-col justify-center">
            {/* <NavBar label1="Produtos" label2="Adminitradores" label3="Time"/> */}
            {/* <h1>Sobre nós</h1>
            <p>Informações sobre a empresa ...</p>
            <Button label="Click-me"/>
            <Button label="Fechar"/>
            <Button label="Jonas"/> */}

            {/* <Counter initial={0}/> */}

            <EffectCounter/>
        </div>
    )
}