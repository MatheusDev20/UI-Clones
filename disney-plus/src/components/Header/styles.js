import styled from 'styled-components';

export const Nav = styled.nav`
    height: 70px; 
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px; // 0 pra cima e pra baixo e 36 pra esquerda/direta
    overflow-x: hidden;
`
export const Logo = styled.img`
    width: 80px;
    cursor: pointer;

`

export const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        text-decoration: none;
        color: #fff;
        cursor: pointer;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &::after {
                content: "";
                height: 2px;
                background: #fff;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
                span:after {
                transform: scaleX(1);
                opacity: 1;
                }
                
            }
    }
`
export const UserImg = styled.img`
    height: 48px;
    width: 48px;
    border-radius: 50%;
    cursor: pointer;
`
