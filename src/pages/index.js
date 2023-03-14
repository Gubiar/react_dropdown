import Dropdown from "@/components/Dropdown/Dropdown";
import { DropdownContext } from "@/context/DropdownContext";
import { useContext } from "react";

export default function Home() {
    const { selected, setSelected } = useContext(DropdownContext);

    const items = [
        { value: 1, label: "Item 1" },
        { value: 2, label: "Item 2" },
        { value: 3, label: "Item 3" },
    ];

    return (
        <>
            <Dropdown items={items} />
            <h1>Valor selecionado {selected ? selected.value : 'selecione'}</h1>
        </>
    );
}
