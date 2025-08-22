// import NavBar from "@/components/NavBar"
import Button   from "@/components/Button"
import Counter from "@/components/Counter"
import EffectCounter from "@/components/EffectCounter"
import LikeButton from "@/components/LikeButton"
import MiniDisplay from "@/components/miniDisplay"

export default function About(){

    return(
        <div className="flex flex-col  items-center justify-center">
            {/* <NavBar label1="Produtos" label2="Adminitradores" label3="Time"/> */}
            {/* <h1>Sobre nós</h1>
            <p>Informações sobre a empresa ...</p>
            <Button label="Click-me"/>
            <Button label="Fechar"/>
            <Button label="Jonas"/> */}

            {/* <Counter initial={0}/> */}

            {/* <EffectCounter/> */}
            
            {/* <MiniDisplay/> */}

            <LikeButton/>

        </div>
    )
}