export async function getNews() {
  let result = await fetch('https://newsapi.org/v2/top-headlines?country=au&apiKey=40ad26baf915406a94b3ca17cc0d8d79').then(response => response.json())
  console.dir(result);
  return result.articles
}