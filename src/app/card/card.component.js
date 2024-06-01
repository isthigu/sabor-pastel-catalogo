"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardComponent = void 0;
const core_1 = require("@angular/core");
let CardComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.css']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _produto_decorators;
    let _produto_initializers = [];
    let _sabor_decorators;
    let _sabor_initializers = [];
    let _preco_decorators;
    let _preco_initializers = [];
    var CardComponent = _classThis = class {
        constructor() {
            this.produto = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _produto_initializers, 'Pastel de '));
            this.sabor = __runInitializers(this, _sabor_initializers, '');
            this.preco = __runInitializers(this, _preco_initializers, '');
        }
    };
    __setFunctionName(_classThis, "CardComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _produto_decorators = [(0, core_1.Input)()];
        _sabor_decorators = [(0, core_1.Input)()];
        _preco_decorators = [(0, core_1.Input)()];
        __esDecorate(null, null, _produto_decorators, { kind: "field", name: "produto", static: false, private: false, access: { has: obj => "produto" in obj, get: obj => obj.produto, set: (obj, value) => { obj.produto = value; } }, metadata: _metadata }, _produto_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _sabor_decorators, { kind: "field", name: "sabor", static: false, private: false, access: { has: obj => "sabor" in obj, get: obj => obj.sabor, set: (obj, value) => { obj.sabor = value; } }, metadata: _metadata }, _sabor_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _preco_decorators, { kind: "field", name: "preco", static: false, private: false, access: { has: obj => "preco" in obj, get: obj => obj.preco, set: (obj, value) => { obj.preco = value; } }, metadata: _metadata }, _preco_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CardComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CardComponent = _classThis;
})();
exports.CardComponent = CardComponent;
