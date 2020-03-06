import styled from 'styled-components'

export const Container = styled.div`
  background: #696969;
  padding: 0 10px;
`

export const Content = styled.div`
    height: 74px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
        display: flex;
        align-items: center;
        img {
            margin-top: 10px;
        }
    }
    aside {
        display: flex;
        align-items: center;
    }
`