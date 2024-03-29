import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Yup from "../utils/Yup";

export interface ICriarAgendamentoSchema {
  nome: string;
  sobrenome: string;
  regiao: string;
  cidade: string;
  dataAtendimento: string;
  horarioAtendimento: string;
  timePokemons: { pokemon: string }[];
  total?: number;
}

export const useCriarAgendamento = () => {
  const consultaSchema = Yup.object().shape({
    nome: Yup.string().required().label('Nome'),
    sobrenome: Yup.string().required().label('Sobrenome'),
    regiao: Yup.string().required().label('Regiao'),
    cidade: Yup.string().required().label('Cidade'),
    timePokemons: Yup.array()
      .of(Yup.object().shape({
        pokemon: Yup.string().required(),
      }))
      .required('É necessário ter pelo menos 1 pokémon no time')
      .max(6, 'O time não pode ter mais do que 6 pokémons')
      .label('pokemon'),
    dataAtendimento: Yup.string().required().label('Data de Atendimento'),
    horarioAtendimento: Yup.string().required().label('Horario de Atendimento'),
    total: Yup.number().optional().label('Total')
  });

  const contexto = useForm<ICriarAgendamentoSchema>({
    resolver: yupResolver(consultaSchema),
    reValidateMode: "onChange",
  });

  return { contexto };
}