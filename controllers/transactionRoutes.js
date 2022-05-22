const router = require('express').Router();
const { Transaction } = require('../models');

router.get('/', async (req, res) => {
  try {
    const transactionData = await Transaction.findAll()
    
  } catch (err) {
    
  }
})

module.exports = router;