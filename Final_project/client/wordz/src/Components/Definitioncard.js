import React from 'react';

export const DefinitionCard = (props) =>{
  const {definitions} = props;
  console.log(definitions);
  return (
    <div>
      {
        definitions.map(def => {
          return(<p>{def.definition}</p>)
        })
      }
    </div>
  )
}
