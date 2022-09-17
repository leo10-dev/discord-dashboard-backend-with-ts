import axios from "axios";
import { API_URL } from '../../utils/constants';
import { PartialGuild } from "../../utils/types";
import { User } from '../../database/schemas';


export function getBotGuildsService() {
    const TOKEN = 'MTAxNTI0MjA1MjkzOTgyNTIyMg.GYakO5.T8iIhUi2VZDyAZUEoqhfl4ylDhqnP_V8hRDiIQ'
    return axios.get<PartialGuild[]>(`${API_URL}/users/@me/guilds`, {
      headers: { Authorization: `Bot ${TOKEN}` },
    });


  }


  export async function getUserGuildsService(id: string) {
    const user = await User.findById(id);
    if (!user) throw new Error('No user found');
    return axios.get<PartialGuild[]>(`${API_URL}/users/@me/guilds`, {
      headers: { Authorization: `Bearer ${user.accessToken}` },
    });
  }
  
  export async function getMutualGuildsService(id: string) {
    const { data: botGuilds } = await getBotGuildsService();
    const { data: userGuilds } = await getUserGuildsService(id);
    const adminUserGuilds = userGuilds.filter(
      ({ permissions }) => (parseInt(permissions) & 0x8) === 0x8
    );
    return adminUserGuilds.filter((guild) =>
      botGuilds.some((botGuild) => botGuild.id === guild.id)
    );
  }
  