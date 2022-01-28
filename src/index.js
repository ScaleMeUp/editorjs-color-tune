require('./index.css').toString();
const {make} = require('./util');

import IconColor from './assets/brush.svg';

class ColorTune {
    /**
     * @return {boolean}
     */
    static get isTune() {
        return true;
    }

    /**
     * @param api
     * @param data
     * @param settings
     * @param block tune block
     */
    constructor({api, data, config, block}) {
        this.api = api;
        this.block = block;
        this.data = data || {color: null}

        this.colors = config.colors || [];
        this.colorOpacity = config.colorOpacity || 0.4

        this._CSS = {
            colorWrapper: 'ce-color-tune--colorWrapper',
            colorIcon: 'ce-color-tune--colorIcon',
            colorSelect: 'ce-color-tune--colorSelect',
        }
    }

    /**
     * Wrapping block tune
     * @param blockContent
     */
    wrap(blockContent) {
        this.wrapper = make('div');

        this.wrapper.append(blockContent);

        this._applySelectedColor();

        return this.wrapper
    }

    /**
     * Rendering block tune
     * @returns {*}
     */
    render() {
        const wrapper = make('div');

        if (this.colors.length) {
            const select = this.makeColorSelect()
            wrapper.appendChild(select);
        }

        return wrapper;
    }

    /**
     * Create Color Picker Node
     * @returns HTMLElement
     */
    makeColorSelect() {
        const wrapper = make('div', [this._CSS.colorWrapper]);
        const icon = make('div', this._CSS.colorIcon)
        icon.innerHTML = IconColor;

        const select = make('select', this._CSS.colorSelect);
        this.colors.forEach(c => {
            const {key, label} = typeof c === 'string' ? {key: c, label: c} : c;

            const option = make('option', [this._CSS.colorSelect]);
            option.value = key;
            option.text = label;
            option.selected = this.data.color === key
            select.appendChild(option);
        });

        select.addEventListener('change', (e) => {
            this.data.color = !['null', 'none'].includes(e.target.value) ? e.target.value: null;

            this._applySelectedColor();
        });

        wrapper.appendChild(icon);
        wrapper.appendChild(select);

        return wrapper;
    }

    /**
     * save
     * @returns {*}
     */
    save() {
        return this.data;
    }

    /**
     * @private
     */
    _applySelectedColor() {
        const color = this._getSelectedColor();

        this.wrapper.style.backgroundColor = color !== 'transparent'
            ? this._hexToRgbA(color, this.colorOpacity)
            : color;
    }

    /**
     * @private
     * @return {String}
     */
    _getSelectedColor() {
        if (this.data.color) {
            const color = this.colors.find(c => {
                if (typeof c === 'string') {
                    return c === this.data.color;
                }
                return c.key === this.data.color;
            });

            if (color) {
                return typeof color === 'string' ? color : color.color;
            }
        }
        return 'transparent';
    }

    /**
     * @param {string} hex
     * @param {Number} opacity
     * @return {string}
     * @private
     */
    _hexToRgbA(hex, opacity = 1) {
        let c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');

            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }

            c = '0x' + c.join('');

            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + `,${opacity})`;
        }
        throw new Error('EditorJS :: BlockTunes :: Unexpected Color Format. Color must be valid hex string, got ' + hex);
    }
}

export default ColorTune;
