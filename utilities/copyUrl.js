function copyUrl() {
  let copyText = document.getElementById('copy')
  console.log(`hi`)
  copyText.select()
  copyText.setSelectionRange(0, 999999)
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the Url: " + copyText.value);
}
