const express = require('express');
const app = express();
const cors = require ('cors')
const port = process.env.PORT || 5000;


const categories = require('./data/categories.json')
const food = require('./data/food.json')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.get('/categories', (req, res) => {
    res.send(categories)
  })

app.get('/food', (req, res) => {
    res.send(food)
  })

app.get('/food/:id', (req, res) => {
    const id = parseInt(req.params.id)
   const selectFood = food.find(n => n._id ===id);
   res.send(selectFood)
  })
app.get('/categories/:id', (req, res) => {
    const id = req.params.id
   if(id === 0){
    res.send(food)
   }
      else{
        const categoryFood = food.filter(n => parseInt(n.category_id) ===id);
        res.send(categoryFood)
      }
  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })