function Content() {
	var dom = document.getElementById('root')
	var content = document.createElement('div')
	content.innerText = 'content'
	dom.append(content)
}

module.exports = Content
