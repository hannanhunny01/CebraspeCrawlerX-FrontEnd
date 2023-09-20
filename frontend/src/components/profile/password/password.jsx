
import './password.css'


function PasswordCard(){

    return(
        <div className="passwordCard">
        
  
        <div className="password-container">
          <header>Redefine Senha</header>
         <h3>Novo Senha</h3>


             <div style={{display:"flex"}}  className='password-div'>
                 
                 <label htmlFor="label-senha"> Senha Atual</label>
                 <input type="password"   className='label-senha' />
              </div> 
              <div style={{display:"flex"}}  className='password-div'>
                 
                 <label htmlFor="label-senha"> Novo Senha</label>
                 <input type="password"   className='label-senha' />
              </div>   
              <div style={{display:"flex"}}  className='password-div'>
                 
                 <label htmlFor="label-senha"> Re-<br/>Escrevar Senha</label>
                 <input type="password"   className='label-senha' />
              </div>      

<div  style={{padding:"5px"}}>              <button className='confirm-button'>Confirm</button>    </div>

       



  
  
  
      
  
      
        </div>
      </div>
    )
}

export default PasswordCard