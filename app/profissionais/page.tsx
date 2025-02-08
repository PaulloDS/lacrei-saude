'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Section = styled.section`
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h1`
  color: #018762;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`

const CardContent = styled.div`
  padding: 1.5rem;

  h3 {
    color: #018762;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: #515151;
    margin-bottom: 1rem;
  }
`

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #018762;
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #016d4e;
  }
`

export default function Profissionais() {
  return (
    <Section>
      <Container>
        <Title>Faça parte da nossa rede de profissionais</Title>
        <Grid>
          <Card>
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
              alt="Cadastro"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <CardContent>
              <h3>Cadastre-se</h3>
              <p>Crie seu perfil profissional e comece a atender pacientes LGBTQIAPN+.</p>
              <Button href="/cadastro">Criar Conta</Button>
            </CardContent>
          </Card>
          <Card>
            <Image
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80"
              alt="Atendimento"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <CardContent>
              <h3>Atenda</h3>
              <p>Ofereça atendimento humanizado e faça a diferença na vida das pessoas.</p>
              <Button href="/login">Fazer Login</Button>
            </CardContent>
          </Card>
          <Card>
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
              alt="Gestão"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <CardContent>
              <h3>Gerencie</h3>
              <p>Organize sua agenda e gerencie seus atendimentos de forma simples.</p>
              <Button href="/dashboard">Acessar Dashboard</Button>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </Section>
  )
}