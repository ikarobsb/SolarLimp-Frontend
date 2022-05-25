import React from "react";
import './MenuHorizontal.css';
import {Link} from 'react-router-dom';


function MenuHorizontal() {
  return (
    <div className="MenuHorizontal">
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    
      <li class="nav-item">
        <a class="nav-link" href="/cidades">Cidades</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/cursos">Cursos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/produtos">Produtos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/candidatos">Candidatos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/telefones">Telefones</a>
      </li>
    
    </ul>
  </div>
</nav>
    </div>
  );
}

export default MenuHorizontal;
