
function getQueryAnswer()
{
    
try{

    const res=axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",{
    contents: [
      {
        parts: [
          {
            text: "Explain how AI works in a few words"
          },
        ],
      },
    ],
  
},
{

    headers:{
        "Content-Type":"application/json",
        "x-goog-api-key":"AIzaSyBafL8TLF-R91r5-RGQVVs4I390rwxp2Fs",
    },

}
 );
res
  .then((data)=>
{
    console.log(data.data);  
})
.catch((error)=>{
    console.log(error);
});
 
}
catch(err)
{
  alert("something went wrong");
}



}



