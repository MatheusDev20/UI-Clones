import React from 'react'
import { Nav, Logo, NavMenu, UserImg } from './styles'
export default function Header() {
    return (
        <Nav>
            <Logo src="/assets/logo.svg" />

            <NavMenu>
                <a href="/">
                    <img src="/assets/home-icon.svg" alt="home" />
                    <span>HOME</span>
                </a>
                <a href="/">
                    <img src="/assets/search-icon.svg" alt="search" />
                    <span>SEARCH</span>
                </a>
                <a href="/">
                    <img src="/assets/watchlist-icon.svg" alt="watchlist" />
                    <span>WATCHLIST</span>
                </a>
                <a href="/">
                    <img src="/assets/original-icon.svg" alt="original" />
                    <span>ORIGINALS</span>
                </a>
                <a href="/">
                    <img src="/assets/movie-icon.svg" alt="movies" />
                    <span>MOVIES</span>
                </a>
                <a href="/">
                    <img src="/assets/series-icon.svg" alt="series" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="/assets/my-avatar.png" />
        </Nav>

    )
}

// eu sim eu nao
// toma na techequinha
// Sadomasoquista

