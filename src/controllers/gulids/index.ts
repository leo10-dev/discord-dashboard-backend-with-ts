
import { Request , Response } from "express"
import { User } from "../../database/schemas/User";
import { getBotGuildsService, getMutualGuildsService, getUserGuildsService } from "../../services/gulids"

export async function getGulidsController(req : Request , res : Response) {
  const user = req.user as User
  try {
  //  const { data : botGuilds} = await getBotGuildsService();
   // const {data: userGuilds} = await getUserGuildsService(user.id);
   const guilds = await getMutualGuildsService(user.id);
    res.send({
      //botGuilds ,
     // userGuilds
     guilds
    })
  } catch (err) {
    console.log(err)
   // res.status(400).send(err)
  }
}