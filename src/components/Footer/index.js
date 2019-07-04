import { Link } from "gatsby"
import React from "react"
import { Wrapper, LinksSection, Header, List, ListItem, Link as FooterLink } from './styled-components'
import footerLinks from './links' 

const Footer = () => (
  <Wrapper>
    <LinksSection>
      {footerLinks.map(list => (
        <div key={list.title}>
          <Header>{list.title}</Header>
          <List>
            {list.links.map(link => (
              <ListItem key={link.text}>
                <FooterLink href={link.url}>
                  <Link to={link.url}>
                    {link.text}
                  </Link>
                </FooterLink>
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </LinksSection>
  </Wrapper>
)

export default Footer;