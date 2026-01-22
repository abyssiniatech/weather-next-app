type props={
  id:number
  title:string
  body:string
}
const FetchApi = async() =>{
  const res= await fetch("https://jsonplaceholder.typicode.com/posts");
  const data=await res.json();

  return(
      <div> 
      {
        data.map((list)=>{
          return(
            <ul>
              <li></li>
            </ul>
          )
        })
      }
      </div>
  )
}
export default FetchApi