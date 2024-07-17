function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
}


const reactElement = {
    type : 'a',
    props :{
        href: 'https://github.com/JaiCodes77',
        target : '_blank'
    },
    children : 'Visit Github'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)
