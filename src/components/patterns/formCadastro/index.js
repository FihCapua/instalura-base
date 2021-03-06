import React from 'react';
import { Lottie } from '@crello/react-lottie';
import { Grid } from '../../foundation/layout/Grid';
import { Box } from '../../foundation/layout/Box';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import successAnimation from './animation/success.json';
import errorAnimation from './animation/error.json';

// Passando todos os possíveis estados que o componente pode ter
const formState = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formState.DEFAULT);

  const [userInfo, setUserInfo] = React.useState({
    user: '',
    nome: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.user.length === 0 || userInfo.nome.length === 0;

  return (
    <form onSubmit={(event) => {
      event.preventDefault();

      setIsFormSubmited(true);

      // Data Transfer Object
      const userDTO = {
        username: userInfo.user,
        name: userInfo.nome,
      };

      fetch('https://instalura-api.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Corpo - converte Objeto em String JSON
        body: JSON.stringify(userDTO),
      })
        .then((respostaDoServidor) => {
          if (respostaDoServidor.ok) {
            return respostaDoServidor.json();
          }

          throw new Error('Não foi possível cadastrar seu usuário agora =(');
        })
        .then((respostaConvertidaEmObjeto) => {
          setSubmissionStatus(formState.DONE);
          // eslint-disable-next-line no-console
          console.log(respostaConvertidaEmObjeto);
        })
        // Se der erro em qualquer ponto da promisse - retorna o Error
        .catch((error) => {
          setSubmissionStatus(formState.ERROR);
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudo que está
        rolando, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="Usuário"
          name="user"
          value={userInfo.user}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>

      {isFormSubmited && submissionStatus === formState.DONE && (
        <Box
          display="flex"
          justifyContent="center"
          margin="15px 0"
        >
          <Lottie
            width="50px"
            height="50px"
            className="lottie-container basic"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
          <p>Dados enviados com sucesso</p>
        </Box>
      )}

      {isFormSubmited && submissionStatus === formState.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
          margin="15px 0"
        >
          <Lottie
            width="50px"
            height="50px"
            className="lottie-container basic"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
          <p>Erro no envio dos dados</p>
        </Box>
      )}

    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          margin={{
            xs: '-10px',
            md: '-10px 0',
          }}
          backgroundColor="white"
            // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
