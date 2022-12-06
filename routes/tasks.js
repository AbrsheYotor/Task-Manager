const express = require('express')
const router = express.Router()
const {
    GetAllItems,GetSingleItems,PostItems,PatchItem,DeleteItem
} =require('../Controllers/tasks')

router.route('/').get(GetAllItems).post(PostItems)
router.route('/:id').get(GetSingleItems).patch(PatchItem).delete(DeleteItem)

module.exports = router