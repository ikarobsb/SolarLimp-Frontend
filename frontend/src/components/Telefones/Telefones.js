import React from "react";
import './Telefones.css';
import { useEffect, useState } from "react";
import api from "../../services/api";

function handleDelete(id) {
  api.delete(`/telefones/${id}`);
  window.location.reload();
  window.alert('Registro excluído com sucesso!');
}

function Telefones() {
  const [telefones, setTelefones] = useState([]);

  useEffect(() => {
    api.get('telefones')
    .then(response => setTelefones(response.data))
  }, []);

  return (
    <div className="Telefones">
      <legend>Registros de Telefones Cadastrados</legend>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do Proprietário</th>
            <th>DDD (código de área)</th>
            <th>Número</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {telefones.map(telefones => (
            <tr key={telefones.id}>
              <td>{telefones.id}</td>
              <td>{telefones.tel_proprietario}</td>
              <td>{telefones.tel_ddd}</td>
              <td>{telefones.tel_numero}</td>
              <td>{telefones.tel_tipo}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(telefones.id)}>
                Excluir</button>
              </td>
            </tr>
          ))}         
        </tbody>
      </table>
      <a className='btn btn-secundary' onClick={() => window.history.back()}>Voltar</a>
    </div>
  );
}

export default Telefones;
