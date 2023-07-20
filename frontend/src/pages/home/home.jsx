import Title from "../../components/title/title" 
import cover from "../../assets/cover.png"
import Navbar from "../../components/Navbar/navbar"
import { useEffect,useRef } from "react"
import './home.css'
const Home  = () =>{

    return (

        <div className="main-home">
            <Navbar/>

            <div className="main-home-coverpage "  style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: '50%',
        backgroundPosition: 'center',
        backgroundRepeat:"no-repeat",                   
        width: '100%',
        height: '700px' ,                        //backgroung Image part
        marginBottom:"200px"
      }}>
            </div>

        
        <div className="main-home-text">
            <h3 >Sobre Cebraspe Crawler X</h3>
            <p>Aplicativo web desenvolvido para auxiliar pessoas que estão inscritas em Concurso ou Subprogramas de PAS/UNb </p>
            <p>é um aplicativo desenvolvido para rastrear todos os concursos e programas vigentes do pas unb no site do cebraspe caso sistema encontre a atualizaçoes sobre programa que usuario está cadastrado ele enviará uma notificaco para o usuário no whatsap</p>
            <h3>Proposta</h3>
            <p>muitas pessoas que se inscrevem em concursos e programas do pas/unb perdem datas importantes porque perdem eventos importantes ou data para entregar os documentos e em alguns casos perdem a candidatura e vaga que estavam concorrendo
então este aplicativo tem por objetivo resolver este problema mantendo os usuários atualizados sobre os eventos atuais acontecendo no concurso que eles estão inscritos também enviando uma mensagem sms no whatsapp</p>
            <h3>Como Funcionar</h3>
            <p> o usuário fará uma conta no Sistema e depois poderá selecionar o concurso ou programa PAS/UNB que deseja receber as notificações</p>

        </div>

        </div>
    )
}

export default Home