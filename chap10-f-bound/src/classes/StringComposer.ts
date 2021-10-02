import {IAddable, IMultiplyable, IValueProvider} from "../interfaces";

export class StringComposer implements IValueProvider<string>, IAddable<string>, IMultiplyable<number> {
    constructor(private _value: string = '') { }
    value(): string {
        return this._value;
    }
    add(value: string): this {
        this._value = this._value.concat(value);
        return this;
    }
    multiply(value: number): this {
        const val = this.value();
        for (let index=0; index < value; index++) {
            this.add(val);
        }
        return this;
    }
}