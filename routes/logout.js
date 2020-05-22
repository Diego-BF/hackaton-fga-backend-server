import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  // destroy the user's session to log them out
  // will be re-created next request
  req.session.destroy(() => {
    res.send();
  });
});

export default router;
