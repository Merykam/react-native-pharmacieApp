const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');


 

const signup = async (req,res)=>{
       
        const { name, email, password } = req.body;

      
        if (!validator.isLength(name, { min: 1, max: 255 })) {
            return res.status(400).json({ error: 'Le nom est requis.' });
        }
    
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Adresse e-mail invalide.' });
        }
    
        if (!validator.isStrongPassword(password, { min: 6 })) {
            return res.status(400).json({ error: 'Le mot de passe doit être fort.' });
        }

      

        try{

            const userdb = await User.findOne({ email:email});

            if(userdb){
                return res.json({err :"user already exists" });
          
            }
           
            const hashedPassword = await bcryptjs.hash(req.body.password, 10);

            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            
            });
    
            await user.save();
            // const token = jwt.sign({ userId: user }, process.env.JWT_SECRET);


            res.json({ success: true, message: user });

        }catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }

   }

  const signin = async (req, res) => {
        const { email, password } = req.body;
        const JWT_SECRET = "ggggghjksllsoieyetattyioppp"
    
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ error: 'Adresse e-mail ou mot de passe incorrect.' });
            }
    
            const isPasswordValid = await bcryptjs.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Adresse e-mail ou mot de passe incorrect.' });
            }
            console.log("testtt");
    
            const token = jwt.sign({ userId: user }, JWT_SECRET);
            console.log(token);
            res.cookie('token',token, {expire : new Date() + 3600000 })
          




            
            return res.json({ 
                success: true, 
                data: {
                    userId: user.id,
                    email: user.email,
                    token: token,
                  }, });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    };

    const signout = (req,res)=>{
        res.clearCookie('token');
        return res.json({message : "user signout"})
    }

    



  




    




module.exports={
  
    signup,
    signin,
    signout
  
   
};