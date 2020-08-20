import React from 'react';

const Form = (props) => {
  const {ctr, cty, funk, cleanForm} = props;
  return(
    <div id="Form">
      <form onSubmit={funk}>
        <input type="text" id="fname" name="fname" defaultValue={ctr} class="textinput" onClick={cleanForm}/>
        <input type="text" id="fname" name="fname" defaultValue={cty} class="textinput" onClick={cleanForm}/>
        <input type="submit" value="Check the weather!" id="submitbutton"/>
      </form>
    </div>
  )
}

export default Form;
