"use client";

import styled from "styled-components";
import Link from "next/link";
import { Heart } from "lucide-react";
import Image from "next/image";

const HeaderContainer = styled.header`
  background-color: #018762;
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <Link href={"/"}>
            <Image
              src="/logo-lacrei.png"
              alt="Logo Lacrei Saúde"
              width={200}
              height={0}
            />
          </Link>
        </Logo>
        <NavLinks>
          <NavLink href="/">Início</NavLink>
          <NavLink href="/profissionais">Profissionais</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}
