export const Fieldset = (legend: string, inpt: string, pId: string) => `
<fieldset>
    <legend>${legend}</legend>
    ${inpt}
    <p id=${pId}></p>
</fieldset>
`
