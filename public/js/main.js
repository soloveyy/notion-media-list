const loading = document.getElementById('loading')
const content = document.getElementById('content')

let loadingState = false

const getMediaFromBack = async() => {
    loadingState = true
    const res = await fetch('http://localhost:5000/media')
    const data = await res.json()
    loadingState = false
    return data
}

const showMediaContent = async () => {
    const media = await getMediaFromBack()

    if (loadingState == false) {
        loading.innerHTML = ''
    }

    media.forEach(el => {
        const div = document.createElement('div')
        div.innerHTML = `
        <h1>${el.title}</h1>
        <p>${el.type}</p>
        <p>${el.date}</p>
        <a>${el.url}</a>
        `
        content.appendChild(div)   
    });
}

showMediaContent()