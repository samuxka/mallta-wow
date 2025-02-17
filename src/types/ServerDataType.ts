import { Player } from "./PlayersTypes"

export type ServerSetting = {
    [key: string]: string;
};

export type ServerDataType = {
    players: Player[];
    server: ServerSetting[];
}