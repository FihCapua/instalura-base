import { MenuWrapper } from "./style";

export function Menu() {
  const links = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Perguntas Frequentes",
      url: "/faq",
    },
    {
      text: "Sobre",
      url: "/sobre",
    },
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>Logo area (esquerda)</MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
        {links.map((item) => {
          return (
            <li>
              <a href={item.url}> {item.text} </a>
            </li>
          );
        })}
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>Buttons area (direita)</MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
