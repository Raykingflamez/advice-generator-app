const api_url = "https://api.adviceslip.com/advice";
async function getAdvice() {
  // Making an API call (request)
  // and getting the response back
  const response = await fetch(api_url);

  // Parsing it to JSON format
  const data = await response.json();
  console.log(data.slip);

  // Retrieving data from JSON
  // const generator = data.slip[0];
  let advice_id = data.slip.id;
  let content= data.slip.advice;

  // Accessing the div container and modify/add
  // elements to the containers
  document.querySelector("#advice_id").textContent = advice_id;
  document.querySelector("#advice_content").textContent = content;

  console.log(advice_id);
  console.log(content);

}

function reload() {
  window.location.reload();
}

getAdvice();