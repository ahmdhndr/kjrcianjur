// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { articles } = require('./data.json');

export default (req, res) => {
  const ar = articles.filter((a) => a.slug === req.query.slug);
  if (req.method === 'GET') {
    res.status(200).json(ar);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
