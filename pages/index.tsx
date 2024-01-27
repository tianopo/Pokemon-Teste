import styled from 'styled-components';

const HeroSection: any = styled.div`
  position: relative;
  overflow: hidden;
`;

const HeroImage: any = styled.img`
  width: 100%;
  height: 720px;
  display: block;
`;

const HeroText: any = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  color: white;
`;

export default function Home() {

  return (
    <HeroSection>
      <HeroImage src="/images/pokemon-hero.jpg" alt="Banner da ilha de pokémons" />
      <HeroText>Cuidamos bem do seu pokémon, para ele cuidar bem de você</HeroText>
    </HeroSection>
  );
}
