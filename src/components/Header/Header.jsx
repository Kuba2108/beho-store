import IconButton from "@mui/material/IconButton";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as FavIcon } from "../../assets/svg/fav-icon.svg";
import { ReactComponent as StatisticIcon } from "../../assets/svg/statistic-icon.svg";
import { ReactComponent as UserIcon } from "../../assets/svg/user-icon.svg";
import CatalogButton from "../ui/Buttons/CatalogButton/CatalogButton";
import SearchInput from "../ui/Inputs/SearchInput/SearchInput";
``;
const icons = [FavIcon, StatisticIcon, UserIcon];

const Header = () => {
  return (
    <header className="header container">
      <div className="header__logo">
        <span>
          <Logo />
        </span>
      </div>
      <div className="header__text">
        <p> Лучшие цены в интернет-магазинах</p>
      </div>
      <div className="header__catalog">
        <CatalogButton />
      </div>
      <div className="header__search">
        <SearchInput />
      </div>
      <div className="header__right">
        {icons.map((Icon, index) => (
          <div key={index}>
            <IconButton
              type="button"
              sx={{ borderRadius: "8px", height: 54, width: "54",backgroundColor: '#F2F5F9' }}
              aria-label="search"
            >
              <Icon />
            </IconButton>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
