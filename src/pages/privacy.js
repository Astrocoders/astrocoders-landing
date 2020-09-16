import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'gatsby-plugin-intl'

import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import Text from '../components/Text'
import Wrapper from '../components/Wrapper'

const ContactWrapper = styled.section`
  padding: 50px 0;
`

const PrivacyPage = () => (
  <PageWrapper>
    <ContactWrapper>
      <Wrapper alignItems="center" justifyContent=" center">
        <Title align="center" transform="uppercase" withStripe marginBottom="50px">
          <FormattedMessage id="joinUs" />
        </Title>
        <Text align="center" marginBottom="50px">
          A privacidade dos visitantes da Astrocoders é muito importante para nós.

          Reconhecemos a relevância da privacidade. Seus dados pessoais não serão comercializados, distribuídos ou compartilhados com terceiros, exceto em casos de cumprimento de ordens judiciais.

          Todas as informações pessoais relativas a membros, assinantes, clientes ou visitantes que usem os serviços da Astrocoders serão tratadas em concordância com a Lei da Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei n.º 67/98).

          Os dados relativos a pagamentos utilizados nas compras nunca são armazenados em nossos servidores, e as senhas são armazenadas em bancos de dados na sua forma criptografada.

          Informações submetidas em nossas páginas de contato são utilizadas pela equipe de suporte ao cliente apenas para a finalidade de ajuda e não serão compartilhadas.

          O seu endereço de e-mail está seguro e nunca será compartilhado; nós detestamos o spam e protegemos a sua privacidade 100%.
        </Text>
        <a style="display: none;" href="/kemel_privacidade.pdf">Privacidade Kemel</a>
      </Wrapper>
    </ContactWrapper>
  </PageWrapper>
)

export default PrivacyPage
