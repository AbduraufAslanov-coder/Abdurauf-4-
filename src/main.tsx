import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import App2 from './App2'
import App3 from './App3.tsx'
import App4 from './App4.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <App2 />
<App3 />
<App4 />
  </StrictMode>,
)
