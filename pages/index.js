import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

// Propriedade do elemento title que vem como um objeto
// props = {
//   children: Qualquer valor
// }

function Title(props) {
  return <h1>{props.children}</h1>
}

export default function Home() {
  return <div><Title>Qualquer valor</Title>Hot reload :burn.</div>
}
