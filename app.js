const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8000;
const { user_game } = require("./models");
const { user_game_biodata } = require('./models')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set("view engine", "ejs");
app.get("/", async (req, res) => {
    res.render('login')
});
app.post('/dashboard', async (req, res) => {
    const {email, password} = req.body
    const users = await user_game.findAll()
    const checkUserbyEmail = users.filter(user => user.email === email)
    console.log(checkUserbyEmail)
    let isUser = false
    if(checkUserbyEmail.length > 0 && checkUserbyEmail[0].password === password){
        isUser = true
    }

    if(isUser){
        res.redirect('dashboard')
    }
    res.status(401).send('gagal login')
})

app.get('/dashboard', async (req, res) => {
    const admin = await user_game.findAll()
    const users = await user_game_biodata.findAll()
    res.render('dashboard', {admin, users})
})

app.get('/dashboard/addUser', (req, res) => {
    res.render('register')
})

app.post('/dashboard/addUser', (req, res) => {
    user_game_biodata.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        address:req.body.address,
        phone:req.body.phone
    }).then(() => {
        res.redirect('/dashboard')
    })
})

app.get('/dashboard/:id', (req, res) => {
    user_game_biodata.destroy({
        where:{id:req.params.id}
    }).then(() => {
        res.redirect('/dashboard')
    })
})

app.get('/dashboard/update/:id', (req, res) => {
    user_game_biodata.findOne({
        where:{
            id:req.params.id
        }
    }).then((users) => {
        console.log('data',users);
        res.render('update', {users})
    })
})

app.post('/dashboard/update/:id', (req, res) => {
    user_game_biodata.update({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        address:req.body.address,
        phone:req.body.phone
    }).then(() =>{
        res.redirect('/dashboard')
    })
})


app.listen(port, () => console.log(`app running in port ${port}`));
