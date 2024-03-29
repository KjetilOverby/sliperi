import dbConnect from "../../../utils/dbConnect";
import Linckwaste from "../../../models/linckwaste";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const linckwaste = await Linckwaste.aggregate([
          {
            $match: {
              wasteDate: {
                $gte: new Date(
                  `${req.query.yearRequest}-${req.query.month}-${req.query.day}`
                ),
                $lte: new Date(
                  `${req.query.yearRequest2}-${req.query.month2}-${req.query.day2}`
                ),
              },
            },
          },
          {
            $group: {
              _id: {
                type: "$type",
              },
              typeCount: { $sum: 1 },
            },
          },
        ]).sort({ typeCount: -1 });
        res.status(200).json({ success: true, data: linckwaste });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
