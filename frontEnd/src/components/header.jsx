import React from "react";
import styles from "../styles/styles.css";
import styled from "styled-components";

const nav_bar = styled.a`
  display: flex;
  flex-direction: row;
  position: relative;
  vertical-align: top;
  height: 60px;
  box-sizing: border-box;
  background-color: red;
`;

const navbar_brand = styled.a`
  color: white;
`;

const Header = () => {
  return (
    <div>
      <div class="header_bar">
        <a class="menu_name">
          {/* <img src="https://www.dongseo.ac.kr/_Img/Common/mlogo.png"></img> */}
          <strong> 동서대학교 수강후기</strong>
        </a>
      </div>
      <nav_bar class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <navbar_brand href="/choice">교양선택</navbar_brand>

          <navbar_brand href="#">교양필수</navbar_brand>

          <navbar_brand href="#">전공선택</navbar_brand>

          <navbar_brand href="#">전공필수</navbar_brand>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav_bar>
    </div>
  );
};

export default Header;
