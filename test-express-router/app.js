const express = require('express')
const app = express()
const router = require('express').Router();
app.get('/', [apiRouters, apiRouter] )
function apiRouters(req, res, next) {
    // res.send(req.body)
    res.set({'previous-data': JSON.stringify({
        'customer': {
            "name": 'dewei'
        }
    })});
    next()
}
function apiRouter(req, res, next) {
    // console.log('main.erver.ts apiRouter >>>>>>> req', JSON.stringify(req, null, 4));

    // console.log('executed>>>>>>>>>>', JSON.stringify(res, null, 4))
    let previousReqBody = JSON.parse(res.get('previous-data'));

    console.log(JSON.stringify(previousReqBody, null, 4))
    previousReqBody["providers"] = [{
        provide: 'serverUrl',
        useValue: `${req.protocol}://localhost:80`
      }];
   res.send(previousReqBody)
    next();
  }

app.listen(3000, () => console.log('Example app listening on port 3000!'))