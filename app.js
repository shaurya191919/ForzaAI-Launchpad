const express=require('express')
const app=express();
const path=require('path')
const cookieParser=require('cookie-parser')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
app.set("view engine" , 'ejs')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'/public')));
app.use(cookieParser())

const {userModel,logUserModel}=require('./models/userdata.js');
const { sign } = require('crypto');


app.get('/',(req,res)=>{
res.render('index')
})
app.post('/create',async (req,res)=>{
   let {email,phone,name}=req.body
  let createdUser=await userModel.create({
      name,
      phone,
      email
  })
   res.redirect('/')
})
app.get('/read',async (req,res)=>{
  let users=await userModel.find()
  res.render('read', {users})
})
app.get('/login',(req,res)=>{

   res.render('login')
})
app.post('/createAcc', (req,res)=>{
   let {username,password,email,age}=req.body
   
  
   bcrypt.genSalt(10, async function(err, salt) {
     bcrypt.hash(password, salt,async function(err, hash) {
      let loginUser=await logUserModel.create({
         username,
         age,
         email,
         password: hash
      })
      });
     
  });
   let token =jwt.sign({email},'anything')
   res.cookie("token",token)
   res.redirect('/signin')
})
app.get('/signin',(req,res)=>{
   res.render('signin')
})
app.post('/signin',async (req,res)=>{
   let signInUser=await logUserModel.findOne({username:req.body.username})
   if(signInUser==null){
      res.send('invalid credential')
   }
   else{
      
      bcrypt.compare(req.body.password, signInUser.password, function(err, result) {
         if(result){
         res.redirect('/')
         }
         else
         res.send('wrong password')
      });
      }
   
      
  
})

app.get('/delete/:names',async (req,res)=>{
   let name=req.params.names
   let users =await userModel.findOneAndDelete({name:name})
   res.redirect('/read')

})
app.get('/edit/:id',async (req,res)=>{
   let name=req.params.id
   let readUser=await userModel.findOne({_id:name})
   
   res.render('edit',{readUser})

})

app.post('/update/:id',async (req,res)=>{
   let {name,email,phone}=req.body
   let readUser=await userModel.findOneAndUpdate({_id:req.params.id},{name,email,phone},{new:true})
   
   res.redirect('/read')

})


app.listen(3000);