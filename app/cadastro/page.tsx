"use client";

import { UserRoundPlus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  font-size: 25px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #014c37;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #018762;
  }
`;

export default function CadastroProfissional() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    profissao: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Dados cadastrados:", formData);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>
          <UserRoundPlus size={30} />
          Cadastro de Profissional
        </Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="nome"
            placeholder="Nome"
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="profissao"
            placeholder="Profissão"
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handleChange}
            required
          />
          <Button type="submit">Cadastrar</Button>
          <Link href={"/login"} className="flex justify-center mt-4 text-gray-700">Já possui conta? Faça login</Link>
        </form>
      </FormWrapper>
    </Container>
  );
}
