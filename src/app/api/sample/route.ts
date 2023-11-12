export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  console.log(data);
  console.log('request to jsonplaceholder');
  return Response.json(data);
}
