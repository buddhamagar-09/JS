
const url = "https://dog.ceo/api/breeds/list/all";


const getDogs = async () => {
try{
const response = await fetch(url);
console.log(response); // Response object
const data = await response.json();
console.log(data); // Actual data
}
catch(err)
{
    console.log(err.message);
}
};
getDogs();
