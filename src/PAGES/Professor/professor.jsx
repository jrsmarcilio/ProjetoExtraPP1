import React from "react";
import * as s from "./styleprof";

import Logo from "./../../img/Logo.png";
import IFPE from "./../../img/IFPE.png";

export default function Professor() {
  //gravar disciplina
  function gravar() {
    let campos = document.querySelectorAll(".gravar_");

    let fields = []
    let values = []

    for (let i = 0; i < campos.length; i++) {
      const field = campos[i].id;
      const element = campos[i].value;

      fields.push(field);
      values.push(element);

    }
    let obj = {
      ids: fields,
      valores: values
    }
    console.log("obj", obj);
  }

  function novo() {
    document.querySelectorAll('.apagar_').forEach(e => {
      e.value = '';
    })
  }

  return (
    <s.Geral>
      <s.Pagina>
        <img src={Logo} />

        <h1>PROFESSOR</h1>
        <s.Box>
          <s.BoxForm>
            <s.InputBox>
              <input className="gravar_ apagar_" title="id:" id="id" />
            </s.InputBox>
            <s.InputBox>
              <input className="gravar_ apagar_" title="Nome:" id="nome" />
            </s.InputBox>
            <s.InputBox>
              <input
                className="gravar_ apagar_"
                title="Data Nascimento:"
                type="date"
                id="dataNasc"
              />
            </s.InputBox>
            <s.InputBox>
              <input className="gravar_ apagar_" title="CPF:" id="cpf" />
            </s.InputBox>
            <s.InputBox>
              <input className="gravar_ apagar_" title="RG:" id="rg" />
            </s.InputBox>
          </s.BoxForm>
          
          <s.BoxForm>
            <h3>ENDEREÇO</h3>
            <s.InputBox>
              <input className="gravar_ apagar_" title="cep" id="cep" />
            </s.InputBox>
            <s.InputBox>
              <input className="gravar_ apagar_" title="logradouro:" id="logradouro" />
            </s.InputBox>
            <s.InputBox>
              <input
                className="gravar_ apagar_"
                title="numero:"
                id="numero"
              />
            </s.InputBox>
            <s.InputBox>
              <input className="gravar_ apagar_" title="bairro:" id="bairro" />
            </s.InputBox>
            <s.InputBox>
              <input className="gravar_ apagar_" title="cidade:" id="cidade" />
            </s.InputBox>
            <s.InputBox>
              <input className="gravar_ apagar_" title="uf:" id="uf" />
            </s.InputBox>
          </s.BoxForm>
          <s.BotaoDiv onClick={() => gravar()}>
            <h2>Gravar</h2>
          </s.BotaoDiv>
          <s.BotaoDiv onClick={() => novo()}>
            <h2>Novo</h2>
          </s.BotaoDiv>
        </s.Box>
      </s.Pagina>
    </s.Geral>
  );
}