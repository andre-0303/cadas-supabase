import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";
import styles from "./style.module.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Corrigido o nome do estado
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSignUp() {
    navigate("/cadastro");
  }

  function isDisabled() {
    return email === "" || password === "";
  }

  async function handleSignIn(event) {
    event.preventDefault();
    setLoading(true);

    try {
      console.log("Dados enviados para login:", { email, password });
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password, 
      });

      if (error) {
        console.error("Erro ao fazer login:", error.message);
        alert(`Erro ao fazer login: ${error.message}`);
        setLoading(false);
        return;
      }

      alert("Login com sucesso!");
      navigate("/home");
    } catch (err) {
      alert("Erro inesperado ao fazer login.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id={styles.container}>
      <form>
        <div id={styles.content}>
          <h1>Faça o seu Login</h1>

          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu email"
            className={styles.input}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="password" className={styles.label}>
            Senha:
          </label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            className={styles.input}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            type="submit"
            id={styles.acess}
            onClick={handleSignIn}
            disabled={isDisabled()}
          >
            {loading ? "Carregando" : "Acessar"}
          </button>

          <button
            type="button"
            id={styles.create}
            onClick={handleSignUp}
          >
            Sem conta? Criar conta
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
