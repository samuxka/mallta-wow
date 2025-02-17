import { Ban, CircleDollarSign, Gift, Rocket, User, UserRoundCheck } from "lucide-react";
import { useEffect, useState } from "react";
import serverDataJson from "../../database/mockStats.json"
import { Player } from "@/types/PlayersTypes";
import { ServerDataType, ServerSetting } from "@/types/ServerDataType";
import Link from "next/link";

function HomeStats() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [server, setServer] = useState<ServerSetting[]>([]);

    useEffect(() => {
        const serverData: ServerDataType = serverDataJson;
        setPlayers(serverData.players);
        setServer(serverData.server);
    }, []);

    const renderServerSettingIcon = (key: string) => {
        switch (key) {
            case "XP Rate":
                return <Rocket size={40} />;
            case "Drop Rate":
                return <Gift size={40} />;
            case "Gold Rate":
                return <CircleDollarSign size={40} />;
            case "Reputation":
                return <UserRoundCheck size={40} />;
            default:
                return <Ban size={40} />;
        }
    };

    return (
        <div
            className="w-full h-48 p-10 flex items-center justify-center"
        >
            <div
                className="h__stats-colums w-full h-full flex items-center justify-center"
            >
                <ul className="w-full flex items-center justify-evenly gap-3">
                    {players.map((player, index) => (
                        <div key={index}>
                            <p className="flex items-center justify-center gap-2">
                                <User size={40} />
                                {player.qtd}
                                <span className="relative w-2 h-2 rounded-full bg-green-400">
                                    <span className="absolute inset-0 rounded-full bg-green-400 animate-ping"></span>
                                </span>
                            </p>
                            <p>Players Online</p>
                        </div>
                    ))}

                    {server.map((setting, index) => (
                        <li key={index}>
                            <div>
                                {Object.keys(setting).map((key) => (
                                    <div key={key} className="server-setting ">
                                        <div className="flex items-center justify-center gap-2">
                                            <span>{renderServerSettingIcon(key)}</span>
                                            <p className="flex flex-col">
                                                {setting[key]}
                                            </p>
                                        </div>
                                        {key}
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}

                    <Link href="/" className="p-4 bg-zinc-50 text-zinc-900 rounded-sm shadow-md hover:bg-zinc-100">
                        Vote Now!
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default HomeStats
