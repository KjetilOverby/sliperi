import dbConnect from "../../../../utils/dbConnect";
import ServiceBlades from "../../../../models/Service";

dbConnect();

const currentYear = new Date().getFullYear();
// const currentMonth = new Date().getMonth() + 1;

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;
  const date = new Date();
  const lastDay = new Date(date.getFullYear(), req.query.month, 0);
  switch (method) {
    case "GET":
      try {
        const serviceblades = await ServiceBlades.aggregate([
          {
            $match: {
              serviceDate: {
                $gte: new Date(`${currentYear}-${req.query.month}-01`),
                $lte: new Date(
                  `${req.query.yearRequest}-${req.query.month2}-01`
                ),
              },
            },
          },
        ]);

        res.status(200).json({ success: true, data: serviceblades });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
