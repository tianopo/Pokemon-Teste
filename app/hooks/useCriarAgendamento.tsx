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
}

export const useCriarAgendamento = () => {
  const consultaSchema = Yup.object().shape({
    nome: Yup.string().required(),
    sobrenome: Yup.string().required(),
    regiao: Yup.string().required(),
    cidade: Yup.string().required(),
    dataAtendimento: Yup.string().required(),
    horarioAtendimento: Yup.string().required(),
    timePokemons: Yup.array()
      .of(Yup.object().shape({
        pokemon: Yup.string().required(),
      }))
      .required('É necessário ter pelo menos 1 pokémon no time')
      .max(6, 'O time não pode ter mais do que 6 pokémons')
  });

  const contexto = useForm<ICriarAgendamentoSchema>({
    resolver: yupResolver(consultaSchema),
    reValidateMode: "onChange",
  });

  return { contexto };
}