import { BrowserRouter } from 'react-router-dom';
import { Router } from "./Router";
import './tailwind-components.css'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
