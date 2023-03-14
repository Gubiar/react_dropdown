import Dropdown from "@/components/Dropdown/Dropdown";
import { DropdownContext } from "@/context/DropdownContext";
import { useContext } from "react";

export default function Home() {
    const { selected, setSelected } = useContext(DropdownContext);

    const items = [
        { value: "portugues", label: "Português", sigla: 'pt-BR' },
        { value: "espanhol", label: "Español" , sigla: 'es-PY'},
    ];

    return (
        <>
            <Dropdown items={items} />
            <h1>Valor selecionado {selected ? selected.value : 'selecione'}</h1>
        </>
    );
}
