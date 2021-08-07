import React, { useEffect, useState } from 'react'
import { BsChevronUp } from 'react-icons/bs'
import styled, { css } from 'styled-components'

const BackToTopBtn = () => {
    const [ showButton, setShowButton ] = useState( false )

    useEffect(() => {
        const onScroll = e => {
            if( typeof window !== 'undefined' && window.pageYOffset === 0 ) {
                setShowButton( false )
                return
            }
            setShowButton( true )
        };

        if ( typeof window !== 'undefined' ) {
            window.addEventListener("scroll", onScroll);
            /* Clean up function */
            return () => window.removeEventListener("scroll", onScroll);
        }
    }, [ showButton ])

    const scrollToTop = () => {
        if ( typeof window !== 'undefined' ) {
            document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }

    return (
        <Button 
            aria-label="Back to top button"
            onClick={ scrollToTop } 
            onKeyDown={ scrollToTop }
            showButton={ showButton }
        >
            <BsChevronUp />
        </Button>
    
    )
}

const Button = styled.button`
    align-items: center;
    background-color: var(--color-gamma);
    border: none;
    border-radius: var(--radius-alpha);
    bottom: 1.5rem;
    color: var(--color-omega);
    cursor: pointer;
    display: flex;
    font-size: 2rem;
    height: 48px;
    justify-content: center;
    line-height: 1;
    margin: auto;
    opacity: 0;
    position: fixed;
    right: 1.5rem;
    transition: opacity 0.25s linear;
    width: 48px;
    z-index: 30;

    ${({ showButton }) => {
        return showButton
            ? css`
                opacity: 1;
            `
            : css`
                opacity: 0;
                z-index: 0;
            `
    }}
`

export default BackToTopBtn
