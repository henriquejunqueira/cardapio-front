import './card.css';

// Defines the props for the Card component
interface CardProps {
  price: number; // Price of the item
  title: string; // Title of the item
  image: string; // Image URL of the item
}

// Card component using destructured props
export function Card({ price, image, title }: CardProps) {
  return (
    <div className='card'>
      {' '}
      {/* Card container */}
      <img src='' alt='' /> {/* Card image */}
      <h2></h2> {/* Card title */}
      <p>
        <b>Valor:</b> {/* Label for price */}
      </p>
    </div>
  );
}
