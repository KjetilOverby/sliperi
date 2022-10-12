import dbConnect from "../../../utils/dbConnect";
import Toolswaste from "../../../models/Toolswaste";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const toolswaste = await Toolswaste.aggregate([
          {
            $match: {
              date: {
                $gte: new Date(
                  `${req.query.yearRequest}-${req.query.month}-${req.query.day}`
                ),
                $lte: new Date(
                  `${req.query.yearRequest2}-${req.query.month2}-${req.query.day2}`
                ),
              },
            },
          },
       
        ]).sort({ typeCount: -1 });
        res.status(200).json({ success: true, data: toolswaste });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};