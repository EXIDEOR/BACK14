function loadKoders(){
    const url = 'http://localhost:8088/koders'

    fetch(url) 
        .then((response) => {
            return response.json()
        }).then(koders) => {
            console.log(koders;
            const p = document.getElementById('koders')
            p.textContent = JSON.stringify(koders)
            })
            .catch
    }