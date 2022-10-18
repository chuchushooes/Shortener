  const btn = document.querySelector('.btn-copyUrl')
  btn.addEventListener('click', copyUrl)
  function copyUrl() {
    const copyUrl = document.getElementById('copy')
    console.log(copyUrl.textContent)
    navigator.clipboard.writeText(copyUrl.textContent);
    alert("Copied the Url: " + copyUrl.textContent);
  }