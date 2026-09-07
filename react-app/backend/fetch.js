async function main(){
    //like the brwoser fetch API , the defult method is GET
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
    //
}
main().catch(console.error);