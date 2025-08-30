import axios from 'axios';
import { FoodData } from '../interface/FoodData';
import { useQuery } from '@tanstack/react-query';

const API_URL = 'http://localhost:8080';

const fetchData = async (): Promise<FoodData[]> => {
  const response = await axios.get<FoodData[]>(`${API_URL}/food`);
  return response.data;
};

export function useFoodData() {
  return useQuery<FoodData[]>({
    queryKey: ['food-data'],
    queryFn: fetchData,
    retry: 2,
  });
}
