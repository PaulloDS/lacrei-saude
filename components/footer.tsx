'use client'

import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: #018762;
  color: white;
  padding: 2rem;
  margin-top: auto;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const FooterText = styled.p`
  margin: 0;
  font-size: 0.875rem;
`

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          © {new Date().getFullYear()} Lacrei Saúde. Todos os direitos reservados.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  )
}