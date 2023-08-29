import './card.css';

const Card = ({name , date }) => {
  return (
    <div className="card-vest">
      <div className="card-vest-text-part">
        <h3>{name}<br/> {date} </h3>
      </div>
      <button className="button-card">SUBSCRIBE</button>
    </div>
  );
};

export default Card;
