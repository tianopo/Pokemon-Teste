import axios from 'axios';
import { useEffect, useState } from "react";
import { CitySelect } from "../../app/components/Select/CidadeSelect";
import { PokemonSelect } from "../../app/components/Select/PokemonSelect";
import { RegionSelect } from "../../app/components/Select/RegiaoSelect";
import { ContainerFlexColumn, ContainerFlexRow, ContainerP12, ContainerP12300, ContainerP14, ContainerP32 } from "../../styles/ContainerRotas";
import { ButtonNewPokemon, ButtonPaga, Div, Divider, FlexCol, FlexR, FlexRowPaga, FlexTime, Form, Input, Label, Option, P12Black, P12Cinza, P14Terciary, P16Mais, P24, P8, Select } from "../../styles/consultaPagina";
import { DateResponse } from "../api/scheduling/date";

export default function Consulta() {
  const [quantidadePokemons, setQuantidadePokemons] = useState(1);
  const subtotal = 70.00 * quantidadePokemons;
  const taxa = subtotal * (3 / 100);
  const total = subtotal + taxa
  const [dates, setDates] = useState<string[]>([]);
  const [horarios, setHorarios] = useState<string[]>([]);

  const adicionarPokemon = () => {
    if (quantidadePokemons < 6) {
      setQuantidadePokemons((before) => before + 1);
    } else {
      setQuantidadePokemons(1)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DateResponse>('/api/scheduling/date');
        setDates(response.data);
      } catch (error) {
        console.error('Erro ao buscar datas:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/scheduling/time');
        setHorarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar datas:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ContainerFlexColumn>
        <ContainerFlexRow>
          <ContainerP12>Home</ContainerP12>
          <ContainerP12300>{">"}</ContainerP12300>
          <ContainerP12>Agendar Consulta</ContainerP12>
        </ContainerFlexRow>
        <ContainerP32>Agendar Consulta</ContainerP32>
        <ContainerP14>Recupere seus pokémons em 5 segundos</ContainerP14>
      </ContainerFlexColumn>
      <Div>
        <P24>Preencha o formulário abaixo para agendar sua consulta</P24>
        <Form>
          <FlexR>
            <FlexCol>
              <Label htmlFor="nome">Nome</Label>
              <Input placeholder="Digite seu nome" id="nome" name="nome" />
            </FlexCol>
            <FlexCol>
              <Label htmlFor="sobrenome">Sobrenome</Label>
              <Input placeholder="Digite seu sobrenome" id="sobrenome" name="sobrenome" />
            </FlexCol>
          </FlexR>
          <FlexR>
            <FlexCol>
              <Label htmlFor="regiao">Região</Label>
              <RegionSelect />
            </FlexCol>
            <FlexCol>
              <Label htmlFor="cidade">Cidade</Label>
              <CitySelect />
            </FlexCol>
          </FlexR>
          <FlexTime>
            <FlexCol>
              <P12Black>Cadastre seu time</P12Black>
              <P12Cinza>Atendemos até 06 pokémons por vez</P12Cinza>
            </FlexCol>
            {[...Array(quantidadePokemons)].map((_, index) => (
              <PokemonSelect key={`pokemon${index + 1}`} pokemonId={(index + 1).toString()} />
            ))}
            <ButtonNewPokemon type="button" onClick={adicionarPokemon}>
              <P12Black>
                {
                  quantidadePokemons === 6
                    ? "Retornar à Pokémon 01"
                    : "Adicionar novo pokémon ao time ..."
                }
              </P12Black>
              <P16Mais>{quantidadePokemons === 6 ? "" : "+"}</P16Mais>
            </ButtonNewPokemon>
            <FlexR>
              <FlexCol>
                <Label htmlFor="dataAtendimento">Data para Atendimento</Label>
                <Select id="dataAtendimento" name="dataAtendimento">
                  {dates.map((date, index) => (
                    <Option key={index} value={date}>
                      {date}
                    </Option>
                  ))}
                </Select>
              </FlexCol>
              <FlexCol>
                <Label htmlFor="horarioAtendimento">Horário de Atendimento</Label>
                <Select id="horarioAtendimento" name="horarioAtendimento">
                  {horarios.map((horario, index) => (
                    <Option key={index} value={horario}>
                      {horario}
                    </Option>
                  ))}
                </Select>
              </FlexCol>
            </FlexR>
            <Divider />
            <FlexCol>
              <FlexRowPaga>
                <P14Terciary>Número de pokémons a serem atendidos:</P14Terciary>
                <P14Terciary>{quantidadePokemons}</P14Terciary>
              </FlexRowPaga>
              <FlexRowPaga>
                <P14Terciary>Atendimento Unitário por pokémon:</P14Terciary>
                <P14Terciary>R$ 70,00</P14Terciary>
              </FlexRowPaga>
              <FlexRowPaga>
                <P14Terciary>Subtotal:</P14Terciary>
                <P14Terciary>
                  R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </P14Terciary>
              </FlexRowPaga>
              <FlexRowPaga>
                <P14Terciary>Taxa geracional*:</P14Terciary>
                <P14Terciary>
                  R$ {taxa.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </P14Terciary>
              </FlexRowPaga>
              <P8>
                *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%
              </P8>
            </FlexCol>
            <FlexRowPaga>
              <P24>
                Valor Total: R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </P24>
              <ButtonPaga>Concluir Agendamento</ButtonPaga>
            </FlexRowPaga>
          </FlexTime>
        </Form>
      </Div>
    </>
  );
}
