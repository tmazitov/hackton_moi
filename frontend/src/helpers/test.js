// Get all buttons and inputs on the page

// Get the special green button
//let supportMessages = {
//	"button-1" : "Click here ! 1",
//	"button-2" : "Click here ! 2",
//	"button-3" : "Click here ! 3",
//	"button-4" : "Click here ! 4"
//}
let supportMessages = null

const touchSize = 64

let touch 

let message = null
let elements = null
let activeElement = null

// Function to focus and add overlay to the current element
function focusElement(event) {

	const element = event.target.nodeName === 'DIV' ?
		event.target : event.target.parentElement
	const container = element.parentElement
	element.classList.remove('overlay')
	element.style.top = ''
	element.style.left = ''

	

	if (message && container.contains(message)) {
		container.removeChild(message)
	}
	message = null
	const input = element.children.item(0)
	if (input.nodeName !== 'DIV')
		input.blur()
	activeElement += 1
	localStorage.setItem("activeElement", activeElement)
	
	const nextElement = elements[activeElement]
	if (!nextElement) {
		touch.classList.remove('active')
		activeElement = null
		elements.forEach(element => {
			let field = element.children.item(0)
			let isInputField = field.nodeName === 'INPUT'
			if (isInputField) {
				field.removeEventListener('keypress', focusElementInput)
			} else {
				element.removeEventListener('click', focusElement)
			}
		})
		elements = null
		return
	}

	const nextElementRect = nextElement.getBoundingClientRect()
	nextElement.classList.add('overlay')
	if (window.getComputedStyle(container).position === 'static') {
		nextElement.style.top = `${nextElementRect.top}px`
	}
	//if (container.getComputedStyle().display )
	nextElement.style.left = `${nextElementRect.left}px`

	const nextElementInput = nextElement.children.item(0)
	if (nextElementInput.nodeName === 'INPUT')
		nextElementInput.focus()

	if (!touch.classList.contains('active'))
		touch.classList.add('active')

	let supportPosition = nextElementRect.left + input.getBoundingClientRect().width/2 - touchSize/2
	touch.style.top = `${nextElementRect.top - touchSize - 10}px`
	touch.style.left = `${supportPosition}px`
	
	if (supportMessages[nextElement.id]) {
		message = document.createElement('div')
		message.classList.add("message")
		message.style.left = `${supportPosition+64+10}px`
		message.style.top = `${nextElementRect.top - 20 - touchSize/2}px`
		message.innerHTML = supportMessages[nextElement.id]
		container.insertBefore(message, nextElement)
	}
}



function focusElementInput(event) {
	if (event.key === 'Enter') {
		focusElement(event)
	}	
}

function enableSmartFocus(messages) {
	touch = document.querySelector('.touch')
	supportMessages = messages
	elements = document.querySelectorAll('.guide-step')
	if (elements.length === 0)
		return
	elements.forEach(element => {
		const childCount = element.childElementCount
		if (childCount === 0 || childCount > 1)
			return
		let field = element.children.item(0)
		let isInputField = field.nodeName === 'INPUT'
		if (isInputField) {
			field.addEventListener('keypress', focusElementInput)
		} else {
			element.addEventListener('click', focusElement)
		}
	})

	let storageValue = localStorage.getItem("activeElement")
	if (!storageValue)
		activeElement = -1
	else
		activeElement = Number(storageValue - 1)

	const event = new MouseEvent("click", {
		view: window,
		bubbles: true,
		cancelable: true,
	});
	elements[0].dispatchEvent(event)
}

//document.querySelector('.start').addEventListener('click', enableSmartFocus);

export {
	enableSmartFocus
}