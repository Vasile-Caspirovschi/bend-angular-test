import { Thing } from "./thing.model";

export interface Group{
    groupHead: Thing
    things: Thing[]
    groupId: number
}
