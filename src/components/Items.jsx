import { useStorage } from "../store/UseStorege";

const Items = () => {
  const listItems = useStorage((state) => state.array);
  const changeActive = useStorage(state => state.changeActive)

  return (
    // aparencia -> tamanho/aparencia -> layout/estrutura
    <ul className=" h-auto w-full flex justify-between items-center">
      {listItems.map((ind) => (
        <button
        type="button"
        className={`bg-[#262f38] text-gray-400 hover:bg-[#ff760f] ${ind.isActive && "active"} focus:border-none  hover:text-gray-800 text-[18px] cursor-pointer font-bold rounded-full w-14 h-14 flex items-center justify-center`}
        key={ind.id}
        onClick={() => {changeActive(ind.id)}}
        >
          <li>{ind.id}</li>
        </button>
      ))}
    </ul>
  );
};

export default Items;
