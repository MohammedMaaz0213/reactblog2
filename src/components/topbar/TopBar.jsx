import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-facebook"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGBgYGBoYGBoYGBgYGBgYGBgZGhgaGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGDQhISE0NDQ0MTQxNDQ0NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0MTQ0NDQ0MTQ0NDE/NDQxNDQ0Pz80NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBQYHBAj/xAA6EAACAQIDBQUGBAYCAwAAAAABAgADEQQhMQUSQVFxBiJhgZEHEzKhscFSctHwIzNCYoLhkvGissL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKBEBAQACAQMEAQQDAQAAAAAAAAECEQMSITEEMkFREwVhcYFCobEz/9oADAMBAAIRAxEAPwDrMIo4biEUIDhFHAcIoQHC8UxG3NvU8MhZjc33VUas3LwHjAy5M8uK2jTpi7uqjxM5ZtXtdiHPxhAeC3v6ma1i9ou7DeZn6knPzlpizyzkdfxHbbBobe9v0BP2lmz+1+GqtuK4DXyDZX6XnEnIzvqfl++co7wG8CLHwk9Kv5P2fSauDpnJAzgux+1WKoZJVJA/pbvL0z0m89n/AGge9cU6qBCcgwOV78QdJGtNJlK6DCQR7i8mI2kRxQgOEIQCEIQFCEIBCEIChFCElETCEqHCKEBwihCTvEDCRLWF4QpxeKVFJJAtxM4x2n2x72u7Jcre4z5am3lM37SO0Pe9wh8W+wnOHqE53zMtjGWeXwyTvfWx66xpRJzHHx4Tx02yuSLwNbiWseXASzJ6qqKOIlDqLC7Ajl+s8auCdbyRtbMgSRJnA+HL7yaVTe4yPhzlJKjiT1ErLm+QNpFWx7Om7C9oW5SWm6l3QAE3sCOHymyYHt9QY2dSg56zi2GKk62/fzntdiBa9x4Sul+qvofC4hXUOhDKwuCDe89F5z32VV2NKorG4D90csszOgSGnlKOREckEIXhAIQikWgtCEUJOEUIEI4iYSNrHeF4oQCLegYpAd5ie0201w+Hd2zyIA5kiZWaN7V6tsKq3+Jx6AE/pJVrkO0MVvuWJuWJPE29Z5A2Ug54+UTNLsKkG5kyVN+GecppZt49JlqeBqsLgW8otkR02vLRAXOwMqZ7+c91fZzi1wfE3+09uA2A9TPh+9ZFzxiZhlfhghrofKSapnofWbU3ZZjkz26KZ5sR2VYGyP6iV/Lj9r/iy+mvrVB5j0nswtY3H0OniDPZU7OOqkk36TFL3WIzuBLTKXwjLG4+XT/ZZigHqpc5gMB0yP1E6kpnEfZs5GLXO2+jA+Nhf7fKdqpNIvlpj4XXheRjkJOKEIBeF4QgEIQkghCEbFcV4yIrSqwAjJiEcKkTFHFJBNK9qWEL4QOo/luGP5TkT9JuZM8+Ow61Eem4urqVYeDCx+sFfMuIymQ2Ts5qqiw1NugAhtvZrUar0nBujEfmF+63mLHzmY7Jtwk5XUUwx3l3ZDZewVTMgXvxzmwUcIlrWB+npI3nopCcmWVtdcwkiqps9D/TL8PhlQWAlyrLCkg0q3pU+c9G5K6iws8eJQFTOc7XpbtRrcZ0qqtxaaN2owbIQ/AtabcV1WXNjvFlPZuu9jEt/Qjn/wAQPvO1UjOR+y7Cb1Z6v4ECjq5/RfnOs0jNqxx8PWDCRWMSEmYQgIAJKKEAhCKBK8IoQKozFeKQslFFAmFRCK8RNpIZErIk7yJMDkvtV2cVqpWAydNw5aMml+oPynj7IUFFAPxYm/kbfabz2+wfvKAue6Cb+BIyb6+s55hccmHw6sXIUsVI3S3eF8xbQEAed5FnVLJ8Jx1jeqszidp0kbdZs/Dh1gvaGgv9XyM1xcOjD3hVwrd4M26u8DncC5OnhPHXp0AwujnQ/Hukgm3duv2Mr+PGmXLlG+4HbNN9GnvfFqBec8oYB0YhLoeTZ/MHP0hRx+LbfC0SwRijMD3QVJDZcdOEzvH9VecnbvGw47tNu724NPrMGe0eJc2CnqFlmHps6I5RLul7AMbEEi+ZPe7p4WF9OMrxNOqhG4Sd4f0Fls19GzAtNMcZOymWWVenC7QxKnMEjiG/eU9O33WrQNviUhvAAZnPpChgLtZzvj8QZxn4Z3nm2ZslveYi7MaY36aqzMxOSnjwGnlJnTvdTOrWvtnPZpiQn8MDNyWJ6DIfvxnUKU5h7OMMS+/+FWB+X6zp1KTLtFmtPUsleRBjElB3hFC8LJQihCDhFCA4QhAqivFeBhAvHEoitCdnExheRJhB3kTHCBjdt4ffouvhf0znNF2OjU3osu8N9ivAjezBHqZ1lhe4mg4nD+6qlDod4D1uo9Lyme53i+GruVhsNgd+gm8L7ihG5bydw/NZCrhGYqSASvwkgEjz1mdpUbElGZC2bbjugY2tdgpAJsBmZccIzfE7nq7/AKzO5r9P7MIuGVBv1CAB3iTx8BzPhxmW7P4DdoDeWzuWdxyZ2LEeV7SurgFDiygnW5zt5zP4QALbwkb2mTXdp5w6UWam91XeL023WK2fNkJF7ENc58G8JD3FMm4b0Vz9FM2LH0eIztnaSoUVIBsM46k9LF4ZEUd1Xc8gu4PNn3bDxAMlhcKUQ71t5md2tpd2LWB4gXA8plWUAZCeLG1LIx5KfpG9p1ru9PZHD7l1X4d29+ZJm40pgth4X3aAHUgX8OQmdpzbGajDK7r0iSBkAZISyqV4GECYAYCKMQnZwgDCEiEIQhVaEIjCDkTJRSSoWhJGRMIBiMZkbyAjNe7U4NTSaqB30s4PMKe8DzyvNgMoxNIOrKdGBB6EWizZLppWHqaHwnvp1JrVB2RijXJQlCfFTaW4zaO4MjpOazu6Jl2ZLaLuM0Ivxvy8J5Ke0XUWIJPhMdR2tvj4hfxsPnPShpkZuN7ztJ0jqvwvp167NkVCn5TMUWsoBOgmvtXRfhcm3G1pjMTthwd3vEDiAY6dlys8tyd5jca17IP62C+pA+882Fx90BN5LZn8TEoNbHfPgEz+u6POTjj3Msuze6Cz3JPHSnrSbsV15NTK5NYFkIgYwYAYQhIDEcQMJId4RQhZSJISKx3hVK8iYXiJkopGIwJi3pARkYyZEmEbBlZmO2tt/D4YfxHF/wAIzY+XDzmm472gPUITDIFZmCK797NjYHd8L8ZbpvlTrlup3S7c4f3VVKoyWpk351Az8xb0mvVKqOVvn4frMptDACx32ao7ZO7klm6cFX+0WE1d0eg3eF1OQNv3nMbZlezfVkbEKaKAUUeQEuXaNECzJmP7SftMVgsYDa5sLzLJVTU7tuHhKasXxz1DbaCsN1EI/wAbfWUOwUEHWPE4lN3LhpYazD7Rx6gajID/AHJmO0Zcm1j7QCIR5+XhNg7J46hSUvXqoj1Lboc7lkGlicjfX0mnbNwr1n33+AaD8XXwm30sOjqUdQy6WIuJbcxRMblNt8wmIRxvIyuvNSGHqJ76ZnGKuIfZ9f8AgOQGAbdOakEkbrA6jLI6zc9idv6D92t/Db8We558prJubjDLKY3Vb0skJ58NiUdQyOrqdCpBB8xLlMLbWXjBkRCDayEgGkwZCwjihAcIQgee8leREI2AmF5FpGEVIyqrWVAWdgqjUsQB6mad2n7dJRY0sOA7i4Zz8CEajL42+XjwnNNp7VrYlt+tUZyDlc5L0UZDyEtMVLlp1XanbvCUrhGNVv7Ph83OVul5pG2O3eJrXCEUkPBM2t4uftaanv8ACVh85Mmmdu1leqWfMkm1ySSST4mejZlbcq02Ogdb9N4XmPD3cnxt6SxTF7wx7eHTto07iYqpRDqVYX5gzI7ExgxFBWPxAbr/AJh+uvnHicIdRrOK7l09CWWNQxOxWW5pNb+0/aY/EDE6G48j+k3NqR4iR93LTkqmXHK01BiGFvnYzI4LYxJ3qh3jy4CbCE8JJVPKLyVOPHIro0gosBMjgksLnTU9IsPhSczMF2r2uFBw6HM/GRwH4Op4+HWRjLldRbPKYzbAbZx/vqzuPhvZfyjIeuvnPAzSJMgZ2Samnn5Xd2ymztrVsO2/RqMh4gHun8ynIzoGxPaSCAuJS3D3iZi/G6ajXhOXE3lgMtpH8PojZ21aNdd6k6uPA5+Y4T23nzpg8Y9Jt5HZG5qbf9zoPZv2gm4TEi/AVB/9CV6d+EzkuPmf26UZIGUUa6uoZCGU5gjSWAytbS77xaDC8heSkLHCR84QKgYEyELwgzOfduu1pQvhqBsdKlQajmiHnzPDQZ6bd2hx3uMNUqcVU7t/xt3U+ZE4TiHLEsTckkknUkm5J5y2MUyulbvKw2fyMGMqJlmZ72vWRB73zgx1hx8oVIZW6kx3zPWRv8MDqfKBldibXbDvvLmpydeY59ROk4PFpXQOjAg+oPI8jOQlp6tnbUqUH36bFTx4g9RoZlnxzLvPLbj5entfDrT0BxEofCrymq4bt6bWq0rnmhtf/E/rLanbunwpOepUfS8wvFl9Oj8uP22U4ZZGsURSzMqgasxAHqZpWL7aVWvuIieJu5+w+U13F42pVO9UdnPDeOnQaDylseG3yrlzSeG2bY7W3BTD9C5y/wCAP1M1Mtncm54nUkykGSYzoxxmM1HPlncr3TvFfOIwEsqkokgeMrvJcoVWqZJGlG9mfSWqIWbn2L7Uth3FNyTTY2/KeYnX6VUOoZTcEXBHEGfOCtOm+zrbzsxw7tcFSyX1BHxL6Z+RjLujCXHLU8X/AE6LeSvKwY7yjoWXhIXhBtVeImEUDQvaftLdWnQB+Lvv0GS/Pe9JzF2mx9tMd73FVTe4Vtxeid36hj5zW2MtGOV7qH9D+9ZEvfPlkZJjKHNj+9JKiZOflJDh0lbH6WkwYC5ecdszI8RJCFiaRtJsJEwImIGStC0AMjeNpECBNZKIRjWA2jGgiMfKAcIIch1gDIMcjbmIVTT/AHJhr9JU+Q6/STQc/KFnoQzKbExxo1UqjVGB6jiPMEiYpDLabQR9EUKoZQym4YAg8wRcSwNNW7B4/wB5hUBOaEoegzX5EDymyiUbrd6EhCAjPPjcQKaO50RGY/4gn7S6YLtlXCYKub6puDq5C/eQiuL4lyWLNmSSSfEm5nkYSypUt4iVHPSaMKg9+spYyxlMrJhCKtlLbym9jJhoWTGsYkVMYhVIyJEZiMLCIxmQYwEZICQvJiBJRJLEMo4Axj5RNGeEKkZDn0k2lcBubkS1TPOh/wC5cpv4CBcryxTKVMtQws6D7McXZ6lIn4kDjqhsfk3ynS0nE+yGL93iqTXyLbp6P3fv8p2tDKZeWmPhOELwhZVeaf7Qiz06dJSBvMXa99FFhprmflNvmn9tDeog5IT6n/Uvx4zLLTk9bzXi4blj57OeVNhtwZfmJ5amwamoKnzI+02fdtppIMCNNJ0XjxeJP1Dm+41N9mVh/Tfoyn7yh8I41Rh/iZuDc5Swlbxxvh+oZ/MjSK6EcCOoIgh+k23GJvKy8wR8pqK8Znlj0u/0/P8AllutaWLJiQEcq6jMiTHeEBEyBMZMQMA4yYlaSwSBK8YkQZKSHETlAwGkBGQkpDjIVKnlrn4frLhnrMzhdjUrAszHzA+09tPZtEaJfqWP3mkwtcefruPHt3rXVnopUHb4VY9FJmzU8Oq/CqjoAJcM8pacX3XPl+p69uLA4bC1VIbcYWNxlpO4bOxO/TR/xIreZAuJzIDO03nsm96AHJmH3+8ry8cxx239F67LmzuNknbbPb8cheE53rGZoPaLE72Ifktk9NfmTN9Y5TmWKqbzMx4kk+ZnTwTva8b9Xz1hjj93/ihl/wBSstwMmx9JW9p0V4eKBylYpsxsoLHWwBOU9gwVVl3gjFedtRzHGW7HxYpOVbu7wAuw4i+R5a/KY55yS2fDu9N6a55zHLcl+dMRVBGRFiNQRYzTSMyPE/UzrGPwaVQSbHkQcx5zm229lth3sTvK9yrWtxzB8Zz/AJpl2+Xt8XosuC3vuV4RHeRBjBktU5G8DI3gBkXMbNIawi1NDJgyCx3hCYMd5ASQgSJgIhAGFjOkgmo6/eSkaYu6jmw+slTLxW4YdbAZT0LPPS0lynjwnTHzeferb2HjJrkLypc85Mm5tLxlYsTS/Obf2PfuOvJgfUf6mnjW02XshUtUdfxLf/if9ynLN411egy6fUY/u2+8IoTi0+o3E30PScvr6+sITp4PFeJ+sf4f2pOkpaEJtXj4t9H8pfyL/wComD2jpCE87P5fYYezH+nm2dMR2r4QhMuP3R1c3saI2pihCdThgMRhCAmmd2T8AhCWnlhz+14dq/GfKeJoQkXy04/bDEkI4SFiGklCElNRMnh/5i/mhCJ5Uz9t/htdOXNoIQnRHzuXldTio6mEJeMvtbS1me7Kfz/8G+0ISM/bW3pP/fD+W6whCcT6l//Z"
            alt=""
          />
        ) : (
          <>
            <Link className="topListItem link" to="/login">
              LONGIN
            </Link>
            <Link className="link topListItem" to="/register">
              REGISTER
            </Link>
          </>
        )}

        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
