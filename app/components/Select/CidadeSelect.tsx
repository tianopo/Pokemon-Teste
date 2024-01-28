import axios from 'axios';
import { useEffect, useState } from 'react';
import { UseFormRegister } from "react-hook-form";
import { Option, Select } from "../../../styles/consultaPagina";

interface ICityData {
  name: string;
}

interface ICitySelect {
  register: UseFormRegister<any>
}

export const CitySelect = ({ register }: ICitySelect): any => {
  const [cityList, setCityList] = useState<ICityData[]>([]);

  useEffect(() => {
    const fetchCityList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/location/?limit=1053');
        const cityDataList: ICityData[] = response.data.results.map((city: any) => ({
          name: city.name,
        }));

        setCityList(cityDataList);
      } catch (error) {
        console.error('Erro ao buscar lista de Pokémon:', error);
      }
    };

    fetchCityList();
  }, []);

  return (
    <Select id={`cidade`} {...register('cidade')}>
      <Option value="">Selecione sua cidade</Option>
      {cityList.map((city, index) => (
        <Option key={index} value={city.name}>{`${city.name}`}</Option>
      ))}
    </Select>
  );
};
