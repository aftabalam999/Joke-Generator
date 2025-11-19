const API_KEY = "AIzaSyB3BjOQ1cVK59ZpKM6pcdEFXZZ6_aT0XN8";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

const genBtn = document.querySelector("#generate-btn");
const category = document.querySelector("#category");
const outputJoke = document.querySelector(".output-joke");

genBtn.addEventListener("click", () => getResponse());

const getResponse = async () => {
  outputJoke.innerHTML = `<p>PLease wait joke is cooking ...</p>`;

  try {
    const joke = category.value;
  const prompt = `Tell me a short, cleen ${joke} joke`;

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
  };

  const response = await fetch(API_URL, {
    method: 'POST',
    headers:{
        'Content-type' : 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  if(!response.ok) throw new Error(`API request failed with status ${response.status}`)

    const data = await response.json();

    const showJoke = data.candidates[0].content.parts[0].text || "NOT get any jokes."
    console.log(showJoke);
  outputJoke.innerHTML = `${showJoke}`;

  } catch (error) {
  outputJoke.innerHTML = `OOPS! there is something wrong`;
  console.log(`ERROR: ${error}`);
  }
  
};
