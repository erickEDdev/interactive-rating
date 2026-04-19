import { create } from "zustand";

export const useStorage = create(set => ({
    notaAtual: 0,
    resetNota: () => set({ notaAtual: 0 }),
    array: [
        {id: 1, isActive: false},// objeto percorrido
        {id: 2, isActive: false},
        {id: 3, isActive: false},
        {id: 4, isActive: false},
        {id: 5, isActive: false}
    ],
    resetActives: () => set(state => ({ array: state.array.map(ind => ({
        ...ind,
        isActive: false
    })) })),
    changeActive: (id) => set(state => ({
        array: state.array.map(ind => ({// para cada indice/item -> renderiza...
        ...ind, // copia tudo que já tinha no indice/obj percorrido
        isActive: id === ind.id, //substitui só esse valor
    })),
        notaAtual: id
    }))
}))