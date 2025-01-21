import React from 'react';
import { BannerContainer, BannerText } from './Banner.styles';

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerText>Bem-vindo à nossa loja!</BannerText>
      <BannerText>Encontre os melhores produtos com descontos imperdíveis.</BannerText>
    </BannerContainer>
  );
}

export default Banner;
