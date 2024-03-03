import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../Form/Input";
import { Button } from "../Form/Button";
import { useForm } from "../../Hooks/useForm";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();


  const handleSubmit = (event) => {
    event.preventDefault();

    if(username.validate() && password.validate()) {
      fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    }
  };

  return (
    <section>
      <h3>Login</h3>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="userName" {...username}/>
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastrar</Link>
    </section>
  );
};
