// Get all buttons and inputs on the page

// Get the special green button

const overlay = document.querySelector('.shadow')

let buffer = null
let elements = null
let activeElement = null

// Function to focus and add overlay to the current element
function focusElement(event) {

	const element = event.target.nodeName == 'DIV' ?
		event.target : event.target.parentElement
	const container = element.parentElement
	element.classList.remove('overlay')
	element.style.top = ''
	element.style.left = ''

	const input = container.children.item(0)
	input.blur()

	if (buffer) {
		container.removeChild(buffer)
		buffer = null
	}

	activeElement += 1
	
	const nextElement = elements[activeElement]
	if (!nextElement) {
		overlay.classList.remove('active')
		activeElement = null
		if (buffer) {
			container.removeChild(buffer)
			buffer = null
		}
		elements.forEach(element => {
			let field = element.children.item(0)
			let isInputField = field.nodeName == 'INPUT'
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
	nextElement.style.top = `${nextElementRect.top}px`
	nextElement.style.left = `${nextElementRect.left}px`

	const nextElementInput = nextElement.children.item(0)
	if (nextElementInput.nodeName == 'INPUT')
		nextElementInput.focus()
	// element.focus()

	if (!overlay.classList.contains('active'))
		overlay.classList.add('active')

	buffer = document.createElement('div')
	buffer.classList.add("buffer")
	buffer.style.height = `${nextElementRect.height}px`
	buffer.style.width = `${nextElementRect.width}px`
	container.insertBefore(buffer, nextElement)
	// Increment the index for the next iteration
}



function focusElementInput(event) {
	if (event.key === 'Enter') {
		focusElement(event)
	}	
}

function enableSmartFocus() {
	elements = document.querySelectorAll('.guide-step')
	if (elements.length == 0)
		return
	elements.forEach(element => {
		const childCount = element.childElementCount
		if (childCount == 0 || childCount > 1)
			return
		let field = element.children.item(0)
		let isInputField = field.nodeName == 'INPUT'
		if (isInputField) {
			field.addEventListener('keypress', focusElementInput)
		} else {
			element.addEventListener('click', focusElement)
		}
	})
	
	activeElement = -1
	const event = new MouseEvent("click", {
		view: window,
		bubbles: true,
		cancelable: true,
	});
	elements[0].dispatchEvent(event)
}

document.querySelector('.start').addEventListener('click', enableSmartFocus);