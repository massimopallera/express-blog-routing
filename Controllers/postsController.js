const posts = require('../db/posts.js')


const index = (req,res) => {
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
}

const show = (req, res) => {
  const post = posts.find(post => post.slug === req.params.slug)
  // console.log(post);
  
  res.json({
    data:post
  })
}

const printByTag = (req, res) => {
  const tag = req.params.tag

  const postsWTag = posts.filter( element => element.tags.includes(tag))
  console.log(postsWTag);
  res.send(postsWTag)
}

module.exports ={
  index, 
  show,
  printByTag
}