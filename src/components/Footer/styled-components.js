import styled from 'styled-components'

export const Wrapper = styled.footer`
  width: 100%;
  background-color: #f3f4f5;
  padding: 10px;
`;

export const LinksSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Header = styled.h3`
  font-size: 1rem;
  color: #032f61;
  padding-top: 20px;
  padding-bottom: 10px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 10px 0;
  &:hover {
    text-decoration: underline;
  }
`;

export const Link = styled.a`
  font-size: 1rem;
  color: #032f61;
  text-decoration: none;
`;