import React, { useState } from 'react';

function App() {

  const [nom, setNom] = useState ('');
  const [prenom, setPrenom] = useState ('');

  const handleChangeNom = (e) => 
  {
    setNom ( e . target . value );
  };

  const handleChangePrenom = (e) => 
  {
    setPrenom ( e . target . value );
  };

  const handleSubmit = (e) => 
  {
    e . preventDefault ();
    alert (`Bonjour ${prenom} ${nom} !`);
  };

  return (

    <div>

      <form onSubmit= {handleSubmit}>

        <label>

          Nom :

          <input type="text" value= {nom} onChange= {handleChangeNom} />

        </label><br></br>

        <br />

        <label>

          Prénom :

          <input type="text" value= {prenom} onChange= {handleChangePrenom} />

        </label><br></br>

        <br />
        
        <button type= "submit">Envoyer</button>

      </form>

    </div>

  );
}

export default App;
