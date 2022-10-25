import { Menu } from "@mantine/core";
import { DivDropDown } from "../styled";

export const DropDownGeners = () => {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <a style={{ cursor: "pointer" }}>Geners</a>
      </Menu.Target>
      {
        <Menu.Dropdown
          style={{
            border: "none",
            backgroundColor: "rgba(0, 0, 0, 0.813)",
            borderRadius: "8px",
          }}
        >
          <DivDropDown>
            <ul>
              <li>
                <a href="#">Geners</a>
              </li>
              <li>
                <a href="#">Geners</a>
              </li>
              <li>
                <a href="#">Geners</a>
              </li>
              <li>
                <a href="#">Geners</a>
              </li>
              <li>
                <a href="#">Geners</a>
              </li>
              <li>
                <a href="#">Geners</a>
              </li>
              <li>
                <a href="#">Geners</a>
              </li>
              <li>
                <a href="#">Geners</a>
              </li>
              <li>
                <a href="#">Geners</a>
              </li>
              <li>
                <a href="#">Geners</a>
              </li>
              <li>
                <a href="#">Geners</a>
              </li>
              <li>
                <a href="#">Geners</a>
              </li>
              <li>
                <a href="#">Geners</a>
              </li>
              <li>
                <a href="#">Geners</a>
              </li>
              <li>
                <a href="#">Geners</a>
              </li>
            </ul>
          </DivDropDown>
        </Menu.Dropdown>
      }
    </Menu>
  );
};
