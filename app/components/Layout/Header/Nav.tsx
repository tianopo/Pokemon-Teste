import { useRouter } from "next/router";
import { StyledButton, StyledFlexRow, StyledWriteNav } from "../../../../styles/componentLayout";

export const Nav = (): any => {
  const router = useRouter();

  return (
    <StyledFlexRow>
      <StyledWriteNav onClick={() => router.push('/quem-somos')}>Quem Somos</StyledWriteNav>
      <StyledButton onClick={() => router.push('/agendar/consulta')}>Agendar Consulta</StyledButton>
    </StyledFlexRow>
  );
}