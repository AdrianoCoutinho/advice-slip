const advice = document.getElementById('receba')

const search = async () => {
    try {
        const result  = await axios.get('https://api.adviceslip.com/advice')
        const message = (result.data.slip.advice)
        advice.innerHTML = message
        return result
    } catch (error) {
        console.log(error)
    }
}

