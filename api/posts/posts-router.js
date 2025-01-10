// implement your posts router here
const express = require('express')
// const Post = require('./posts/posts-model');

const router = express.Router()

router.get('/', (req, res) => {
res.json('nerd')
})
router.get('/:id', (req, res) => {

})
router.post('/', (req, res) => {

})
router.delete('/:id', (req, res) => {

})
router.put('/:id', (req, res) => {

})
router.get('/:id/messages', (req, res) => {

})


module.exports = router