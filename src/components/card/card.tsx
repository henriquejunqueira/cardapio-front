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
    // Card container
    <div className='card'>
      <img src={image} alt='' /> {/* Card image */}
      <h2>{title}</h2> {/* Card title */}
      <p>
        <b>Valor:</b> {/* Label for price */}
        {price}
      </p>
    </div>
  );
}
