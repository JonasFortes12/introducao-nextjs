// import NavBar from "@/components/NavBar"
import AtvCard from "@/components/CartAtv"

export default function About(){

    return(
        <div>
            {/* <NavBar label1="Produtos" label2="Adminitradores" label3="Time"/> */}
            <h1>Sobre nós</h1>
            <p>Informações sobre a empresa ...</p>
            <AtvCard 
               url='https://botanicaipe.com.br/wp-content/uploads/2022/11/coqueiro-gigante-com-folhas-balancando-ao-vento.jpg'
               title='Lindo Coqueiro'
               description='O coqueiro mais lindo e mais verde que você vai ver em toda sua vida. Este possui a melhor água de coco do mundo!'
               />
        </div>
    )
}