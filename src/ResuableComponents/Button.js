import styled from 'styled-components'
import { exportedTheme as theme } from '../themeprovider';

const Button = styled.a`
    display: inline-block;
    border-radius: 4px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
    background: ${theme['main-primary']};
    color: black;
    text-align:center;
}
`

export default Button;