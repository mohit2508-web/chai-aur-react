function customRender(reactElement,conatiner){
    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // conatiner.appendChild(domElement)

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
       domElement.setAttribute(prop,reactElement.props[prop])
    }
    conatiner.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
const mainContainer=document.querySelector('#root')
customRender(reactElement,mainContainer)