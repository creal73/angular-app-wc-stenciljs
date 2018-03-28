export class MyComponent {
    render() {
        return (h("div", null,
            h("div", null,
                h("img", { class: "avatar", src: this.image })),
            h("div", { class: "legend" },
                h("h1", null,
                    this.message,
                    " Yohan !"))));
    }
    static get is() { return "bye-bye"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "image": { "type": String, "attr": "image" }, "message": { "type": String, "attr": "message" } }; }
    static get style() { return "/**style-placeholder:bye-bye:**/"; }
}
