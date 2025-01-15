import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import styles from "./style.module.css";
import Marcela from '../../../assets_copy/meu-amor.jpg';
import Ronilson from '../../../assets_copy/ronilson.png';
import Zidane from '../../../assets_copy/zidane.png';

export default function Home() {
  async function handleLogOut() {
    const { data, error } = await supabase.auth.signOut();

    if (error) {
      alert(`Erro ao fazer logout: ${error.message}`);
      return;
    }
    alert("Deslogado com sucesso!");
  }

  return (
    <div id={styles.container}>
      <h1 style={{textAlign:"center", marginTop:"20px", marginBottom:"20px"}}>Veja meus Heróis</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
            <img src={Marcela} alt="my-hero"/>
            <div className={styles.cardBody}>
                <h5>Meu amor, Marcela</h5>
            </div>
        </div>

        <div className={styles.card}>
            <img src={Ronilson} alt="my-hero"/>
            <div className={styles.cardBody}>
                <h5>Ronilson, prefeito</h5>
            </div>
        </div>
        <div className={styles.card}>
            <img src={Zidane} alt="my-hero"/>
            <div className={styles.cardBody}>
                <h5>Zidane</h5>
            </div>
        </div>

      </div>
      <div className={styles.buttonContainer}>
        <button id={styles.logout} onClick={handleLogOut}>Sair da conta</button>
      </div>
    </div>
  );
}
