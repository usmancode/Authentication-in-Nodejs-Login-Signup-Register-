const app=require("./app")
const port = process.env.PORT || 5055;

//**listining server */
try{
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
}catch(e){
  console.log(e)
}













