import React from 'react';
import styled from 'styled-components';

import BannerSlider from '../../components/BannerSlider/BannerSlider';
import Categories from '../../components/Categories/Categories';

const HomeWrapper = styled.div`
  width:  80%;
  margin: 0 auto;
  margin-top: 80px;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <BannerSlider />
      <Categories />
    </HomeWrapper>
  );
}

export default Home;