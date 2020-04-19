var z // Used to store value from cookie
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  var urls;

  // Request URLs from API (Requirement 1)
  await fetch('https://cfw-takehome.developers.workers.dev/api/variants')
    .then(res => res.json())
    .then(data => urls = data.variants);

  // Randomly choose page 1 or 2 to be sent to (Requirements 2/3)
  x = Math.random();
  var path;
  path = urls[Math.round(x)]
  if (z != undefined) {
    path = z; // Access value from cookie if a page has been visited previously (Extra Credit 2)
  }
  
  var response;
  await fetch(path)
    .then(res => response = res);
  response.cookie = path
  z = response.cookie // Used to ensure you are always redirected to the same page

  return response
}




