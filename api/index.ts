import { NowRequest, NowResponse } from "@vercel/node";
//import { https }  from "https";
export default (req: NowRequest, res: NowResponse) => {
  let c = 0;
  import q from "json!" + decodeURIComponent(req.body.jsonfile);
  console.log(q);

  for (var key in q) {
      c += q[key].length;
  }
  return res.json({ message: c });
};
