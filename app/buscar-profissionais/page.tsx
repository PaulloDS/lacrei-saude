"use client";

import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const ProfissionaisContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

export default function BuscarProfissionais() {
  const [search, setSearch] = useState("");
  const [profissionais] = useState([
    { id: 1, nome: 'Dra. Ana Silva', especialidade: 'Psicologia' },
    { id: 2, nome: 'Dr. João Souza', especialidade: 'Clínico Geral' },
    { id: 3, nome: 'Dra. Carla Mendes', especialidade: 'Dermatologia' },
    { id: 4, nome: 'Dr. Lucas Pereira', especialidade: 'Ortopedia' },
    { id: 5, nome: 'Dra. Beatriz Lima', especialidade: 'Cardiologia' },
    { id: 6, nome: 'Dr. Rafael Castro', especialidade: 'Neurologia' },
    { id: 7, nome: 'Dra. Fernanda Oliveira', especialidade: 'Pediatria' },
    { id: 8, nome: 'Dr. Henrique Martins', especialidade: 'Psiquiatria' },
  ]);

  const filteredProfissionais = profissionais.filter((profissional) =>
    profissional.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ProfissionaisContainer>
      <h2 className="text-2xl font-bold mb-2">Buscar Profissional</h2>
      <SearchBar
        type="text"
        placeholder="Digite o nome do profissional..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <List>
        {filteredProfissionais.map((profissional) => (
          <Link href={`/profissional/${profissional.id}`}>
              <ListItem key={profissional.id}>
                {profissional.nome} - {profissional.especialidade}
              </ListItem>
          </Link>
        ))}
      </List>
    </ProfissionaisContainer>
  );
}
