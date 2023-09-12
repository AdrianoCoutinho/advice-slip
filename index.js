const search = async () => {
    try {
        const result  = await axios.get('https://api.adviceslip.com/advice')
        console.log(result.data.slip.advice)
        return result
    } catch (error) {
        console.log(error)
    }
}

search();

