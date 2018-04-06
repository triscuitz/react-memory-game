import React from 'react';
import './img-card.css';

let ImgCard = props => (
	<div onClick={() => props.setClicked(props.id)} className="img-card">
      		<img alt="a thing" src={props.image} />
  </div>
);

export default ImgCard;
