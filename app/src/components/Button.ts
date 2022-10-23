export const Button = (text: string, id: string, icon: string) => `
<button id='${id}'>
    ${icon ? `${icon} ` : ''}
    <span>${text}</span>
</button>
`
