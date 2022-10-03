import dbConnect from "../../../utils/dbConnect";
import LinckBlades from "../../../models/Linckblades";

dbConnect();


export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const linckBlades = await LinckBlades.aggregate([
          {
            $match: {
              commentDate: {
                $gte: new Date(
                  `${req.query.yearRequest}-${req.query.month}-01`
                ),
                $lte: new Date(
                  `${req.query.yearRequest}-${req.query.month2}-01`
                ),
              },
            },
          },
        ]);

        res.status(200).json({ success: true, data: linckBlades });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};