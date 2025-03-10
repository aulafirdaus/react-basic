import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ProfileCard from './components/ProfileCard.tsx'
import ButtonLikeUnlike from './components/ButtonLikeUnlike.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <div style={{ display: 'flex', gap: '1em' }}>
      <ProfileCard image='.\src\assets\ava.png' name='John Doe' bio='I am a software developer' like={<ButtonLikeUnlike/>} />
      <ProfileCard image='.\src\assets\ava2.png' name='Aula Firdaus' bio='I am a Instructor' like={<ButtonLikeUnlike/>} />
      <ProfileCard image='.\src\assets\ava3.png' name='Alfis' bio='I am a Lead technology Lorem ipsum dolor sit amet consectetur adipisicing elit.' like={<ButtonLikeUnlike/>} />
    </div>
  </StrictMode>,
)
