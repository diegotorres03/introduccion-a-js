const html = function (templates, ...values) {
    const template = document.createElement('template')
    let str = ''
    templates.forEach((template, index) => {
        str += template
        str = values[index] ? str + values[index] : str
    })
    template.innerHTML = str.trim()
    return template.content
}

class TestComponent extends HTMLElement {

    constructor() {
        super()
    }


    get object() {

    }

    set object() {

    }

    async _render() {
        // const inner = html`<b>Hello There!</b>`
        const inner = await html.import('test.component.html')
        this.innerHTML = ''
        this.appendChild(inner)
    }

    connectedCallback() { this._render() }

    disconnectedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    adoptedCallback() { }

}

window.customElements.define('test-component', TestComponent)
