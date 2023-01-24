import dbConnect from "../../../../utils/dbConnect";
import Blades from "../../../../models/NewBlades";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "DELETE":
      if (req.query.user === process.env.USER_SUB) {
        try {
          const blade = await Blades.deleteMany({
            updated: { $lt: new Date("2021-12-31") },
          });
          if (!blade) return res.status(404).send();
          res.send(blade);

          // res.status(200).json({ success: true, data: blade });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      } else {
        res.send("Uautorisert forespørsel");
      }
      break;
  }
};
