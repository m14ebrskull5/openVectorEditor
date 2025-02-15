/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./index.css";
import { connect } from "react-redux";
import "./app.css";
import { compose } from "redux";
import { connectToEditor } from "../withEditorProps";
import dayjs from "dayjs";
const Navigator = (props) => {
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive(props.focus);
  }, [props.focus]);

  const {
    updateSequenceData,
    flipActiveTabFromLinearOrCircularIfNecessary,
    serverAddress,
    list
  } = props;
  useEffect(() => {
    const name = localStorage.getItem("currentSeq");
    fetch(serverAddress + "/api/seq", {}).then(async (data) => {
      data = await data.json();
      list(data.data);
      let index = data.data.find((i) => i.name === name);
      if (!index && data.data.length > 0) index = data.data[0];
      index && setActive(index.id);
      //选择最近编辑的序列
      index &&
        fetch(serverAddress + "/api/findseq?id=" + index.id).then(
          async (data) => {
            data = await data.json();
            Object.keys(data.data)
              .filter((i) => i !== "afeatures")
              .forEach((i) => {
                //不能有null
                if (data.data[i] == null) {
                  data.data[i] = {};
                }
              });
            // eslint-disable-next-line react-hooks/exhaustive-deps
            // 不知道如何才能消除这两个dispatch的eslint警告 ，非常头疼，只能全文件屏蔽eslint
            updateSequenceData({ ...data.data, fromServer: true });

            flipActiveTabFromLinearOrCircularIfNecessary();
          }
        );
    });
  }, [
    list,
    serverAddress
    // flipActiveTabFromLinearOrCircularIfNecessary,
    // updateSequenceData
  ]);
  const chooseSeqs = (e) => {
    setActive(e.currentTarget.dataset.id);
    fetch(serverAddress + "/api/findseq?id=" + e.currentTarget.dataset.id).then(
      async (data) => {
        data = await data.json();
        Object.keys(data.data).forEach((i) => {
          //不能有null
          if (data.data[i] == null) {
            data.data[i] = {};
          }
        });
        //告诉redux 不要生成新的trackingStateId，正确维护save按钮的状态
        updateSequenceData({ ...data.data, fromServer: true });

        flipActiveTabFromLinearOrCircularIfNecessary();
      }
    );
  };
  return (
    <div className="u-absolute-scroll-container">
      <div className="sidepanelItemDNDWrapper dnd-drop-container">
        {props.state.list.map((i) => (
          <div
            key={i.id}
            data-id={i.id}
            className="u-flex-grow u-position-relative"
            onClick={chooseSeqs}
          >
            <div
              className={`sidepanelItem sidepanelItem--noIcon ${
                active === i.id ? "is-active" : ""
              }`}
            >
              <div className="">
                <div className="sidepanelItem-content">
                  <div className="sidepanelItem-icon">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="align-left"
                      className="svg-inline--fa fa-align-left "
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
                  </div>
                  <div className="sidepanelItem-text">
                    <div className="u-lr-split">
                      <span
                        className="sidepanelItem-title u-overflow-wrap-break-word _zdxht7"
                        data-test-component="SidepanelItem"
                        data-test-element="root"
                      >
                        <span data-original-title="" title="">
                          <span className="sidepanel-primaryLabel">
                            {i.name}
                          </span>
                          <span className="sidepanel-secondaryLabel">
                            {" "}
                            DNA alignment
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <span className="sidepanelItem-subTitle">
                        <span className="sidepanelItem-subTitle-text">
                          Last modified{" "}
                          {dayjs(i.timestamp).format("YYYY-MM-DD HH:mm:ss")}
                        </span>
                        <div className="_1tgjyx8">
                          <div
                            className="_uspsmw"
                            data-original-title=""
                            title=""
                          >
                            <img
                              alt=""
                              className="avatar avatar--xxs avatar--circle"
                              src="https://benchling-free-us-east-1-general.s3.amazonaws.com/deploys/academic/a//2l8Fa1HZR0PAZ8240GE27n1J85Zfay4pWIJaR9NI/ent_k4IYH0NV-128.png"
                            />
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default compose(
  connect(
    (state) => {
      return {
        state: state.VectorEditor.DemoEditor.navigator,
        focus: state.VectorEditor.DemoEditor.navigator.focus
      };
    },
    (dispatch) => ({
      list: (payload) => dispatch({ type: "navigator/list", payload })
    })
  ),
  connectToEditor()
)(Navigator);
