import './card.css';

const Card = ({name , date  ,isSubscribed  ,id , onClick}) => {

   

  return (
    <div className="card-vest">
      <div className="card-vest-text-part">
        <h3>{name}<br/> {date} </h3>
      </div>
      <button className={isSubscribed?"button-card-green":"button-card"}  onClick={onClick}> <span>{ isSubscribed?"INSCRITO":"SUBSCRIBE" } </span></button>
    </div>
  );
};

export default Card;
