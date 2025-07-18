module.exports = (req, res, next) => {
  const roomId = parseInt(req.params.id);
  const user = req.user;

  if (user.currentRoom >= roomId) {
    next();
  } else {
    res.status(403).json({ error: "Access denied" });
  }
};
