import { Player } from "./PlayersTypes"

export type ServerSetting = {
    [key: string]: string | undefined;
};

export type ServerDataType = {
    players: Player[];
    server: ServerSetting[];
}