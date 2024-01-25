// @ts-ignore
import { NextApiRequest, NextApiResponse } from 'next';
import { getKnowledgePage } from '../../../utils/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const [ pageid, pagesize ] = req.query.params;
    const getKnowledgePageData: any = await getKnowledgePage(Number(pageid), Number(pagesize));
    
    res.status(200).json(getKnowledgePageData);
}
