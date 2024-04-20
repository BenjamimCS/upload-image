import { addPreview, toggleDisplay } from './modules.js' 

const fileInput  = document.querySelector("#upload-file")
const preview    = document.querySelector("#preview")
const previewImg = document.querySelector("#preview-img")

const state = {
  first: true
}

fileInput.addEventListener("change", function() {
  addPreview(previewImg,this.files[0], undefined, true)

  if (state.first) {
    preview.classList.toggle('hidden')
    previewImg.classList.toggle('hidden')
    state.first = false
  }
})