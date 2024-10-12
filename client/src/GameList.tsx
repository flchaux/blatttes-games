import { useQuery } from "@tanstack/react-query";
import DraggableList from "./DraggableList";

export function GameList() {
    const result = useQuery({
        queryKey: ['games'], queryFn: async () => {
            return fetch('/query?q=GetGames').then(res => res.json());
        }
    })
    console.log(result)
    return <DraggableList items={result.data ?? []} onDragEnd={(data) => {
        console.log(data);
    }} />;
}