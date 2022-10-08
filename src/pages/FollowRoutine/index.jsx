import Detalhes from "./Detalhes"
import Header from "../../components/Header"
export function FollowRoutine() {
  return (
    <div>
      <Header/>
      <header className=" container  h-20 border-b border-gray-300 flex items-center justify-around">
        <h3 className="text-2xl">Acompanhe sua rotina</h3>
        <div className="flex items-center ">
          <div className="h-9 w-9 rounded-full  bg-pmblue mr-2 flex items-center justify-center">
            <p className="text-white">P</p>
          </div>
          <h3>Pague Menos</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </header>

      <div className="flex justify-around mt-8 items-center">
        <h3 className="text-sm">ROTINAS EM ANDAMENTO (2)</h3>
        <button className=" bg-pmblue py-2 px-4 text-white rounded-md text-sm flex items-center">
          Nova Rotina
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" ml-2 w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
          </svg>

        </button>
      </div>
      
      <div className="flex justify-center mt-9 overflow-hidden">
        <section className="w-3/3 md:w-2/3 h-auto shadow-my">
          <div className="p-4 flex justify-between mx-4 border-b border-gray-200" >
            <h2 className=" font-semibold">DORFLEX</h2>
            <div className="flex">
              <input type="radio" />
              <h3 className="mx-2">Ativar notificação</h3>
            </div>
          </div>
          <div className="lg:flex  lg:justify-between">
          <div className="p-4 mx-4 md:flex">
            <div className="mx-3 py-2 lg:py-0">
              <h5 className="mb-1 text-gray-500 text-sm">QUANTIDADE</h5>
              <h5 className=" text-gray-600 font-bold text-sm"> 5 CAIXAS</h5>
            </div>
            <div className="mx-3 py-2 lg:py-0">
              <h5 className="mb-1 text-gray-500 text-sm">TÉRMINO DE TRATAMENTO</h5>
              <h5 className=" text-gray-600 font-bold text-sm"> 5 CAIXAS</h5>
            </div>
            <div className="mx-3 py-2 lg:py-0">
              <h5 className="mb-1 text-gray-500 text-sm">HORÁRIO</h5>
              <h5 className=" text-gray-600 font-bold text-sm"> 5 CAIXAS</h5>
            </div>
            <div className="mx-3 py-2 lg:py-0">
              <h5 className="mb-1 text-gray-500 text-sm">JÁ TOMOU HOJE ?</h5>
              <h5 className=" text-gray-800 font-bold text-sm"> 5 CAIXAS</h5>
            </div>
          </div>
          <p className=" ml-10 mr-10 mt-2 text-blue-600">Ocultar detalhes</p>
          </div>
          <div>
          <Detalhes/>
          </div>
        </section>
      </div>

    </div>
  )
}