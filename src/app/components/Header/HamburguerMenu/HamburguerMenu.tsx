'use client'
import { useState } from 'react'
import styled from 'styled-components'

interface MenuProps {
  $isClicked: boolean
}

const Menu = styled.button<MenuProps>`
  background: #9e2ea8;
  position: relative;
  display: block;
  width: 30px;
  height: 2px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: #9e2ea8;
    display: block;
    width: 100%;
    height: 100%;
    transition: 0.5s ease-in-out;
  }

  &::before {
    top: -10px;
    ${({ $isClicked }) =>
      $isClicked &&
      `
      top: 0;
      transform: rotate(45deg);
    `}
  }

  &::after {
    bottom: -10px;
    ${({ $isClicked }) =>
      $isClicked &&
      `
      bottom: 0;
      transform: rotate(-45deg);
    `}
  }

  &:not(:disabled) {
    ${({ $isClicked }) =>
      $isClicked ? 'background: transparent;' : `background: #9e2ea8;`}
  }
`

export default function HamburguerMenu({ onClick }: { onClick: () => void }) {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="flex items-center md:hidden" onClick={onClick}>
      <Menu
        onClick={() => setIsClicked(!isClicked)}
        $isClicked={isClicked}
      ></Menu>
    </div>
  )
}
