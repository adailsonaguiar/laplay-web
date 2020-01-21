import React from 'react';
import { Container } from './styles';

const Load = () => {
  return (
    <Container viewBox='0 0 50 50'>
      <circle
        className='path'
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='4'
      />
    </Container>
  );
};

export default Load;
