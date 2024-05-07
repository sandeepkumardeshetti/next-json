// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const fetchUser = await fetch("https://jsonplaceholder.typicode.com/users")
    const res = await fetchUser.json()

   
    return res.map((user) => ({
      id: user.id.toString(),
    }))
  }




const page = async({params}) => {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const userJson = await user.json()

    console.log(userJson)
  return (
    <div>
      {userJson.name}
    </div>
  )
}

export default page
