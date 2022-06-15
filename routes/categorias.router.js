const express = require('express');

const router = express.Router();

router.get('/:categoriaId/productos/:productId', (req, res) => {
  const { categoriaId, productId } = req.params;
  res.json({
    categoriaId,
    productId
  })
});

module.exports = router;
