import dbConnect from "../../../utils/dbConnect";
import model from "../../../models/Linckblades";

dbConnect();

const findAll = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const data = await model.find({});

        res.status(200).json({ success: true, data: data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};

export default findAll;
