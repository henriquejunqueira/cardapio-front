import './App.css';

import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';

function App() {
  const { data, isLoading, isError } = useFoodData();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading food data</p>;

  return (
    <>
      <h1>Cardápio</h1>
      <div className='card-grid'>
        {data?.map((foodData) => (
          <Card
            key={foodData.id}
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;
