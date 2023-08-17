import fs from "fs";
import path from "path";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const isSiteClosed = async () => {
    const metaPath = path.join(process.cwd(), "meta.json");
    const metaContent = await fs.promises.readFile(metaPath, "utf-8");
    const meta = JSON.parse(metaContent);
    return meta.closed;
};

const handler: NextApiHandler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    if (req.method === "GET") {
        const closed = await isSiteClosed();
        res.status(200).json({ closed });
    } else if (req.method === "PATCH") {
        const metaPath = path.join(process.cwd(), "meta.json");
        const metaContent = await fs.promises.readFile(metaPath, "utf-8");
        const meta = JSON.parse(metaContent);

        const updatedMeta = { ...meta, closed: !meta.closed };
        await fs.promises.writeFile(metaPath, JSON.stringify(updatedMeta, null, 2));

        res.status(200).json({ closed: updatedMeta.closed });
    }
};

export default handler;
