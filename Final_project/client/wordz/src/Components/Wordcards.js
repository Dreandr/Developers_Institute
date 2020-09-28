import React from 'react';

export const Wordcards = (props) => {
  const {words} = props;
  return(
    <div class="container">
    {words.map(word =>{
      return(
        <div class="containerItem">
          {word}
        </div>
      )
    })}
    </div>
  )
}
