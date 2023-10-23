const fs = require('fs');



// first i check if directory exsist or not because >>
//  if dir exsist so i wan't allow to create another one with same name 



if(!fs.existsSync('./new')){


// for making directory
fs.mkdir('./new',(err)=>{
    
    if(err) throw err;

    console.log("Directory Created !");
})


}



// First check if directory exsist so remove directory

if(fs.existsSync('./newOne')){

    fs.rmdir('./newOne',(err)=>{
        
        if(err) throw err;
        
        console.log("Directory is Removed !");
    })
}