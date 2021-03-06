import React from 'react';
import { IndexHeader } from './style';

function Header() {
  return (
    <IndexHeader>
      <h1>e-commerce.com</h1>
      <nav>
          <a href="/">Home</a>
          <a href="/">Sobre</a>
          <a href="/">Novo Produto</a>
      </nav>
    </IndexHeader>
  );
}

export default Header;
