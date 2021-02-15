import { css } from 'styled-components';
import { breakpointsMedia } from "./breakpointsMedia";

export function propToStyle(propName) {
    return function(props) {

        const propValue = props[propName]; // string ou object

        if(typeof propValue === 'string') {
            return {
                //textAlign: props.textAlign
                // Objeto que tem como chave e valor o a propriedade dinâmica textAlign 
                [propName]: propValue
            }
        }

        if(typeof propValue === 'object') {
            // precisa receber um objeto de acordo c/ o valor especificado
            return breakpointsMedia({
                xs: {
                   [propName]: propValue.xs
                },
                sm: {
                   [propName]: propValue.sm
                },
                md: {
                   [propName]: propValue.md
                },
                lg: {
                   [propName]: propValue.lg
                },
                xl: {
                   [propName]: propValue.xl
                },
            })
        }
    }
}
