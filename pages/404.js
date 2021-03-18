/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Lottie } from '@crello/react-lottie';
import constructAnimation from './animation/page-construction.json';
import { Box } from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';

export default function Page404() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      margin="-110px 0"
    >
      <Lottie
        width="800px"
        height="550px"
        display="flex"
        justifyContent="center"
        className="lottie-container basic"
        config={{ animationData: constructAnimation, loop: true, autoplay: true }}
      />

      <Text
        variant="title"
        tag="h1"
        color="tertiary.light"
        margin="50px 0"
        width="710px"
        textAlign="center"
      >
        Ooops<br />
        Não há ninguém aqui além dos construtores. Volte mais tarde!
      </Text>
    </Box>
  );
}
