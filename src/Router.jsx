import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CreateRoutine } from './pages/CreateRoutine';
import { FollowRoutine } from './pages/FollowRoutine';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/criar-rotina' element={<CreateRoutine />} />
      <Route path='/acompanhar-rotina' element={<FollowRoutine />} />
    </Routes>
  )
}