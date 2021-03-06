//最新mv
const express = require("express")
const router = express()
const { createWebAPIRequest } = require("../util/util")

// type ALL, ZH,EA,KR,JP
router.get("/", (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    'offset': req.query.offset,
		'total': true,
		'limit': req.query.limit,
		'area': req.query.area,
		"csrf_token": ""
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/album/new',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})


module.exports = router