import { useState } from "react"
import Caixa from "./components/Caixa"
import Modal from 'react-modal'
import { useStorage } from "./store/UseStorege"
import { Toaster } from "react-hot-toast"
import { motion, AnimatePresence } from "motion/react"
function App() {

  Modal.setAppElement("#root")

  const [isOpen, setIsOpen] = useState(false)
  const notaAtual = useStorage(state => state.notaAtual)
  const resetarNota = useStorage(state => state.resetNota)
  const resetarAtivados = useStorage(state => state.resetActives)

  function closeModal() {
    setIsOpen(false)// fecha modal
    resetarNota()// reseta notas para impedir envios
    resetarAtivados()// reseta o arrya para tirar class 'active'
    document.body.focus()// remove o foco de tudo e coloca no body
  }

  const openModal = () => setIsOpen(true)

  return (// aparencia --> tamanho/espaçamento --> layout/estrutura
    <div className="bg-[#141519] text-white min-h-dvh w-full max-lg:landscape:py-20 flex justify-center items-center">
      <Toaster /> {/* sem isso, nada aparece */}
    
      { isOpen ? null : <Caixa isOpen={isOpen} openModal={openModal} /> } 

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}// ESC e click fora  
        overlayClassName={"bg-transparent max-lg:landscape:py-10 max-lg:landscape:overflow-scroll inset-0 fixed flex items-center max-lg:landscape:items-start justify-center"}// configuração do fundo 'FIXA'
        className={"bg-transparent"}//estilo da caixa
      >
      <AnimatePresence>
        <motion.div 
        initial={{ opacity: 0, scale: 0.97, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        exit={{  }} 
        transition={{ duration: 0.3}} className={"bg-[#1f2630] rounded-2xl border-none outline-none w-[90%] lg:w-125 max-lg:landscape:w-[60%] px-7 py-12"}>
          <div className="font-medium gap-y-7.5 text-center flex flex-col items-center justify-center">
            <div><img src="/interactive-rating/images/illustration-thank-you.svg" alt="" /></div>
            <div className="text-orange-500 bg-[#282e38] rounded-full px-4 py-2">You selected {notaAtual} out of 5</div>
            <h1 className="text-white text-4xl lg:text-3xl">Thank you!</h1>
            <p className="text-gray-400 text-[18px]">
              We appreciate you taking the time to give a rating. If vou ever need more support, don't hesitate to get in touch!
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      </Modal >
    </div>
  )
}

export default App
