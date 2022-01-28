import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

function Title(props) {
    console.log(props);
    const Tag = props.tag || 'h1';
    return (
        <>
              <Tag>{props.children}</Tag>
              <style jsx>{`
              ${Tag} {
                    color: white;
                    font-size: 24px;
                    font-weight: 600;
                }
                `}</style>
        </>
    );
}

/*/ Componentes React
function HomePage() {
    // JSX
    return(
        <div>
            <GlobalStyle/>
            <Title tag="h2">Boas vindas de volta!</Title>
            <h2>Discord - Alura Matrix</h2>
        </div>
    
    )
}
    export default HomePage*/

    export default function PaginaInicial() {
       // const username = 'joaovitorcorrea132';
        const [username, setUsername] = React.useState('joaovitorcorrea132');
        const roteamento = useRouter();
      
        return (
          <>
            <Box
              styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/07/earthrise-1536x864.jpg)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
              }}
            >
              <Box
                styleSheet={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: {
                    xs: 'column',
                    sm: 'row',
                  },
                  width: '100%', maxWidth: '700px',
                  borderRadius: '30px', padding: '32px', margin: '16px',
                  boxShadow: '0 2px 30px 0 rgb(225 225 225 / 100%)',
                  backgroundColor: appConfig.theme.colors.neutrals[700],
                }}
              >
                {/* Formulário */}
                <Box
                  as="form"
                  onSubmit ={function (infosDoEvento) {
                    infosDoEvento.preventDefault();
                    console.log('Alguém submeteu o form');
                    roteamento.push('/chat')
                 //   window.location.href = '/chat';
                  }}
                    
                  styleSheet={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                  }}
                >
                  <Title tag="h2">Boas vindas de volta!</Title>
                  <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                    {appConfig.name}
                  </Text>

                <TextField
                 type="text"
                 value={username}
                 onChange={function (event){
                   console.log("usuario Digitou", event.target.value);
                   //Onde ta o valor?
                   const valor = event.target.value;
                   // Trocar o valor da variavel
                   setUsername(valor);
                 }}
                    fullWidth
                    textFieldColors={{
                      neutral: {
                        textColor: appConfig.theme.colors.neutrals[200],
                        mainColor: appConfig.theme.colors.neutrals[900],
                        mainColorHighlight: appConfig.theme.colors.primary[500],
                        backgroundColor: appConfig.theme.colors.neutrals[800],
                      },
                    }
                  }
                />
                  <Button
                    type='submit'
                    label='Entrar'
                    fullWidth
                    buttonColors={{
                      contrastColor: appConfig.theme.colors.neutrals["000"],
                      mainColor: appConfig.theme.colors.primary[500],
                      mainColorLight: appConfig.theme.colors.primary[400],
                      mainColorStrong: appConfig.theme.colors.primary[600],
                    }}
                  />
                </Box>
                {/* Formulário */}
      
      
                {/* Photo Area */}
                <Box
                  styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '200px',
                    padding: '16px',
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                    border: '1px solid',
                    borderColor: appConfig.theme.colors.neutrals[999],
                    borderRadius: '10px',
                    flex: 1,
                    minHeight: '240px',
                  }}
                >
                  <Image
                    styleSheet={{
                      borderRadius: '50%',
                      marginBottom: '16px',
                    }}
                    src={`https://github.com/${username}.png`}
                  />
                  <Text
                    variant="body4"
                    styleSheet={{
                      color: appConfig.theme.colors.neutrals[200],
                      backgroundColor: appConfig.theme.colors.neutrals[900],
                      padding: '3px 10px',
                      borderRadius: '1000px'
                    }}
                  >
                    {username}
                  </Text>
                </Box>
                {/* Photo Area */}
              </Box>
            </Box>
          </>
        );
      }