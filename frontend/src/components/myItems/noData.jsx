import React from 'react';

const NoDataComponent = ({name}) => {
  // Check if the items array is empty
 
    return (
      <div style={styles.container}>
        <p style={styles.text}>Não tem Nenhuma Cadastro feito pelo voce para {name}</p>
      </div>
    );
  

  
};

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '25vh',  
      margin: '15vh 0 0',  
    },
    text: {
      fontSize: '1.5rem',
      color: '#333', 
      textAlign: 'center',
    },
  };

export default NoDataComponent;