const advice = document.getElementById('receba')
const audioPlayer = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");

const search = async () => {
    try {
        const result  = await axios.get('https://api.adviceslip.com/advice')
        const message = (result.data.slip.advice)
        const options = {
            method: "POST",
            url: "https://api.edenai.run/v2/translation/automatic_translation",
            headers: {
              authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTFmMjYzMmUtYmYwOS00MDk5LWFhZDYtNWI4ZDNiMTc3Y2E2IiwidHlwZSI6ImFwaV90b2tlbiJ9.UoF8wXN1gbpn4kPb7IUxX8y709PucOkcNLF-y8ANtPs",
            },
            data: {
              providers: "amazon,google,ibm,microsoft",
              text: message,
              source_language: "en",
              target_language: "pt-br",
            },
          };
          const response = await axios.request(options);
          advice.innerHTML = response.data.ibm.text;
          console.log(response.data.ibm.text);
        return result
    } catch (error) {
        console.log(error)
    }
}

playButton.addEventListener("click", function () {
  if (audioPlayer.paused) {
    audioPlayer.play();
  }
});





