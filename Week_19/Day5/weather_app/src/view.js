import React from 'react';

const View = (props) => {
  const {show} = props;
  if (show.name) {
  return(
    <div id="View">
      <p><span>Location:</span> {show.name}, {show.sys.country}</p> <hr/>
      <p><span>Temperature:</span> {show.main.temp}</p> <hr/>
      <p><span>Humidity:</span> {show.main.humidity}</p> <hr/>
      <p><span>Condition:</span> {show.weather[0].description}</p> <hr/>
    </div>
  )
} else {
  return(
    <div id="View">
      <p><span>Error!</span> {show.message}</p>
    </div>
  )
}
}

export default View;
