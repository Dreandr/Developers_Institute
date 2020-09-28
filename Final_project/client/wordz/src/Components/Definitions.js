import React from 'react';
import {DefinitionCard} from './Definitioncard'

export const Definitions = (props) => {
  const {defs} = props;
  return(
    <div class="container">
    {defs.map(definition=>{
      return(
        <DefinitionCard definitions={definition}/>
      )
    })}
    </div>
  )
}
