import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, Directive, Input, NgModule, signal, ChangeDetectionStrategy, ViewEncapsulation, ContentChild, ContentChildren } from '@angular/core';

class Header {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Header, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: Header, isStandalone: true, selector: "p-header", ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Header, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-header',
                    standalone: true,
                    template: '<ng-content></ng-content>'
                }]
        }] });
class Footer {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Footer, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: Footer, isStandalone: true, selector: "p-footer", ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Footer, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-footer',
                    standalone: true,
                    template: '<ng-content></ng-content>'
                }]
        }] });
class PrimeTemplate {
    template;
    type;
    name;
    constructor(template) {
        this.template = template;
    }
    getType() {
        return this.name;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimeTemplate, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: PrimeTemplate, isStandalone: true, selector: "[pTemplate]", inputs: { type: "type", name: ["pTemplate", "name"] }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimeTemplate, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pTemplate]',
                    standalone: true,
                    host: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; }, propDecorators: { type: [{
                type: Input
            }], name: [{
                type: Input,
                args: ['pTemplate']
            }] } });
class SharedModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SharedModule, imports: [Header, Footer, PrimeTemplate], exports: [Header, Footer, PrimeTemplate] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [Header, Footer, PrimeTemplate],
                    exports: [Header, Footer, PrimeTemplate]
                }]
        }] });

class ObjectUtils {
    static isArray(value, empty = true) {
        return Array.isArray(value) && (empty || value.length !== 0);
    }
    static isObject(value, empty = true) {
        return typeof value === 'object' && !Array.isArray(value) && value != null && (empty || Object.keys(value).length !== 0);
    }
    static equals(obj1, obj2, field) {
        if (field)
            return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
        else
            return this.equalsByValue(obj1, obj2);
    }
    static equalsByValue(obj1, obj2) {
        if (obj1 === obj2)
            return true;
        if (obj1 && obj2 && typeof obj1 == 'object' && typeof obj2 == 'object') {
            var arrA = Array.isArray(obj1), arrB = Array.isArray(obj2), i, length, key;
            if (arrA && arrB) {
                length = obj1.length;
                if (length != obj2.length)
                    return false;
                for (i = length; i-- !== 0;)
                    if (!this.equalsByValue(obj1[i], obj2[i]))
                        return false;
                return true;
            }
            if (arrA != arrB)
                return false;
            var dateA = this.isDate(obj1), dateB = this.isDate(obj2);
            if (dateA != dateB)
                return false;
            if (dateA && dateB)
                return obj1.getTime() == obj2.getTime();
            var regexpA = obj1 instanceof RegExp, regexpB = obj2 instanceof RegExp;
            if (regexpA != regexpB)
                return false;
            if (regexpA && regexpB)
                return obj1.toString() == obj2.toString();
            var keys = Object.keys(obj1);
            length = keys.length;
            if (length !== Object.keys(obj2).length)
                return false;
            for (i = length; i-- !== 0;)
                if (!Object.prototype.hasOwnProperty.call(obj2, keys[i]))
                    return false;
            for (i = length; i-- !== 0;) {
                key = keys[i];
                if (!this.equalsByValue(obj1[key], obj2[key]))
                    return false;
            }
            return true;
        }
        return obj1 !== obj1 && obj2 !== obj2;
    }
    static resolveFieldData(data, field) {
        if (data && field) {
            if (this.isFunction(field)) {
                return field(data);
            }
            else if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                let fields = field.split('.');
                let value = data;
                for (let i = 0, len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }
    static isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }
    static reorderArray(value, from, to) {
        let target;
        if (value && from !== to) {
            if (to >= value.length) {
                to %= value.length;
                from %= value.length;
            }
            value.splice(to, 0, value.splice(from, 1)[0]);
        }
    }
    static insertIntoOrderedArray(item, index, arr, sourceArr) {
        if (arr.length > 0) {
            let injected = false;
            for (let i = 0; i < arr.length; i++) {
                let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
                if (currentItemIndex > index) {
                    arr.splice(i, 0, item);
                    injected = true;
                    break;
                }
            }
            if (!injected) {
                arr.push(item);
            }
        }
        else {
            arr.push(item);
        }
    }
    static findIndexInList(item, list) {
        let index = -1;
        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] == item) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    static contains(value, list) {
        if (value != null && list && list.length) {
            for (let val of list) {
                if (this.equals(value, val))
                    return true;
            }
        }
        return false;
    }
    static removeAccents(str) {
        if (str) {
            str = str.normalize('NFKD').replace(/\p{Diacritic}/gu, '');
        }
        return str;
    }
    static isDate(input) {
        return Object.prototype.toString.call(input) === '[object Date]';
    }
    static isEmpty(value) {
        return value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0) || (!this.isDate(value) && typeof value === 'object' && Object.keys(value).length === 0);
    }
    static isNotEmpty(value) {
        return !this.isEmpty(value);
    }
    static compare(value1, value2, locale, order = 1) {
        let result = -1;
        const emptyValue1 = this.isEmpty(value1);
        const emptyValue2 = this.isEmpty(value2);
        if (emptyValue1 && emptyValue2)
            result = 0;
        else if (emptyValue1)
            result = order;
        else if (emptyValue2)
            result = -order;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2, locale, { numeric: true });
        else
            result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return result;
    }
    static sort(value1, value2, order = 1, locale, nullSortOrder = 1) {
        const result = ObjectUtils.compare(value1, value2, locale, order);
        let finalSortOrder = order;
        // nullSortOrder == 1 means Excel like sort nulls at bottom
        if (ObjectUtils.isEmpty(value1) || ObjectUtils.isEmpty(value2)) {
            finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
        }
        return finalSortOrder * result;
    }
    static merge(obj1, obj2) {
        if (obj1 == undefined && obj2 == undefined) {
            return undefined;
        }
        else if ((obj1 == undefined || typeof obj1 === 'object') && (obj2 == undefined || typeof obj2 === 'object')) {
            return { ...(obj1 || {}), ...(obj2 || {}) };
        }
        else if ((obj1 == undefined || typeof obj1 === 'string') && (obj2 == undefined || typeof obj2 === 'string')) {
            return [obj1 || '', obj2 || ''].join(' ');
        }
        return obj2 || obj1;
    }
    static isPrintableCharacter(char = '') {
        return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
    }
    static getItemValue(obj, ...params) {
        return this.isFunction(obj) ? obj(...params) : obj;
    }
    static findLastIndex(arr, callback) {
        let index = -1;
        if (this.isNotEmpty(arr)) {
            try {
                index = arr.findLastIndex(callback);
            }
            catch {
                index = arr.lastIndexOf([...arr].reverse().find(callback));
            }
        }
        return index;
    }
    static findLast(arr, callback) {
        let item;
        if (this.isNotEmpty(arr)) {
            try {
                item = arr.findLast(callback);
            }
            catch {
                item = [...arr].reverse().find(callback);
            }
        }
        return item;
    }
    static deepEquals(a, b) {
        if (a === b)
            return true;
        if (a && b && typeof a == 'object' && typeof b == 'object') {
            var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
            if (arrA && arrB) {
                length = a.length;
                if (length != b.length)
                    return false;
                for (i = length; i-- !== 0;)
                    if (!this.deepEquals(a[i], b[i]))
                        return false;
                return true;
            }
            if (arrA != arrB)
                return false;
            var dateA = a instanceof Date, dateB = b instanceof Date;
            if (dateA != dateB)
                return false;
            if (dateA && dateB)
                return a.getTime() == b.getTime();
            var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
            if (regexpA != regexpB)
                return false;
            if (regexpA && regexpB)
                return a.toString() == b.toString();
            var keys = Object.keys(a);
            length = keys.length;
            if (length !== Object.keys(b).length)
                return false;
            for (i = length; i-- !== 0;)
                if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
                    return false;
            for (i = length; i-- !== 0;) {
                key = keys[i];
                if (!this.deepEquals(a[key], b[key]))
                    return false;
            }
            return true;
        }
        return a !== a && b !== b;
    }
}

/**
 * Card is a flexible container component.
 * @group Components
 */
class Card {
    el;
    /**
     * Header of the card.
     * @group Props
     */
    header;
    /**
     * Subheader of the card.
     * @group Props
     */
    subheader;
    /**
     * Inline style of the element.
     * @group Props
     */
    set style(value) {
        if (!ObjectUtils.equals(this._style(), value)) {
            this._style.set(value);
        }
    }
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    headerFacet;
    footerFacet;
    templates;
    headerTemplate;
    titleTemplate;
    subtitleTemplate;
    contentTemplate;
    footerTemplate;
    _style = signal(null);
    constructor(el) {
        this.el = el;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'title':
                    this.titleTemplate = item.template;
                    break;
                case 'subtitle':
                    this.subtitleTemplate = item.template;
                    break;
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Card, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: Card, selector: "p-card", inputs: { header: "header", subheader: "subheader", style: "style", styleClass: "styleClass" }, host: { classAttribute: "p-element" }, queries: [{ propertyName: "headerFacet", first: true, predicate: Header, descendants: true }, { propertyName: "footerFacet", first: true, predicate: Footer, descendants: true }, { propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: `
        <div [ngClass]="'p-card p-component'" [ngStyle]="_style()" [class]="styleClass!" [attr.data-pc-name]="'card'">
            <div class="p-card-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate!"></ng-container>
            </div>
            <div class="p-card-body">
                <div class="p-card-title" *ngIf="header || titleTemplate">
                    {{ header }}
                    <ng-container *ngTemplateOutlet="titleTemplate!"></ng-container>
                </div>
                <div class="p-card-subtitle" *ngIf="subheader || subtitleTemplate">
                    {{ subheader }}
                    <ng-container *ngTemplateOutlet="subtitleTemplate!"></ng-container>
                </div>
                <div class="p-card-content">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate!"></ng-container>
                </div>
                <div class="p-card-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate!"></ng-container>
                </div>
            </div>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-card-header img{width:100%}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Card, decorators: [{
            type: Component,
            args: [{ selector: 'p-card', template: `
        <div [ngClass]="'p-card p-component'" [ngStyle]="_style()" [class]="styleClass!" [attr.data-pc-name]="'card'">
            <div class="p-card-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate!"></ng-container>
            </div>
            <div class="p-card-body">
                <div class="p-card-title" *ngIf="header || titleTemplate">
                    {{ header }}
                    <ng-container *ngTemplateOutlet="titleTemplate!"></ng-container>
                </div>
                <div class="p-card-subtitle" *ngIf="subheader || subtitleTemplate">
                    {{ subheader }}
                    <ng-container *ngTemplateOutlet="subtitleTemplate!"></ng-container>
                </div>
                <div class="p-card-content">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate!"></ng-container>
                </div>
                <div class="p-card-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate!"></ng-container>
                </div>
            </div>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-card-header img{width:100%}}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { header: [{
                type: Input
            }], subheader: [{
                type: Input
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], headerFacet: [{
                type: ContentChild,
                args: [Header]
            }], footerFacet: [{
                type: ContentChild,
                args: [Footer]
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class CardModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CardModule, declarations: [Card], imports: [CommonModule], exports: [Card] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [Card],
                    declarations: [Card]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Card, CardModule };
//# sourceMappingURL=card-beans.mjs.map
