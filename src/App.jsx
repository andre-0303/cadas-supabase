import { Outlet } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {supabase} from './lib/supabaseClient'


function App() {
  const navigate = useNavigate();
  useEffect(() =>{
    supabase.auth.onAuthStateChange((_event, session) => {
      if(session){
        console.log(session.user);
        navigate('/home');
        return;
      }

      navigate('/');
    })
  }, [])
  return (
    <>
     <Outlet/>
    </>
  )
}

export default App
