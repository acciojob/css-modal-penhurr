//your JS code here. If required.
let button = document.getElementById("openModal")

button.addEventListener('click',()=>{
	if(document.querySelector('.modal')) return
	document.body.append(modal)
})

let modal = document.createElement('div')
modal.className = "modal"

let modalContent = document.createElement('div')
modalContent.className = "modal-content"

let modalHeader = document.createElement('div')
modalHeader.className = "modal-header"

let h2 = document.createElement('h2')
h2.textContent = 'Modal Header'
let close = document.createElement('button')
close.className = "close-modal"
close.textContent = 'x'
close.addEventListener('click',()=>modal.remove())
modalHeader.append(h2,close)

let modalBody = document.createElement('div')
modalBody.className = "modal-body"

let p = document.createElement('p')
p.textContent = 'Modal Body Content'
modalBody.append(p)

modalContent.append(modalHeader,modalBody)
modal.append(modalContent)

modal.addEventListener('click',()=>
		modal.remove()
	
)
