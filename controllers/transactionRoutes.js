const router = require('express').Router();
const { Transaction } = require('../models');

router.get('/', async (req, res) => {
  try {
    const transactionData = await Transaction.findAll();
    // const transactions = transactionData.map(transaction => transaction.get({ plain: true }));
    res.status(200).json(transactionData);
  } catch (err) {
    res.status(400).json(err)
  }
});

router.post('/contribution', async (req, res) => {
  try {
    const transactionData = await Transaction.create({
      amount: req.body.amount,
      type: "CONTRIBUTION"
    });
    res.status(200).json(transactionData);
  } catch (err) {
    res.status(400).json(err);
  };
});

router.post('/distribution', async (req, res) => {
  try {
    const transactionData = await Transaction.create({
      amount: req.body.amount,
      type: "DISTRIBUTION"
    });
    res.status(200).json(transactionData);
  } catch (err) {
    res.status(400).json(err);
  };
});

router.post('/bill-payment', async (req, res) => {
  try {
    const transactionData = await Transaction.create({
      amount: req.body.amount,
      type: "BILL PAYMENT"
    });
    res.status(200).json(transactionData);
  } catch (err) {
    res.status(400).json(err);
  };
});

router.delete('/:id', async (req, res) => {
  try {
    const transactionData = await Transaction.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(transactionData);
  } catch (err) {
    res.status(400).json(err);
  };
});

module.exports = router;