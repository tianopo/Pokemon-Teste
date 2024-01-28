import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { StyledImage, StyledLogo, StyledWrite } from "../../../../styles/componentLayout";

export const Logo = (): any => {
  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState(router.pathname === '/');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHomePage(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledLogo
      style={{
        width: !isHomePage ? "62px" : "259px",
        justifyContent: !isHomePage ? "center" : "space-around",
        transition: "width 1s ease"
      }}
      onMouseEnter={() => setIsHomePage(true)}
      onMouseLeave={() => setIsHomePage(false)}
    >
      <StyledImage src="/images/white-pokeball.svg" alt='pokebola' />
      <StyledWrite
        style={{
          opacity: !isHomePage ? 0 : 1,
          transition: "opacity 2s ease"
        }}
      >
        {!isHomePage ? "" : "Centro Pokémon"}
      </StyledWrite>
    </StyledLogo>
  );
};
