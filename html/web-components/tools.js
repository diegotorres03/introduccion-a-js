const eventNames = [
    'onclick',
    'ondblclick',
    'onabort',
    'onanimationcancel',
    'onauxclick',
    'onchange',
    'onclose',
    'onkeydown',
    'onkeyup',
    'onkeypress',
    'onload',
    'onmouseleave',
    'onmouseenter',
    'onmousemove',
    'onmouseover',
]
// document.createElement('button').
function html(templates, ...values) {
    const template = document.createElement('template')
    let str = ''
    templates.forEach((template, index) => {

        str += template
        str = values[index] ? str + values[index] : str
    })
    if (str.match(/[^{}]*(?=\})/g)) {
        const regexRes = toArray(str.matchAll(/[^{\}]+(?=})/g))
        regexRes.forEach(res => str = str.replace(
            `({${res}})`,
            `<span class="variable ${res}-var" data-property="${res}">${res}</span>`
        ))
    }
    // str = str.replace(/[^{}]*(?=\})/g, 'fuck yeah')
    template.innerHTML = str.trim()

    return template.content.cloneNode(true)
}

html.import = async (htmlUrl) => {
    const res = await (await fetch(htmlUrl, { headers: { 'Content-Type': 'text/html' } })).text()
    return html`${res}`
}

const { log, warn, info, error } = console


const toArray = Array.from


const mapComponentEvents = (component, handlers, eventNames) => {
    eventNames.map(eventName => {

        toArray(component.querySelectorAll(`[${eventName}]`))
            .forEach(handled => {
                const handlerName = handled.getAttribute(eventName)
                if (!handled.getAttribute(`data-${eventName}`)) handled.setAttribute(`data-${eventName}`, handlerName)
                handled.removeAttribute(eventName)
            })

        
        toArray(component.querySelectorAll(`[data-${eventName}]`))
            // .forEach(handledElement => setUpHandler(component, handlers, eventName)(handledElement))
            .forEach(handledElement => {
                const handlerName = handledElement.dataset[eventName]
                if (handledElement.dataset[`${eventName}Enabled`] === 'true' ) return log('already enabled') 
                // addHandler(handledElement, eventName.replace('on', ''), handlers, handlerName)
                handledElement.addEventListener(eventName.replace('on', ''), event => {
                    log('calling event handler')
                    const { param } = event.target.dataset
                    const value = param ? getValue(handlers, param) : null
                    handlers[handlerName](event, value)
                    log('updateVars', updateVars)
                    updateVars(component, handlers)
                })
                handledElement.dataset[`${eventName}Enabled`] = true
                // renderForLoops(component, handlers)
            })
    })
}

function updateVars(component, handlers) {
    log('on update vars')
    const variables = toArray(component.querySelectorAll('.variable'))
    variables.forEach(variable => {
        const { property } = variable.dataset
        if (!property) throw new Error(`property hasn't been specified on data attribute`)
        if (property && property.match(/\[(.*?)\]/g)) {
            variable.textContent = getValue(handlers, property)
            log('variable.textContent',variable.textContent)
            return
        }
        variable.textContent = handlers[property]
    })
}



/**
 * get the value of a property in an object
 * @example
 * getValue({items:[{name: {first: 'test', last: 'object'}}]}, 'items[0].last') // returns 'object'
 *
 * @param {Object} source
 * @param {string} path
 */
function getValue(source, path) {
    const pathParts = path.split(/\[(.*?)\]/g).map(part => part.replace('.', '').trim())

    let temp = source
    pathParts.forEach(part => {
        temp = temp[part]
    })
    return temp
}


/**
 *
 *
 * @param {HTMLElement} component
 */
function renderForLoops(component, handlers) {
    const templates = toArray(component.querySelectorAll('template'))
    log(templates)
    templates.forEach((template, index) => {
        const { dataset } = template
        log(dataset)
        
        if (dataset.loop) {
            // loop is how I called, is like an *ngFor and it match the property on the component
            const arrayName = dataset.loop
            
            const targetContainer = component.querySelector(dataset.target)
            if(!targetContainer) return log(component, 'doesn`t cointain the target', dataset.target)
            // if(!targetContainer) throw new Error(`targetContainer wasn't found!`)
            log('target', targetContainer, dataset)
            const items = handlers[arrayName.trim()]
            if (!Array.isArray(items)) throw new Error(`property ${arrayName} not found`)
            
            targetContainer.children && toArray(targetContainer.children)
                .filter(item => item.tagName !== 'TEMPLATE')
                .forEach(item => targetContainer.removeChild(item))
            
            // log(targetContainet.children)
            
            items.map((item, index) => {
                const copy = html`${template.innerHTML.replace(/\[(.*?)\]/g, `[${index}]`)}`
                targetContainer.appendChild(copy)
            })
            
        }
    })

} 

function getType(variable) {
    if(Array.isArray(variable)) return 'array'
    return typeof variable
}