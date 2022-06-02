
let sw = document.getElementById('checkbox')

sw.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  sw.style.transition = 'transform(0.3s linear)'
})

//alrights reserved 2022 KIRA/MANDIE