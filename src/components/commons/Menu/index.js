import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from '../../../theme/Logo';

// Componente Menu
export default function Menu() {
    const links = [
        {
            texto: 'Home',
            url: '/',
        },
        {
            texto: 'Perguntas Frequentes',
            url: '/faq',
        },
        {
            texto: 'Sobre',
            url: '/sobre',
        },
    ]

  return(
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((links) => {
            return(
                <li>
                    <a href={links.url}>
                        {links.texto}
                    </a>
                </li>
            )
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>
            Entrar
        </button>
        <button>
            Cadastrar
        </button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}