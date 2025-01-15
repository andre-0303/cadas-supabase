import React, { useEffect } from "react";
import styles from './styles.module.css';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { supabase } from "../../../lib/supabaseClient";

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleSingIn(){
        navigate('/');
    }

    function validationDisabled(){
        if(email === "" || password === ""){
            return true;
        }else{
            return false;
        }
    }

    async function handleSingUp(event){
        console.log(email, password)
        event.preventDefault();
        const {data, error} = await supabase.auth.signUp({
            email:email,
            password:password,
        });

        if(error){
            alert(`Erro ao fazer cadastro ${error.message}`);
            return;
        }
        
        alert('Cadastro realizado com sucesso!');
        navigate('/');
    }

    
    return ( 
        <div id={styles.container}>
            <form>
                <div id={styles.content}>
                <h1>Faça o seu cadastro</h1>

                <label htmlFor="email" className={styles.label}>Email:</label>
                <input type="text" placeholder="Digite seu email" className={styles.input} onChange={(event) => {setEmail(event.target.value)}}/>
                
                <label htmlFor="password" className={styles.label}>Senha:</label>
                <input type="password" placeholder="Digite sua senha" className={styles.input} onChange={(event) => {setPassword(event.target.value)}}/>

                <button type="submit" id={styles.acess} onClick={handleSingUp} disabled={validationDisabled()}>Criar conta</button>

                <button type="button" id={styles.create} onClick={handleSingIn}>Já tem uma conta? Faça seu login</button>
                </div>
            </form>
        </div>
     );
}
 
export default SignUp;