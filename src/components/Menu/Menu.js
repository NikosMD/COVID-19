import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import './Menu.scss'
import STYLE_LINK from "constants/constans"


const MenuApp = () => (
  <Menu>
    <Container>
      <Menu.Item>
        <img
          src="/img/virus-solid.svg"
        />
      </Menu.Item>
      <Menu.Item>
      <p>
            <span>COVID-19</span>
        </p>
      </Menu.Item>
    </Container>
  </Menu>
)

export default MenuApp