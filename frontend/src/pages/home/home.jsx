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
            <p>
          Aplicativo web desenvolvido para auxiliar pessoas que estão inscritas
          em Concurso ou Subprogramas de PAS/UNB
        </p>
        <p>
          É um aplicativo desenvolvido para rastrear todos os concursos e
          programas vigentes do PAS/UNB no site do Cebraspe. Caso o sistema
          encontre atualizações sobre o programa que o usuário está cadastrado,
          ele enviará uma notificação para o usuário no Email/Telegram ou WhatsApp.
        </p>
        <h3>Proposta</h3>
        <p>
          Muitas pessoas que se inscrevem em concursos e programas do PAS/UNB
          perdem datas importantes porque perdem eventos importantes ou datas
          para entregar os documentos, e em alguns casos, perdem a candidatura e
          a vaga que estavam concorrendo. Portanto, este aplicativo tem por
          objetivo resolver este problema mantendo os usuários atualizados
          sobre os eventos atuais acontecendo no concurso que eles estão
          inscritos, também enviando uma mensagem SMS no WhatsApp.
        </p>
        <h3>Como Funciona</h3>
        <p className="homepage-lasttext">
          O usuário fará uma conta no sistema e depois poderá selecionar o
          concurso ou programa PAS/UNB que deseja receber as notificações.
        </p>

        </div>

        </div>
    )
}

export default Home