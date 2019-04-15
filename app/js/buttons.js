document.querySelectorAll('.slogan__link').forEach(i => i.onclick = event => {
    let a = event.currentTarget.getAttribute('href')
    document.querySelectorAll('article').forEach(i => i.style.display = 'none')
    document.querySelector(a).closest('article').style.display = 'block'
})