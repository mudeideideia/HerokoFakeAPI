const app =  require('express')()


app.get('/', (req, res) => {
    res.send('{"var":1, "vector": [{"var1":1, "var2": 2]}')
})

app.listen(process.env.PORT || 3000);