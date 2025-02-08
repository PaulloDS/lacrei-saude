"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const HeroSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f7f7f7;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  h1 {
    color: #018762;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #515151;
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled(Link)`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s;

  &.primary {
    background-color: #018762;
    color: white;

    &:hover {
      background-color: #016d4e;
    }
  }

  &.secondary {
    background-color: white;
    color: #018762;
    border: 2px solid #018762;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

export default function Home() {
  return (
    <>
      <HeroSection>
        <Container>
          <HeroContent>
            <h1>Cuidado acolhedor e inclusivo</h1>
            <p>
              Conectamos profissionais de saúde qualificados a pessoas
              LGBTQIAPN+ em busca de atendimento humanizado e livre de
              preconceitos.
            </p>
            <ButtonGroup>
              <Button href="/profissionais" className="primary">
                Sou Profissional
              </Button>
              <Button href="/buscar-profissionais" className="secondary">
                Buscar Profissional
              </Button>
            </ButtonGroup>
          </HeroContent>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
              alt="Profissional de saúde sorrindo"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </Container>
      </HeroSection>
    </>
  );
}
