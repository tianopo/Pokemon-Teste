import axios from 'axios';
import { useEffect, useState } from 'react';
import { Option, Select } from "../../../styles/consultaPagina";

interface IPokemonData {
  name: string;
}

interface IPokemonSelect {
  pokemonId: string;
}

export const PokemonSelect = ({ pokemonId }: IPokemonSelect): any => {
  const [pokemonList, setPokemonList] = useState<IPokemonData[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1277');
        const pokemonDataList: IPokemonData[] = response.data.results.map((pokemon: any) => ({
          name: pokemon.name,
        }));

        setPokemonList(pokemonDataList);
      } catch (error) {
        console.error('Erro ao buscar lista de Pokémon:', error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <Select id={`pokemon${pokemonId}`} name={`pokemon${pokemonId}`}>
      {pokemonList.map((pokemon) => (
        <Option key={pokemon.name} value={pokemon.name}>{`${pokemon.name}`}</Option>
      ))}
    </Select>
  );
};
