import { QueryResolver } from "./queryResolver";

export function Query() {
    return (target: any) => { QueryResolver.getInstance().register(target.name, target) };
}