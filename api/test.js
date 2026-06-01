module.exports = (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Node.js OK su Vercel"
  });
};
