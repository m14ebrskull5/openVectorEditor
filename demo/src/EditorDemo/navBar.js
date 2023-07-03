import React, { useState, useEffect } from "react";

/* eslint-disable */
export const NavBar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.onclick = () => {
      setOpen(false);
    };
  }, []);
  return (
    <>
      <div
        className="_1rdwcqg js-navTour-nav _test-navBarContents"
        data-test-component="NavBarContents"
        data-test-element="root"
      >
        <div>
          <a
            href="/"
            className="_gtdwdr"
            data-test-component="NavBarIcon"
            data-test-key="home"
            data-original-title=""
            title=""
          >
            <div className="_1n7yfxd">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="currentColor"
                className="_f9e8qy _1oubpp0"
                data-test-component="BenchlingIcon"
                data-test-key="benchling"
              >
                <defs>
                  <path
                    d="M4.603 7.17c-.826-.237-2.054-.548-4.253-.753A.381.381 0 0 1 .01 6.12a.382.382 0 0 1 .18-.415C.197 5.7.604 5.313.924 4.5c.037-.093.08-.257.128-.445C1.355 2.86 2.072.069 5.738.069c3.667 0 4.382 2.792 4.688 3.986.049.188.091.352.128.445.318.813.727 1.2.733 1.204a.383.383 0 0 1 .177.415.379.379 0 0 1-.339.298c-2.269.212-3.504.537-4.33.776v.001c-.516.153-.795.267-.998.35l-.053.022c-.877.325-2.04.924-2.04 2.348 0 1.422 1.157 2.021 2.034 2.347.877-.326 2.035-.925 2.035-2.347 0-.835-.392-1.475-1.2-1.956L6.51 7.92l.072-.025c.271-.09.586-.18.935-.265l.017-.004.014.011c.706.6 1.063 1.366 1.063 2.277 0 1.223-.633 2.172-1.882 2.824a6.541 6.541 0 0 1-.85.365c-.042.014-.085.03-.128.046-.879.325-2.046.923-2.046 2.35a.42.42 0 1 1-.837 0c0-1.201.613-2.14 1.824-2.792-1.21-.65-1.825-1.59-1.825-2.793 0-1.173.584-2.096 1.737-2.744Zm3.588 8.75a.42.42 0 0 1-.418-.42c0-.836-.393-1.476-1.201-1.957l-.058-.035.061-.027c.277-.12.534-.252.768-.395l.02-.012.018.014c.816.618 1.23 1.43 1.23 2.412a.42.42 0 0 1-.42.42Zm-3.773-.87a1.49 1.49 0 0 1 .463-.67h1.714c.229.198.381.42.463.67h-2.64Zm0-5.585c.082-.251.234-.472.463-.67h1.714c.229.198.381.419.463.67h-2.64Zm2.64.968a1.49 1.49 0 0 1-.462.67H4.88a1.49 1.49 0 0 1-.463-.67h2.64Zm.544-6.135a.49.49 0 1 0 .981-.001.49.49 0 0 0-.981 0Zm-4.707 0a.49.49 0 1 0 .979.002.49.49 0 0 0-.98-.002Z"
                    id="benchling-logo_svg__a"
                  ></path>
                </defs>
                <use
                  xlinkHref="#benchling-logo_svg__a"
                  transform="translate(2.227)"
                ></use>
              </svg>
            </div>
          </a>
          <div
            className="_gtdwdr"
            data-test-component="NavBarIcon"
            data-test-key="projects"
            data-original-title=""
            title=""
          >
            <div className="_1n7yfxd">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="briefcase"
                className="svg-inline--fa fa-briefcase _f9e8qy _test-navDropdownMenu-item-projects"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-test-component="BenchlingIcon"
                data-test-key="source"
              >
                <path
                  fill="currentColor"
                  d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className="_gtdwdr"
            data-test-component="NavBarIcon"
            data-test-key="search"
            data-original-title=""
            title=""
          >
            <div className="_1n7yfxd">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="magnifying-glass"
                className="svg-inline--fa fa-magnifying-glass _f9e8qy"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-test-component="BenchlingIcon"
                data-test-key="search"
              >
                <path
                  fill="currentColor"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="_gtdwdr" data-original-title="" title="">
            <div className="_1n7yfxd _test-createIcon-inner">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus-large"
                className="svg-inline--fa fa-plus-large _f9e8qy"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-test-component="BenchlingIcon"
                data-test-key="compose"
              >
                <path
                  fill="currentColor"
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H224V480c0 17.7 14.3 32 32 32s32-14.3 32-32V288l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-192 0 0-192z"
                ></path>
              </svg>
            </div>
            <div className="">
              <div className="_1ot5eca"></div>
              <ul
                className="navDropdownMenu dropdown-menu dropdown-menu--dropRight"
                data-test-component="CreateMenu"
                data-test-element="root"
                style={{ top: "0px" }}
              >
                <div>
                  <li
                    className="navDropdownMenu-item-container"
                    data-test-component="LegacyDropdownMenu"
                    data-test-element="item"
                  >
                    <a
                      tabIndex="0"
                      className="navDropdownMenu-item js-create-new-project"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="briefcase"
                        className="svg-inline--fa fa-briefcase navDropdownMenu-item-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="source"
                      >
                        <path
                          fill="currentColor"
                          d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
                        ></path>
                      </svg>
                      <span className="navDropdownMenu-item-text">Project</span>
                    </a>
                  </li>
                  <li className="divider"></li>
                </div>
                <div>
                  <li
                    className="navDropdownMenu-item-container navDropdownMenu-submenu"
                    data-test-component="LegacyDropdownMenu"
                    data-test-element="item"
                  >
                    <a
                      tabIndex="0"
                      className="navDropdownMenu-item js-create-new-entry"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="file"
                        className="svg-inline--fa fa-file navDropdownMenu-item-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="entry"
                      >
                        <path
                          fill="currentColor"
                          d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
                        ></path>
                      </svg>
                      <span className="navDropdownMenu-item-text">Entry</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        className="svg-inline--fa fa-chevron-right navDropdownMenu-item-chevron"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="chevron"
                      >
                        <path
                          fill="currentColor"
                          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        ></path>
                      </svg>
                    </a>
                    <ul className="navDropdownMenu dropdown-menu">
                      <div>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item js-create-new-entry"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="file"
                              className="svg-inline--fa fa-file navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="entry"
                            >
                              <path
                                fill="currentColor"
                                d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Blank entry
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a tabIndex="0" className="navDropdownMenu-item">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="rectangle-history"
                              className="svg-inline--fa fa-rectangle-history navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="template_collection"
                            >
                              <path
                                fill="currentColor"
                                d="M512 224c0-35.3-28.7-64-64-64L64 160c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224zM440 80L72 80c-13.3 0-24 10.7-24 24s10.7 24 24 24l368 0c13.3 0 24-10.7 24-24s-10.7-24-24-24zM392 0L120 0C106.7 0 96 10.7 96 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Entry from template
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li
                    className="navDropdownMenu-item-container"
                    data-test-component="LegacyDropdownMenu"
                    data-test-element="item"
                  >
                    <a
                      tabIndex="0"
                      className="navDropdownMenu-item js-create-new-protocol"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square-list"
                        className="svg-inline--fa fa-square-list navDropdownMenu-item-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="protocol"
                      >
                        <path
                          fill="currentColor"
                          d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32-128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-248c-13.3 0-24 10.7-24 24s10.7 24 24 24H352c13.3 0 24-10.7 24-24s-10.7-24-24-24H192zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H352c13.3 0 24-10.7 24-24s-10.7-24-24-24H192zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H352c13.3 0 24-10.7 24-24s-10.7-24-24-24H192z"
                        ></path>
                      </svg>
                      <span className="navDropdownMenu-item-text">
                        Protocol
                      </span>
                    </a>
                  </li>
                  <li className="divider"></li>
                </div>
                <div>
                  <li
                    className="navDropdownMenu-item-container navDropdownMenu-submenu"
                    data-test-component="LegacyDropdownMenu"
                    data-test-element="item"
                  >
                    <a tabIndex="0" className="navDropdownMenu-item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="dna"
                        className="svg-inline--fa fa-dna navDropdownMenu-item-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="helix"
                      >
                        <path
                          fill="currentColor"
                          d="M384 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 2.7-.1 5.4-.2 8H48.2c-.2-2.6-.2-5.3-.2-8C48 10.7 37.3 0 24 0S0 10.7 0 24C0 79.6 24.5 125.9 58.1 165.9c27.2 32.4 61.5 62 95.8 90.1c-34.3 28.1-68.6 57.7-95.8 90.1C24.5 386.1 0 432.4 0 488c0 13.3 10.7 24 24 24s24-10.7 24-24c0-2.7 .1-5.4 .2-8H335.8c.2 2.6 .2 5.3 .2 8c0 13.3 10.7 24 24 24s24-10.7 24-24c0-55.6-24.5-101.9-58.1-141.9c-20.6-24.5-45.2-47.3-70.8-69.2c-8.7 7.1-17.3 14.1-25.7 20.9l0 0-2.2 1.8c-3.4 2.7-6.7 5.5-10.1 8.1c11.2 9.4 22.1 18.8 32.3 28.3h-115c22-20.4 46.7-40.4 72.2-61c.3-.2 .5-.4 .8-.6l.7-.6c41.3-33.4 84.7-68.6 117.7-107.9C359.5 125.9 384 79.6 384 24zM89.1 384H294.9c12.4 15.7 22.4 31.6 29.4 48H59.7c7-16.4 17-32.3 29.4-48zM59.7 80H324.3c-7 16.4-17 32.3-29.4 48H89.1C76.7 112.3 66.8 96.4 59.7 80zm189.8 96c-17.8 16.4-37.2 32.6-57.5 49.1c-20.3-16.5-39.7-32.7-57.5-49.1h115z"
                        ></path>
                      </svg>
                      <span className="navDropdownMenu-item-text">
                        DNA / RNA sequence
                      </span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        className="svg-inline--fa fa-chevron-right navDropdownMenu-item-chevron"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="chevron"
                      >
                        <path
                          fill="currentColor"
                          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        ></path>
                      </svg>
                    </a>
                    <ul className="navDropdownMenu dropdown-menu">
                      <div>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item js-create-new-sequence"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="dna"
                              className="svg-inline--fa fa-dna navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="sequence"
                            >
                              <path
                                fill="currentColor"
                                d="M384 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 2.7-.1 5.4-.2 8H48.2c-.2-2.6-.2-5.3-.2-8C48 10.7 37.3 0 24 0S0 10.7 0 24C0 79.6 24.5 125.9 58.1 165.9c27.2 32.4 61.5 62 95.8 90.1c-34.3 28.1-68.6 57.7-95.8 90.1C24.5 386.1 0 432.4 0 488c0 13.3 10.7 24 24 24s24-10.7 24-24c0-2.7 .1-5.4 .2-8H335.8c.2 2.6 .2 5.3 .2 8c0 13.3 10.7 24 24 24s24-10.7 24-24c0-55.6-24.5-101.9-58.1-141.9c-20.6-24.5-45.2-47.3-70.8-69.2c-8.7 7.1-17.3 14.1-25.7 20.9l0 0-2.2 1.8c-3.4 2.7-6.7 5.5-10.1 8.1c11.2 9.4 22.1 18.8 32.3 28.3h-115c22-20.4 46.7-40.4 72.2-61c.3-.2 .5-.4 .8-.6l.7-.6c41.3-33.4 84.7-68.6 117.7-107.9C359.5 125.9 384 79.6 384 24zM89.1 384H294.9c12.4 15.7 22.4 31.6 29.4 48H59.7c7-16.4 17-32.3 29.4-48zM59.7 80H324.3c-7 16.4-17 32.3-29.4 48H89.1C76.7 112.3 66.8 96.4 59.7 80zm189.8 96c-17.8 16.4-37.2 32.6-57.5 49.1c-20.3-16.5-39.7-32.7-57.5-49.1h115z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              New DNA / RNA sequence
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item js-create-alignment"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="align-left"
                              className="svg-inline--fa fa-align-left navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="alignment"
                            >
                              <path
                                fill="currentColor"
                                d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              New alignment
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item js-import-sequence"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="file-import"
                              className="svg-inline--fa fa-file-import navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="import"
                            >
                              <path
                                fill="currentColor"
                                d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Import DNA / RNA sequences
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a tabIndex="0" className="navDropdownMenu-item">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="file-import"
                              className="svg-inline--fa fa-file-import navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="import"
                            >
                              <path
                                fill="currentColor"
                                d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Import DNA / RNA sequences from spreadsheet
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container hidden"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item js-batch-sequence-import"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="file-import"
                              className="svg-inline--fa fa-file-import navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="import"
                            >
                              <path
                                fill="currentColor"
                                d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Bulk import DNA / RNA from genome
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container hidden"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a tabIndex="0" className="navDropdownMenu-item">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="arrows-rotate"
                              className="svg-inline--fa fa-arrows-rotate navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="assembly"
                            >
                              <path
                                fill="currentColor"
                                d="M89.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L370.3 160H320c-17.7 0-32 14.3-32 32s14.3 32 32 32H447.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L398.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM23 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L109.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H32.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Assemble DNA / RNA sequences by concatenation
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container hidden"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item"
                            href="/bulk-workflows/assembly"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="arrows-rotate"
                              className="svg-inline--fa fa-arrows-rotate navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="assembly"
                            >
                              <path
                                fill="currentColor"
                                d="M89.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L370.3 160H320c-17.7 0-32 14.3-32 32s14.3 32 32 32H447.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L398.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM23 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L109.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H32.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Bulk assemble DNA
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li
                    className="navDropdownMenu-item-container navDropdownMenu-submenu"
                    data-test-component="LegacyDropdownMenu"
                    data-test-element="item"
                  >
                    <a tabIndex="0" className="navDropdownMenu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="navDropdownMenu-item-icon"
                        data-test-component="BenchlingIcon"
                        data-test-key="protein"
                      >
                        <path d="m8.332 2 .627.779-4.332 3.49L4 5.492z"></path>
                        <circle cx="8.5" cy="2.5" r="1.5"></circle>
                        <circle cx="3.5" cy="6.5" r="2.5"></circle>
                        <circle cx="12.5" cy="6.5" r="1.5"></circle>
                        <path d="M8 3h1v8H8z"></path>
                        <path d="M8 2.707 8.707 2l3.678 3.678-.707.707z"></path>
                        <rect width="5" height="5" x="6" y="9" rx="1"></rect>
                      </svg>
                      <span className="navDropdownMenu-item-text">
                        AA sequence
                      </span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        className="svg-inline--fa fa-chevron-right navDropdownMenu-item-chevron"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="chevron"
                      >
                        <path
                          fill="currentColor"
                          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        ></path>
                      </svg>
                    </a>
                    <ul className="navDropdownMenu dropdown-menu">
                      <div>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a tabIndex="0" className="navDropdownMenu-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="navDropdownMenu-item-icon"
                              data-test-component="BenchlingIcon"
                              data-test-key="protein"
                            >
                              <path d="m8.332 2 .627.779-4.332 3.49L4 5.492z"></path>
                              <circle cx="8.5" cy="2.5" r="1.5"></circle>
                              <circle cx="3.5" cy="6.5" r="2.5"></circle>
                              <circle cx="12.5" cy="6.5" r="1.5"></circle>
                              <path d="M8 3h1v8H8z"></path>
                              <path d="M8 2.707 8.707 2l3.678 3.678-.707.707z"></path>
                              <rect
                                width="5"
                                height="5"
                                x="6"
                                y="9"
                                rx="1"
                              ></rect>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              New AA sequence
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a tabIndex="0" className="navDropdownMenu-item">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="align-left"
                              className="svg-inline--fa fa-align-left navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="alignment"
                            >
                              <path
                                fill="currentColor"
                                d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              New alignment
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a tabIndex="0" className="navDropdownMenu-item">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="file-import"
                              className="svg-inline--fa fa-file-import navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="import"
                            >
                              <path
                                fill="currentColor"
                                d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Import AA sequences
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a tabIndex="0" className="navDropdownMenu-item">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="file-import"
                              className="svg-inline--fa fa-file-import navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="import"
                            >
                              <path
                                fill="currentColor"
                                d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Import AA sequences from spreadsheet
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container hidden"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item"
                            href="/bulk-workflows/translation"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="navDropdownMenu-item-icon"
                              data-test-component="BenchlingIcon"
                              data-test-key="protein"
                            >
                              <path d="m8.332 2 .627.779-4.332 3.49L4 5.492z"></path>
                              <circle cx="8.5" cy="2.5" r="1.5"></circle>
                              <circle cx="3.5" cy="6.5" r="2.5"></circle>
                              <circle cx="12.5" cy="6.5" r="1.5"></circle>
                              <path d="M8 3h1v8H8z"></path>
                              <path d="M8 2.707 8.707 2l3.678 3.678-.707.707z"></path>
                              <rect
                                width="5"
                                height="5"
                                x="6"
                                y="9"
                                rx="1"
                              ></rect>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Bulk translate DNA to AA
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li
                    className="navDropdownMenu-item-container navDropdownMenu-submenu"
                    data-test-component="LegacyDropdownMenu"
                    data-test-element="item"
                  >
                    <a tabIndex="0" className="navDropdownMenu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="navDropdownMenu-item-icon"
                        data-test-component="BenchlingIcon"
                        data-test-key="oligo-v2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.5 7H4v4.25a.75.75 0 0 0 1.5 0V7H7v4.25a.75.75 0 0 0 1.5 0V7H10v4.25a.75.75 0 0 0 1.5 0V7H13v4.25a.75.75 0 0 0 1.5 0V7h.5a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2v4.25a.75.75 0 0 0 1.5 0V7Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="navDropdownMenu-item-text">Oligo</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        className="svg-inline--fa fa-chevron-right navDropdownMenu-item-chevron"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="chevron"
                      >
                        <path
                          fill="currentColor"
                          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        ></path>
                      </svg>
                    </a>
                    <ul className="navDropdownMenu dropdown-menu">
                      <div>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item js-create-new-oligo"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="navDropdownMenu-item-icon"
                              data-test-component="BenchlingIcon"
                              data-test-key="oligo-v2"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.5 7H4v4.25a.75.75 0 0 0 1.5 0V7H7v4.25a.75.75 0 0 0 1.5 0V7H10v4.25a.75.75 0 0 0 1.5 0V7H13v4.25a.75.75 0 0 0 1.5 0V7h.5a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2v4.25a.75.75 0 0 0 1.5 0V7Z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              New oligo
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a tabIndex="0" className="navDropdownMenu-item">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="file-import"
                              className="svg-inline--fa fa-file-import navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="import"
                            >
                              <path
                                fill="currentColor"
                                d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Import DNA / RNA oligos from spreadsheet
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container hidden"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a tabIndex="0" className="navDropdownMenu-item">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="arrows-rotate"
                              className="svg-inline--fa fa-arrows-rotate navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="assembly"
                            >
                              <path
                                fill="currentColor"
                                d="M89.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L370.3 160H320c-17.7 0-32 14.3-32 32s14.3 32 32 32H447.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L398.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM23 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L109.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H32.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Assemble DNA / RNA oligos by concatenation
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li
                    className="navDropdownMenu-item-container navDropdownMenu-submenu"
                    data-test-component="LegacyDropdownMenu"
                    data-test-element="item"
                  >
                    <a tabIndex="0" className="navDropdownMenu-item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="crosshairs"
                        className="svg-inline--fa fa-crosshairs navDropdownMenu-item-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="crispr"
                      >
                        <path
                          fill="currentColor"
                          d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        ></path>
                      </svg>
                      <span className="navDropdownMenu-item-text">CRISPR</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        className="svg-inline--fa fa-chevron-right navDropdownMenu-item-chevron"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="chevron"
                      >
                        <path
                          fill="currentColor"
                          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        ></path>
                      </svg>
                    </a>
                    <ul className="navDropdownMenu dropdown-menu">
                      <div>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item js-create-new-crispr"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="crosshairs"
                              className="svg-inline--fa fa-crosshairs navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="crispr"
                            >
                              <path
                                fill="currentColor"
                                d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              CRISPR guides
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item js-create-new-hr-template"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="paste"
                              className="svg-inline--fa fa-paste navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="hr-template"
                            >
                              <path
                                fill="currentColor"
                                d="M160 0c-23.7 0-44.4 12.9-55.4 32H48C21.5 32 0 53.5 0 80V400c0 26.5 21.5 48 48 48H192V176c0-44.2 35.8-80 80-80h48V80c0-26.5-21.5-48-48-48H215.4C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48V448v16c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V256H416c-17.7 0-32-14.3-32-32V128H320 272zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm256 88v96h96l-96-96z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              HR template
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li
                    className="navDropdownMenu-item-container navDropdownMenu-submenu"
                    data-test-component="LegacyDropdownMenu"
                    data-test-element="item"
                  >
                    <a tabIndex="0" className="navDropdownMenu-item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square-list"
                        className="svg-inline--fa fa-square-list navDropdownMenu-item-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="basic_folder_item"
                      >
                        <path
                          fill="currentColor"
                          d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32-128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-248c-13.3 0-24 10.7-24 24s10.7 24 24 24H352c13.3 0 24-10.7 24-24s-10.7-24-24-24H192zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H352c13.3 0 24-10.7 24-24s-10.7-24-24-24H192zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H352c13.3 0 24-10.7 24-24s-10.7-24-24-24H192z"
                        ></path>
                      </svg>
                      <span className="navDropdownMenu-item-text">
                        Entity from schema
                      </span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        className="svg-inline--fa fa-chevron-right navDropdownMenu-item-chevron"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="chevron"
                      >
                        <path
                          fill="currentColor"
                          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        ></path>
                      </svg>
                    </a>
                    <ul className="navDropdownMenu dropdown-menu navDropdownMenu--dropUp">
                      <div>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item js-import-inventory-files"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="table"
                              className="svg-inline--fa fa-table navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="table"
                            >
                              <path
                                fill="currentColor"
                                d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Import
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container hidden"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item"
                            href="/bulk-workflows/antibody"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="navDropdownMenu-item-icon"
                              data-test-component="BenchlingIcon"
                              data-test-key="antibody"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.22 1.22a.75.75 0 0 1 1.06 0l3.415 3.414A2.75 2.75 0 0 1 7.5 6.578v8.172a.75.75 0 0 1-1.5 0V6.578a1.25 1.25 0 0 0-.366-.883L2.22 2.28a.75.75 0 0 1 0-1.06Zm11.56 0a.75.75 0 0 0-1.06 0L9.305 4.634A2.75 2.75 0 0 0 8.5 6.578v8.172a.75.75 0 0 0 1.5 0V6.578c0-.331.132-.649.366-.883L13.78 2.28a.75.75 0 0 0 0-1.06Z"
                                clipRule="evenodd"
                              ></path>
                              <rect
                                width="1"
                                height="5"
                                x="1"
                                y="3.707"
                                rx="0.5"
                                transform="rotate(-45 1 3.707)"
                              ></rect>
                              <rect
                                width="1"
                                height="5"
                                rx="0.5"
                                transform="scale(-1 1) rotate(-45 -3.146 20.253)"
                              ></rect>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Bulk create antibodies
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li
                    className="navDropdownMenu-item-container navDropdownMenu-submenu"
                    data-test-component="LegacyDropdownMenu"
                    data-test-element="item"
                  >
                    <a tabIndex="0" className="navDropdownMenu-item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ball-pile"
                        className="svg-inline--fa fa-ball-pile navDropdownMenu-item-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="mixture"
                      >
                        <path
                          fill="currentColor"
                          d="M288 160c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80zM176 328c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80zM160 432c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80s80-35.8 80-80zm128 80c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80zm288-80c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80s80-35.8 80-80zM400 328c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"
                        ></path>
                      </svg>
                      <span className="navDropdownMenu-item-text">Mixture</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        className="svg-inline--fa fa-chevron-right navDropdownMenu-item-chevron"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="chevron"
                      >
                        <path
                          fill="currentColor"
                          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        ></path>
                      </svg>
                    </a>
                    <ul className="navDropdownMenu dropdown-menu navDropdownMenu--dropUp">
                      <div>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item js-import-inventory-files"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="table"
                              className="svg-inline--fa fa-table navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="table"
                            >
                              <path
                                fill="currentColor"
                                d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Import
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li
                    className="navDropdownMenu-item-container hidden navDropdownMenu-submenu"
                    data-test-component="LegacyDropdownMenu"
                    data-test-element="item"
                  >
                    <a tabIndex="0" className="navDropdownMenu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="navDropdownMenu-item-icon"
                        data-test-component="BenchlingIcon"
                        data-test-key="molecule"
                      >
                        <path
                          fillRule="evenodd"
                          d="m8.25 1.876 4.928 2.846a.5.5 0 0 1 .25.433v5.69a.5.5 0 0 1-.25.433L8.25 14.124a.5.5 0 0 1-.5 0l-4.928-2.846a.5.5 0 0 1-.25-.433v-5.69a.5.5 0 0 1 .25-.433L7.75 1.876a.5.5 0 0 1 .5 0ZM7 .577a2 2 0 0 1 2 0l4.928 2.846a2 2 0 0 1 1 1.732v5.69a2 2 0 0 1-1 1.732L9 15.423a2 2 0 0 1-2 0l-4.928-2.846a2 2 0 0 1-1-1.732v-5.69a2 2 0 0 1 1-1.732L7 .577Zm.933 2.673a.5.5 0 1 0-.5.866l4.33 2.5a.5.5 0 1 0 .5-.866l-4.33-2.5ZM4.5 5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5Zm7.763 5.116a.5.5 0 0 0-.5-.866l-4.33 2.5a.5.5 0 0 0 .5.866l4.33-2.5Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="navDropdownMenu-item-text">
                        Molecule
                      </span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        className="svg-inline--fa fa-chevron-right navDropdownMenu-item-chevron"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="chevron"
                      >
                        <path
                          fill="currentColor"
                          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        ></path>
                      </svg>
                    </a>
                    <ul className="navDropdownMenu dropdown-menu">
                      <div>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a tabIndex="0" className="navDropdownMenu-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="navDropdownMenu-item-icon"
                              data-test-component="BenchlingIcon"
                              data-test-key="molecule"
                            >
                              <path
                                fillRule="evenodd"
                                d="m8.25 1.876 4.928 2.846a.5.5 0 0 1 .25.433v5.69a.5.5 0 0 1-.25.433L8.25 14.124a.5.5 0 0 1-.5 0l-4.928-2.846a.5.5 0 0 1-.25-.433v-5.69a.5.5 0 0 1 .25-.433L7.75 1.876a.5.5 0 0 1 .5 0ZM7 .577a2 2 0 0 1 2 0l4.928 2.846a2 2 0 0 1 1 1.732v5.69a2 2 0 0 1-1 1.732L9 15.423a2 2 0 0 1-2 0l-4.928-2.846a2 2 0 0 1-1-1.732v-5.69a2 2 0 0 1 1-1.732L7 .577Zm.933 2.673a.5.5 0 1 0-.5.866l4.33 2.5a.5.5 0 1 0 .5-.866l-4.33-2.5ZM4.5 5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5Zm7.763 5.116a.5.5 0 0 0-.5-.866l-4.33 2.5a.5.5 0 0 0 .5.866l4.33-2.5Z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              New molecule
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a tabIndex="0" className="navDropdownMenu-item">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="file-import"
                              className="svg-inline--fa fa-file-import navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="import"
                            >
                              <path
                                fill="currentColor"
                                d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Import molecules
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li className="divider"></li>
                </div>
                <div>
                  <li
                    className="navDropdownMenu-item-container navDropdownMenu-submenu"
                    data-test-component="LegacyDropdownMenu"
                    data-test-element="item"
                  >
                    <a
                      tabIndex="0"
                      className="navDropdownMenu-item navDropdownMenu-item--emptyIcon navDropdownMenu-item--noIcon"
                      data-test-component="CreateMenu"
                      data-test-element="more"
                    >
                      <span className="navDropdownMenu-item-text">More</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        className="svg-inline--fa fa-chevron-right navDropdownMenu-item-chevron"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-test-component="BenchlingIcon"
                        data-test-key="chevron"
                      >
                        <path
                          fill="currentColor"
                          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        ></path>
                      </svg>
                    </a>
                    <ul className="navDropdownMenu dropdown-menu navDropdownMenu--dropUp">
                      <div>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item js-create-new-folder"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="folder"
                              className="svg-inline--fa fa-folder navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="folder"
                            >
                              <path
                                fill="currentColor"
                                d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Folder
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container hidden"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a tabIndex="0" className="navDropdownMenu-item">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="table"
                              className="svg-inline--fa fa-table navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="table"
                            >
                              <path
                                fill="currentColor"
                                d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Import batches
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container hidden"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a tabIndex="0" className="navDropdownMenu-item">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="table"
                              className="svg-inline--fa fa-table navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="table"
                            >
                              <path
                                fill="currentColor"
                                d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Update batches
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item js-create-template"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="rectangle-history"
                              className="svg-inline--fa fa-rectangle-history navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="template_collection"
                            >
                              <path
                                fill="currentColor"
                                d="M512 224c0-35.3-28.7-64-64-64L64 160c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224zM440 80L72 80c-13.3 0-24 10.7-24 24s10.7 24 24 24l368 0c13.3 0 24-10.7 24-24s-10.7-24-24-24zM392 0L120 0C106.7 0 96 10.7 96 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Template
                            </span>
                          </a>
                        </li>
                        <li
                          className="navDropdownMenu-item-container"
                          data-test-component="LegacyDropdownMenu"
                          data-test-element="item"
                        >
                          <a
                            tabIndex="0"
                            className="navDropdownMenu-item js-import-tags"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="table"
                              className="svg-inline--fa fa-table navDropdownMenu-item-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-test-component="BenchlingIcon"
                              data-test-key="table"
                            >
                              <path
                                fill="currentColor"
                                d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                              ></path>
                            </svg>
                            <span className="navDropdownMenu-item-text">
                              Update entities
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="_1436y6c"></div>
          <span className="_e296pg">
            <div
              className="_gtdwdr"
              data-test-component="NavBarIcon"
              data-test-key="registries"
              data-original-title=""
              title=""
            >
              <div className="_1n7yfxd">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="_f9e8qy"
                  data-test-component="BenchlingIcon"
                  data-test-key="registry"
                >
                  <path d="M2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                </svg>
              </div>
            </div>
          </span>
          <div
            className="_gtdwdr"
            data-test-component="NavBarIcon"
            data-test-key="tfi"
            data-original-title=""
            title=""
          >
            <div className="_1n7yfxd">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="_f9e8qy"
                data-test-component="BenchlingIcon"
                data-test-key="external-files"
              >
                <path
                  fillRule="evenodd"
                  d="M0 13c0 1.125.875 2 2 2h12c1.094 0 2-.875 2-2V5c0-1.094-.906-2-2-2H9c-.344 0-.625-.125-.813-.375l-.593-.813A2.013 2.013 0 0 0 6 1H2C.875 1 0 1.906 0 3v10Zm5.265-4.97c.127-.398.362-.76.67-1.086a2.926 2.926 0 0 1 4.095-.018l-.743.742a.488.488 0 0 0-.109.49.442.442 0 0 0 .417.253h2.32a.43.43 0 0 0 .434-.435V5.657a.452.452 0 0 0-.272-.398c-.163-.055-.362-.018-.47.09l-.762.761c-1.594-1.558-4.149-1.558-5.725.018-.435.435-.761.96-.96 1.522a.58.58 0 0 0 .362.743.587.587 0 0 0 .743-.362ZM4.087 9.57a.43.43 0 0 0-.435.436v2.319c0 .18.09.344.254.416a.488.488 0 0 0 .49-.108l.742-.743c1.594 1.558 4.149 1.558 5.725-.018.435-.453.761-.96.96-1.522a.58.58 0 0 0-.362-.743.56.56 0 0 0-.725.362 3.16 3.16 0 0 1-.688 1.087c-1.123 1.124-2.953 1.124-4.095.019l.761-.761c.109-.11.145-.308.09-.472a.452.452 0 0 0-.398-.271H4.087Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className={open ? "_17bbufag dropdown open" : "_17bbufag dropdown"}
          >
            <div
              className="_1n7yfxd dropdown-toggle js-userDropdownButton"
              data-toggle="dropdown"
              data-test-component="UserIcon"
              data-test-element="userDropdownButton"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
            >
              <div className="_uspsmw">
                <img
                  className="avatar avatar--small avatar--circle"
                  src="https://benchling-free-us-east-1-general.s3.amazonaws.com/deploys/academic/a//2l8Fa1HZR0PAZ8240GE27n1J85Zfay4pWIJaR9NI/ent_k4IYH0NV-128.png"
                />
              </div>
            </div>
            <ul className="navDropdownMenu dropdown-menu dropdown-menu--dropRightUp">
              <form className="_18vr0rs">
                <li className="_1adi7lt">
                  <div className="_uspsmw">
                    <img
                      className="avatar avatar--large avatar--circle _otbi82"
                      src="https://benchling-free-us-east-1-general.s3.amazonaws.com/deploys/academic/a//2l8Fa1HZR0PAZ8240GE27n1J85Zfay4pWIJaR9NI/ent_k4IYH0NV-128.png"
                    />
                  </div>
                  <div className="_175jmk3">
                    <div
                      className="_1rselg2"
                      data-test-component="UserMenu"
                      data-test-element="userText"
                    >
                      zhan zhou
                    </div>
                    <div className="_7r9b80 _test-userMenu-subheader">
                      <a
                        className="_1ie1ykf"
                        href="/#/settings"
                        data-test-component="UserMenu"
                        data-test-element="settings"
                      >
                        Settings
                      </a>
                    </div>
                    <div className="_7r9b80 _test-userMenu-subheader">
                      <span
                        data-test-component="SpaceUsageText"
                        data-test-element="limitedUsageText"
                      >
                        0% of 10GB |{" "}
                        <a
                          className="_16tsapr"
                          href="/#/invite"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Get More
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
              </form>
              <div>
                <li
                  className="navDropdownMenu-item-container navDropdownMenu-submenu"
                  data-test-component="LegacyDropdownMenu"
                  data-test-element="item"
                >
                  <a
                    tabIndex="0"
                    className="navDropdownMenu-item"
                    data-test-component="FeatureSettings"
                    data-test-element="item"
                    href="/#/template-collections/"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="gear"
                      className="svg-inline--fa fa-gear navDropdownMenu-item-icon"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-test-component="BenchlingIcon"
                      data-test-key="settings"
                    >
                      <path
                        fill="currentColor"
                        d="M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                      ></path>
                    </svg>
                    <span className="navDropdownMenu-item-text">
                      Feature settings
                    </span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right navDropdownMenu-item-chevron"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      data-test-component="BenchlingIcon"
                      data-test-key="chevron"
                    >
                      <path
                        fill="currentColor"
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                      ></path>
                    </svg>
                  </a>
                  <ul className="navDropdownMenu dropdown-menu navDropdownMenu--dropUp">
                    <div>
                      <li
                        className="navDropdownMenu-item-container hidden"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a tabIndex="0" className="navDropdownMenu-item">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="navDropdownMenu-item-icon"
                            data-test-component="BenchlingIcon"
                            data-test-key="registry"
                          >
                            <path d="M2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Registry settings
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container hidden"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/schema-interfaces/"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="object-intersect"
                            className="svg-inline--fa fa-object-intersect navDropdownMenu-item-icon"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-test-component="BenchlingIcon"
                            data-test-key="schema_interface"
                          >
                            <path
                              fill="currentColor"
                              d="M288 64v96H224c-35.3 0-64 28.7-64 64v64H64V64H288zM64 352h96v96c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H352V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V288c0 35.3 28.7 64 64 64zM448 224V448H224V352h64c35.3 0 64-28.7 64-64V224h96z"
                            ></path>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Schema interfaces
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container hidden"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/inventory-settings"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="refrigerator"
                            className="svg-inline--fa fa-refrigerator navDropdownMenu-item-icon"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            data-test-component="BenchlingIcon"
                            data-test-key="location"
                          >
                            <path
                              fill="currentColor"
                              d="M288 48c26.5 0 48 21.5 48 48v64H288V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H48V96c0-26.5 21.5-48 48-48H288zM240 208V344c0 13.3 10.7 24 24 24s24-10.7 24-24V208h48V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V208H240zM96 0C43 0 0 43 0 96V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V96c0-53-43-96-96-96H96z"
                            ></path>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Inventory settings
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container hidden"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/monomers"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="puzzle-piece"
                            className="svg-inline--fa fa-puzzle-piece navDropdownMenu-item-icon"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-test-component="BenchlingIcon"
                            data-test-key="monomer"
                          >
                            <path
                              fill="currentColor"
                              d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"
                            ></path>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Monomer library
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/template-collections/"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="rectangle-history"
                            className="svg-inline--fa fa-rectangle-history navDropdownMenu-item-icon"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-test-component="BenchlingIcon"
                            data-test-key="template_collection"
                          >
                            <path
                              fill="currentColor"
                              d="M512 224c0-35.3-28.7-64-64-64L64 160c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224zM440 80L72 80c-13.3 0-24 10.7-24 24s10.7 24 24 24l368 0c13.3 0 24-10.7 24-24s-10.7-24-24-24zM392 0L120 0C106.7 0 96 10.7 96 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                            ></path>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Template collections
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container hidden"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/entry-review-processes"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="clipboard-list"
                            className="svg-inline--fa fa-clipboard-list navDropdownMenu-item-icon"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            data-test-component="BenchlingIcon"
                            data-test-key="review_lifecycles"
                          >
                            <path
                              fill="currentColor"
                              d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"
                            ></path>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Entry review processes
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container hidden"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/assay-schemas/runs/"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="navDropdownMenu-item-icon"
                            data-test-component="BenchlingIcon"
                            data-test-key="template"
                          >
                            <path
                              fillRule="evenodd"
                              d="M13 2.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Z"
                              clipRule="evenodd"
                            ></path>
                            <path d="M3.5 4.5a1 1 0 0 1 1-1H6a1 1 0 0 1 1 1V5a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1v-.5Zm0 3.5a1 1 0 0 1 1-1H6a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V8Z"></path>
                            <rect
                              width="4.5"
                              height="9"
                              x="8"
                              y="3.5"
                              rx="1"
                            ></rect>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Run schemas
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container hidden"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/connection-schemas"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="question"
                            className="svg-inline--fa fa-question navDropdownMenu-item-icon"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            data-test-component="BenchlingIcon"
                            data-test-key="connection"
                          >
                            <path
                              fill="currentColor"
                              d="M64 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H128C57.3 32 0 89.3 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                            ></path>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Connection schemas
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container hidden"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/instrument-gateways"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="question"
                            className="svg-inline--fa fa-question navDropdownMenu-item-icon"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            data-test-component="BenchlingIcon"
                            data-test-key="connection"
                          >
                            <path
                              fill="currentColor"
                              d="M64 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H128C57.3 32 0 89.3 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                            ></path>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Instrument gateways
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container hidden"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/assay-schemas/results/"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="navDropdownMenu-item-icon"
                            data-test-component="BenchlingIcon"
                            data-test-key="template"
                          >
                            <path
                              fillRule="evenodd"
                              d="M13 2.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Z"
                              clipRule="evenodd"
                            ></path>
                            <path d="M3.5 4.5a1 1 0 0 1 1-1H6a1 1 0 0 1 1 1V5a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1v-.5Zm0 3.5a1 1 0 0 1 1-1H6a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V8Z"></path>
                            <rect
                              width="4.5"
                              height="9"
                              x="8"
                              y="3.5"
                              rx="1"
                            ></rect>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Result schemas
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container hidden"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/assay-schemas/requests/"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="navDropdownMenu-item-icon"
                            data-test-component="BenchlingIcon"
                            data-test-key="template"
                          >
                            <path
                              fillRule="evenodd"
                              d="M13 2.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Z"
                              clipRule="evenodd"
                            ></path>
                            <path d="M3.5 4.5a1 1 0 0 1 1-1H6a1 1 0 0 1 1 1V5a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1v-.5Zm0 3.5a1 1 0 0 1 1-1H6a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V8Z"></path>
                            <rect
                              width="4.5"
                              height="9"
                              x="8"
                              y="3.5"
                              rx="1"
                            ></rect>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Request schemas
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container hidden"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/study-schemas/listing"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="navDropdownMenu-item-icon"
                            data-test-component="BenchlingIcon"
                            data-test-key="study"
                          >
                            <g clipPath="url(#history-chart_svg__a)">
                              <path
                                fillRule="evenodd"
                                d="M12.129 3.25A6.485 6.485 0 0 0 8.181.221C4.724-.705 1.148 1.36.222 4.818a6.496 6.496 0 0 0 4.596 7.96c.736.198 1.47.261 2.182.211v2.154c0 .482.375.857.857.857h.571a.857.857 0 0 0 .858-.857v-3.237a.84.84 0 0 0-.158-.49.826.826 0 0 0-.969-.318c-.904.336-1.915.38-2.92.11a4.876 4.876 0 0 1-3.448-5.97 4.876 4.876 0 0 1 5.97-3.447 4.876 4.876 0 0 1 2.962 2.292l-.958.532c-.473.294-.367.98.148 1.117l2.697.723a.587.587 0 0 0 .747-.43l.723-2.699c.138-.515-.403-.949-.894-.686l-1.057.61ZM9.857 8.857c0-.464.375-.857.857-.857h.572a.87.87 0 0 1 .857.857v6.286a.857.857 0 0 1-.857.857h-.572a.846.846 0 0 1-.857-.857V8.857Zm3.714.286h.572A.87.87 0 0 1 15 10v5.143a.857.857 0 0 1-.857.857h-.572a.846.846 0 0 1-.857-.857V10c0-.464.375-.857.857-.857ZM6.647 3.029h-.013.026-.013Zm-.597.609c0-.326.248-.603.597-.61a.601.601 0 0 1 .597.61v2.64c0 .178-.051.33-.178.432L5.238 8.538a.556.556 0 0 1-.838 0 .556.556 0 0 1 0-.837l1.65-1.65V3.637Z"
                                clipRule="evenodd"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="history-chart_svg__a">
                                <path d="M0 0h16v16H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Study schemas
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container hidden"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/workflow-task-schemas"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="navDropdownMenu-item-icon"
                            data-test-component="BenchlingIcon"
                            data-test-key="process"
                          >
                            <circle cx="2.5" cy="2.5" r="1.75"></circle>
                            <circle cx="12.5" cy="13.5" r="2.5"></circle>
                            <path
                              fillRule="evenodd"
                              d="M3.75 2.75A.75.75 0 0 1 4.5 2H12a2.75 2.75 0 0 1 2.75 2.75v1A2.75 2.75 0 0 1 12 8.5H4c-.69 0-1.25.56-1.25 1.25v1.5c0 .69.56 1.25 1.25 1.25h9a.75.75 0 0 1 0 1.5H4a2.75 2.75 0 0 1-2.75-2.75v-1.5A2.75 2.75 0 0 1 4 7h8c.69 0 1.25-.56 1.25-1.25v-1c0-.69-.56-1.25-1.25-1.25H4.5a.75.75 0 0 1-.75-.75Z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Workflow schemas
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container hidden"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/access-policies"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="lock"
                            className="svg-inline--fa fa-lock navDropdownMenu-item-icon"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            data-test-component="BenchlingIcon"
                            data-test-key="lock"
                          >
                            <path
                              fill="currentColor"
                              d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                            ></path>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Access policies
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container hidden"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/event-subscriptions"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="rectangle-terminal"
                            className="svg-inline--fa fa-rectangle-terminal navDropdownMenu-item-icon"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-test-component="BenchlingIcon"
                            data-test-key="console"
                          >
                            <path
                              fill="currentColor"
                              d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm102.3 55.8c-9 9.8-8.3 25 1.5 33.9L180.5 256l-76.7 70.3c-9.8 9-10.4 24.1-1.5 33.9s24.1 10.4 33.9 1.5l96-88c5-4.5 7.8-11 7.8-17.7s-2.8-13.1-7.8-17.7l-96-88c-9.8-9-25-8.3-33.9 1.5zM248 336c-13.3 0-24 10.7-24 24s10.7 24 24 24H392c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"
                            ></path>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Developer console
                          </span>
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
                <li
                  className="navDropdownMenu-item-container navDropdownMenu-submenu"
                  data-test-component="LegacyDropdownMenu"
                  data-test-element="item"
                >
                  <a
                    tabIndex="0"
                    className="navDropdownMenu-item"
                    href="/#/enzyme-lists"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="wrench"
                      className="svg-inline--fa fa-wrench navDropdownMenu-item-icon"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-test-component="BenchlingIcon"
                      data-test-key="wrench"
                    >
                      <path
                        fill="currentColor"
                        d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                      ></path>
                    </svg>
                    <span className="navDropdownMenu-item-text">
                      Molecular biology settings
                    </span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right navDropdownMenu-item-chevron"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      data-test-component="BenchlingIcon"
                      data-test-key="chevron"
                    >
                      <path
                        fill="currentColor"
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                      ></path>
                    </svg>
                  </a>
                  <ul className="navDropdownMenu dropdown-menu navDropdownMenu--dropUp">
                    <div>
                      <li
                        className="navDropdownMenu-item-container"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/enzyme-lists"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="scissors"
                            className="svg-inline--fa fa-scissors navDropdownMenu-item-icon"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-test-component="BenchlingIcon"
                            data-test-key="enzyme"
                          >
                            <path
                              fill="currentColor"
                              d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                            ></path>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Enzyme lists
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/feature-libraries"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bookmark"
                            className="svg-inline--fa fa-bookmark navDropdownMenu-item-icon"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            data-test-component="BenchlingIcon"
                            data-test-key="feature-libraries"
                          >
                            <path
                              fill="currentColor"
                              d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                            ></path>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Feature libraries
                          </span>
                        </a>
                      </li>
                      <li
                        className="navDropdownMenu-item-container"
                        data-test-component="LegacyDropdownMenu"
                        data-test-element="item"
                      >
                        <a
                          tabIndex="0"
                          className="navDropdownMenu-item"
                          href="/#/ladders"
                        >
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="navDropdownMenu-item-icon"
                            data-test-component="BenchlingIcon"
                            data-test-key="ladder"
                          >
                            <path
                              d="M.985 9h14.03A.992.992 0 0 0 16 8c0-.552-.44-1-.985-1H.985A.992.992 0 0 0 0 8c0 .552.44 1 .985 1Zm13.624 7c.768 0 1.391-.672 1.391-1.5s-.623-1.5-1.391-1.5H1.39C.623 13 0 13.672 0 14.5S.623 16 1.391 16H14.61Zm0-13C15.377 3 16 2.328 16 1.5S15.377 0 14.609 0H1.39C.623 0 0 .672 0 1.5S.623 3 1.391 3H14.61Z"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                          <span className="navDropdownMenu-item-text">
                            Ladders
                          </span>
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
                <li
                  className="navDropdownMenu-item-container"
                  data-test-component="LegacyDropdownMenu"
                  data-test-element="item"
                >
                  <a
                    tabIndex="0"
                    className="navDropdownMenu-item js-create-new-export"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="file-export"
                      className="svg-inline--fa fa-file-export navDropdownMenu-item-icon"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-test-component="BenchlingIcon"
                      data-test-key="export"
                    >
                      <path
                        fill="currentColor"
                        d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z"
                      ></path>
                    </svg>
                    <span className="navDropdownMenu-item-text">
                      Data export
                    </span>
                  </a>
                </li>
                <li className="divider"></li>
              </div>
              <div>
                <li
                  className="navDropdownMenu-item-container"
                  data-test-component="LegacyDropdownMenu"
                  data-test-element="item"
                >
                  <a
                    tabIndex="0"
                    className="navDropdownMenu-item"
                    href="/#/zendesk-jwt-sso"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="circle-question"
                      className="svg-inline--fa fa-circle-question navDropdownMenu-item-icon"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-test-component="BenchlingIcon"
                      data-test-key="more-info"
                    >
                      <path
                        fill="currentColor"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                      ></path>
                    </svg>
                    <span className="navDropdownMenu-item-text">Help</span>
                  </a>
                </li>
                <li
                  className="navDropdownMenu-item-container"
                  data-test-component="LegacyDropdownMenu"
                  data-test-element="item"
                >
                  <a
                    tabIndex="0"
                    className="navDropdownMenu-item"
                    href="/invite"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="envelope"
                      className="svg-inline--fa fa-envelope navDropdownMenu-item-icon"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-test-component="BenchlingIcon"
                      data-test-key="invite"
                    >
                      <path
                        fill="currentColor"
                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                      ></path>
                    </svg>
                    <span className="navDropdownMenu-item-text">
                      Invite scientists
                    </span>
                  </a>
                </li>
                <li className="divider"></li>
              </div>
              <div>
                <li
                  className="navDropdownMenu-item-container hidden"
                  data-test-component="LegacyDropdownMenu"
                  data-test-element="item"
                >
                  <a tabIndex="0" className="navDropdownMenu-item">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star navDropdownMenu-item-icon navDropdownMenu-item-icon--green"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-test-component="BenchlingIcon"
                      data-test-key="star"
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path>
                    </svg>
                    <span className="navDropdownMenu-item-text">
                      Upgrade account
                    </span>
                  </a>
                </li>
                <li
                  className="navDropdownMenu-item-container"
                  data-test-component="LegacyDropdownMenu"
                  data-test-element="item"
                >
                  <a
                    tabIndex="0"
                    className="navDropdownMenu-item legacy-font-proxima-title js-createOrganizationButton"
                    href="/#/organizations/create"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="plus-large"
                      className="svg-inline--fa fa-plus-large navDropdownMenu-item-icon navDropdownMenu-item-icon--blue"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-test-component="BenchlingIcon"
                      data-test-key="compose"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H224V480c0 17.7 14.3 32 32 32s32-14.3 32-32V288l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-192 0 0-192z"
                      ></path>
                    </svg>
                    <span className="navDropdownMenu-item-text">
                      Create or join organization
                    </span>
                  </a>
                </li>
                <li
                  className="navDropdownMenu-item-container"
                  data-test-component="LegacyDropdownMenu"
                  data-test-element="item"
                >
                  <a
                    tabIndex="0"
                    className="navDropdownMenu-item legacy-font-proxima-title"
                    data-method="POST"
                    href="/#/signout"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="right-from-bracket"
                      className="svg-inline--fa fa-right-from-bracket navDropdownMenu-item-icon navDropdownMenu-item-icon--red"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-test-component="BenchlingIcon"
                      data-test-key="sign-out"
                    >
                      <path
                        fill="currentColor"
                        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                      ></path>
                    </svg>
                    <span className="navDropdownMenu-item-text">Sign out</span>
                  </a>
                </li>
              </div>
            </ul>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
