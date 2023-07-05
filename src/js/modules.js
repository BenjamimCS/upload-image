export {addPreview, toggleDisplay}
/**
 * Add an `<img>` element with provided File object
 * wich must be the type of an image; or just mutate
 * the src attribute of an already existing `<img>` element by giving `mutate = true` 
 * 
 * @param {object} dest `if mutate = false` give the Node you want to append the `<img>` to;
 * if `mutate = true` `dest` must be an `<img>` Node
 * @param {object} file a File object holding the file
 * @param {string} id specify the `<img>`'s id
 * @param {boolean} mutate give true if you want change the `src` of an `<img>` Node
 */
function addPreview(dest, file, id="img", mutate = false) {
  const reader  = new FileReader()
  const img = document.createElement("img")

  if(!mutate) {

    img.id = id
    img.classList.add("h-full", "max-h-[70vh]", "m-auto", "block")
    img.draggable = false

    dest.appendChild(img)

    reader.onload = e => {
      img.src = e.target.result
    }

    reader.readAsDataURL(file)
  } else {
    if (!(dest instanceof Image)) {
      new Error("Not an <img>")
      return
    }
    reader.onload = e => {
      dest.src = e.target.result
    }

    reader.readAsDataURL(file)
  }
}

/**
 * 
 * @param {object} Node toggle the display of a Node
 */
function toggleDisplay(Node) {
  let state = !(Node.style.display) || Node.style.display === "none" ? 'block' : "none" 

  Node.style.display = state
}