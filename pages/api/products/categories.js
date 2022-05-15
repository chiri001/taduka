import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Meat', 'Vegetables', 'Spices'];
  res.send(categories);
});

export default handler;
