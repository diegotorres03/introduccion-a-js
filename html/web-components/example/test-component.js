// --------



class TestComponent extends HTMLElement {
    static get observedAttributes() {
        return ['counter', 'user']
    }
    constructor() {
        super()
        this.counter = 0
        this.user = 'diego'
        this._items = [
            { name: 'fist' },
            { name: 'second' },
            { name: 'third' },
            { name: 'forth' },
            { name: 'fifth' },
            { name: 'sixth' },
        ]
        this.obj = {
            key: 'value',
            isAwesome: true,
            options: ['like', 'enjoy']
        }

    }

    get items() {
        info('getting items')
        // return toArray(this.shadowRoot.querySelector('#items-list').children)
        return this._items
    }

    set items(values) {
        this._items = values
    }

    async _render() {
        const inner = html`<div>
    <input onchange="inputChanged" onkeyup="typeahead">
    <b onclick="clickOnB" ondblclick="dobleclicked">Hello ({user})! ({counter}) times clicked by ({user}).</b>
    <button onclick="clicked">click me</button>
    <h1>({counter})</h1>
    <hr>
    <ol id="item-list">
        <template data-loop="items" data-target="#item-list">
            <li>({items[*].name})<button data-onclick="addToCart" data-param="items[*].name">+</button></li>
        </template>

        <!-- <template data-loop="item in items" data-target="#item-list">
                            <li>({item})<button onclick="addToCart" >+</button></li>
                        </template> -->
    </ol>
    <hr>
    <ul>
        <li data-key="key" data-value="value" data-type="string"><b>key: </b>value</li>
        <li data-key="isAwesome" data-value="isAwesome" data-type="boolean"><b>isAwesome: </b>true</li>
        <li data-key="options" data-type="array"><b>options: </b><ol>
            <li data-index="0" data-value="like" data-type="string">one</li>
            <li data-index="1" data-value="enjoy" data-type="string">two</li>
        </ol></li>
    </ul>
    <hr>
</div>`
        // const inner = await html.import('test.component.html')
        log(inner)
        this.attachShadow({ mode: 'open' }).appendChild(inner)
        //
        renderForLoops(this.shadowRoot, this)
        // get variable names
        updateVars(this.shadowRoot, this)
        // replacing inline handler function with own component methods
        mapComponentEvents(this.shadowRoot, this, eventNames)
    }
    
    clickOnB(event) {
        log('clicked on b', event)
    }
    dobleclicked(event) {
        log('dobleclicked', event)
    }
    clicked(event) {
        log('clicked', event)
        this.counter += 1
        // [ ] fix this
        // this.items.push({ name: `item ${this.counter}` }) 
    }
    inputChanged(event) {
        log('inputChanged', event)
        this.user = event.target.value
    }
    typeahead(event) {
        log('typeahead', event.key)
        this.user = event.target.value
    }

    addToCart(event, value) {
        log('adding to cart', value)
        this.user = value
        // log(event.target)
    }

    ////////////////////////////////////
    connectedCallback() { this._render().catch(error) }
    disconnectedCallback() { }
    attributeChangedCallback(name, oldValue, newValue) {
        log('attributeChangedCallback', name, oldValue, newValue)
    }
    adoptedCallback() { }
}
window.customElements.define('test-component', TestComponent)