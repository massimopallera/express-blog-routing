const express = require('express')
const router = express.Router()
const posts = require('../db/posts.js')

router.get('/',(req,res) => {
  let markup = '<ul>'

  posts.forEach(post => {

    const {title, content, image} = post

    markup += `
    <li>
      <h2>${title}</h2>
      <p>${content}</p>
      <img src="public/imgs/posts/${image}" alt="">
    </li>
      `
  });
  markup += `</ul>`
  res.send(markup)
    
})

module.exports = router