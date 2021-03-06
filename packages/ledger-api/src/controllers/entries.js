'use strict';

const express = require('express');
const entriesService = require('../services/entries');

let router = express.Router();

router.get('/', entriesService.listEntries);
router.get('/:id', entriesService.getEntriesById);

router.post('/', entriesService.createEntry);
// router.put('/:id', entriesService.updateEntryByID);

// router.delete('/:id', entriesService.deleteEntry);

module.exports = router;
