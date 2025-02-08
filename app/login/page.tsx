"use client";

import { Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #f3f7ff;
  font-family: "Arial", sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  max-width: 900px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #f5bcbc, #d9c4ee);
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 0 35px;
`;

const FormSection = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 25px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007756;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #014c37;
  }
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialButton = styled.button`
  background: none;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #f3f3f3;
  }
`;

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Login realizado:", formData);
  };

  return (
    <Container>
      <Wrapper>
        <ImageSection>
          <img src="/profissional.png" alt="Login Illustration" width="100%" />
        </ImageSection>
        <FormSection>
          <Title>Olá, Profissional</Title>
          <Subtitle>Faça o login para acessar ao painel</Subtitle>
          <form onSubmit={handleSubmit} data-testid="login-form">
            <Input
              data-testid="email-input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <Input
              data-testid="password-input"
              type="password"
              name="senha"
              placeholder="Senha"
              onChange={handleChange}
              required
            />
            <Button data-testid="login-button" type="submit">
              Login
            </Button>
            <Link
              href={"/cadastro"}
              className="flex justify-center mt-4 text-gray-700"
            >
              Não possui conta? Faça seu cadastro
            </Link>
          </form>
          <SocialLogin>
            <SocialButton data-testid="facebook-login">
              <Facebook color="#3B5998" size={20} />
            </SocialButton>
            <SocialButton data-testid="twitter-login">
              <Twitter color="#1DA1F2" size={20} />
            </SocialButton>
          </SocialLogin>
        </FormSection>
      </Wrapper>
    </Container>
  );
}
