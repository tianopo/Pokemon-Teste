import axios from 'axios';
import { useEffect, useState } from 'react';
import { Option, Select } from "../../../styles/consultaPagina";

interface IRegionData {
  name: string;
}

export const RegionSelect = (): any => {
  const [regionList, setRegionList] = useState<IRegionData[]>([]);

  useEffect(() => {
    const fetchRegionList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/region/?limit=10');
        const regionDataList: IRegionData[] = response.data.results.map((region: any) => ({
          name: region.name,
        }));

        setRegionList(regionDataList);
      } catch (error) {
        console.error('Erro ao buscar lista de Pokémon:', error);
      }
    };

    fetchRegionList();
  }, []);

  return (
    <Select id={`regiao`} name={`regiao`}>
      {regionList.map((region, index) => (
        <Option key={index} value={region.name}>{`${region.name}`}</Option>
      ))}
    </Select>
  );
};
