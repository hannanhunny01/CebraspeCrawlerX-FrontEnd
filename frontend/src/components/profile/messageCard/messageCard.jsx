
import './messageCard.css'

function MessageCard(){


    return(
        <div className="messageCard">
        
  
        <div className="messageCard-container">
          <header>Meu Contatos</header>
  
          <div>
            <label htmlFor="zapholder"> Whatsapp</label>
            <input
              className="zapholder"
              type="text"
              placeholder="Enter your name"
              disabled
              value={"Abdul Hannan"}
  
            />
          </div>
  
          <div>
            <label htmlFor="telholder">Telegram</label>
            <input
              className="telholder"
              type="text"
              placeholder="Enter your Whatsapp number"
              disabled
              value={"(61)98625-0932"}
  
            />
          </div>
  
          <div>
            <label htmlFor="emailholder">Email</label>
            <input
              className="emailholder"
              type="text"
              placeholder="Enter your email"
              value={"Hannanhoney5000@gmail.com"}
              disabled
            />
          </div>
  
      
        </div>
      </div>
    )
}

export default MessageCard