import dbConnect from "../../../utils/dbConnect2";
import Blades from "../../../models/trimmer/TrimmerBlades";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      if (req.query.user === process.env.USER_SUB) {
        try {
          const blades = new Blades(req.body);
          blades.save().then(() => {
            res.send(blades);
          });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      } else {
        res.send("Uautorisert forespørsel");
      }
      break;
  }
};
