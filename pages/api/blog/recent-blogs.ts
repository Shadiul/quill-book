import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";
import Blog from "../../../interfaces/blog";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "GET") {
    const blogs: Blog[] = [...Array(5)].map((index) => ({
      id: faker.database.mongodbObjectId(),
      date: faker.date.recent(),
      title: faker.lorem.sentence(),
      cover: faker.image.abstract(480, 480, true),
      description: faker.lorem.paragraph(),
    }));
    setTimeout(() => {
      return res.status(200).json({ message: "Success", blogs: blogs });
    }, 2000);
  } else {
    return res.status(400).json({ message: "Not Found" });
  }
}
