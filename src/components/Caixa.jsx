import toast from "react-hot-toast";
import { useStorage } from "../store/UseStorege";
import Items from "./Items";
import { CircleXIcon } from "lucide-react";
import { useMediaQuery } from "@mui/material";
import { motion } from "motion/react";

const Caixa = ({ isOpen, openModal }) => {
    const isMobile = useMediaQuery("(max-width:1024px)")

    const notaAtual = useStorage(state => state.notaAtual)
    
    function onSubmit(e) {
        e.preventDefault();
        console.log(notaAtual)
        if (notaAtual === 0) return toast.error((t) => (
            <div className="flex items-center gap-x-3">
                <span>Selecione uma nota</span>
                <button onClick={() => toast.dismiss(t.id)} className="cursor-pointer">
                    <CircleXIcon className="text-gray-600" />
                </button>
            </div>
        ),{ 
            position: isMobile ? "top-center" : "top-left",
            duration: 3000
        })
        toast.dismiss()
        openModal()
    }

  return (
    // aparencia -> tamanho/espaçamento -> layout/estrutura
    <motion.div  
      initial={{ opacity: 0, scale: 0.97, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }} 
      transition={{ duration: 0.3 }} 
      className={`bg-[#1f2630] ${isOpen && "hidden"} rounded-2xl w-[90%] max-lg:landscape:w-[60%] lg:w-125 h-auto p-5`}
    >
      <form
        onSubmit={(infosDosEventos) => onSubmit(infosDosEventos)}
        className="font-medium gap-y-8 flex flex-col items-start justify-center text-left"
      >
        <div className="bg-[#272e38] rounded-full p-4">
          <img
            src="/interactive-rating/images/icon-star.svg"
            alt="star"
            className="w-auto h-auto"
          />
        </div>

        <h2 className="text-3xl">How did we do?</h2>

        <p className="text-gray-500 text-[17px]">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <Items />

        <button className="bg-[#fc7a14] transition-colors duration-300 hover:bg-white focus:bg-white outline-none rounded-full text-[18px] cursor-pointer uppercase text-gray-900 font-semibold w-full tracking-[2px] py-3.5">
          submit
        </button>
      </form>
    </motion.div>
  );
};

export default Caixa;
