# EditorJS Color Tune
- added tunes to select block background color

**Install**
`yarn add https://github.com/ScaleMeUp/editorjs-color-tune`

**Connect**
```js
import BlockTypeTunes from '@scalemeup/editorjs-blocktunes'
//...
new EditorJS({
    tools: {
        colorTune: {
            class: ColorTune,
            config: {
                colorOpacity: 0.4,
                colors: [
                    {key: null, label: 'Transparent'},
                    {key: 'dark', label: 'Dark', color: '#222222'},
                    {key: 'gray', label: 'Gray', color: '#999999'},
                    {key: 'gray-light', label: 'Light Gray', color: '#F0F0F0'},
                    {key: 'green', label: 'Green', color: '#1DCA6C'},
                    {key: 'green-light', label: 'Light Green', color: '#BBEFD3'},
                ],
            }
        },
        // apply for specific content block
        paragraph: {
            class: Paragraph,
            tunes: ['colorTune'],
        },
        // or for anyone
        tunes: ['colorTune']
    },
})
```
