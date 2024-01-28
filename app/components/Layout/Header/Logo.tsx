import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { StyledImage, StyledLogo, StyledWrite } from "../../../../styles/componentLayout";

export const Logo = (): any => {
  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState<boolean>(router.pathname === '/' || true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (router.pathname === '/') {
      const timer = setTimeout(() => setIsHomePage(false), 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <StyledLogo
      style={{
        width: isHovered || isHomePage ? "259px" : "62px",
        justifyContent: isHovered || isHomePage ? "space-around" : "center",
        transition: "width 1s ease"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push('/')}
    >
      <StyledImage src="/images/white-pokeball.svg" alt='pokebola' />
      <StyledWrite
        style={{
          opacity: isHovered || isHomePage ? 1 : 0,
          transition: "opacity 2s ease"
        }}
      >
        {isHomePage || isHovered ? "Centro Pokémon" : ""}
      </StyledWrite>
    </StyledLogo>
  );
};
