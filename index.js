const header = document.querySelector('header');
const title = document.createElement("h1");
title.innerText = "RECEBA UM CONSELHO!";
header.appendChild(title);

const section = document.createElement("section")
document.body.append(section);

const subtitle = document.createElement("h3")
subtitle.innerHTML= "CLIQUE NO BOTÃO ABAIXO PARA RECEBER!";
section.appendChild(subtitle);

const audio = document.createElement("audio");
audio.setAttribute("id", 'audioPlayer')
audio.setAttribute("style", 'display: none;')
section.appendChild(audio);

const source = document.createElement("source");
source.setAttribute("src", 'receba-siiiii.mp3')
source.setAttribute("type", 'audio/mpeg')
audio.appendChild(source);

const button = document.createElement("button");
button.innerHTML= "RECEBER!";
section.appendChild(button);

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
          subtitle.innerHTML = response.data.ibm.text;
          console.log(response.data.ibm.text);
        return result
        
    } catch (error) {
        console.log(error)
    }
}


button.addEventListener("click", function () {
  if (audioPlayer.paused) {
    search();
    audioPlayer.play();
  }
});



