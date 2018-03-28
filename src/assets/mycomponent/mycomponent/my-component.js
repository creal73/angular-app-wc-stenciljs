/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class MyComponent {
    render() {
        return (h("div", null, this.message));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "message": { "type": String, "attr": "message" } }; }
    static get style() { return ""; }
}

export { MyComponent };
