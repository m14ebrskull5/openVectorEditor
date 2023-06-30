import React from "react";
import { Icon } from "@blueprintjs/core";
import ToolbarItem from "./ToolbarItem";
import { connectToEditor, handleSave } from "../withEditorProps";
import { withHandlers } from "recompose";
import { compose } from "redux";

export default compose(
  connectToEditor(
    ({
      readOnly,
      sequenceData = {},
      lastSavedId = "134%!@#%!@#%!@%",
      navigator
    }) => {
      //如果stateTrackingId是在服务器存储的状态之一，那么不应该被认为是可以保存
      let serverSavedState = false;
      if (
        navigator.list.find(
          (i) => i.stateTrackingId === sequenceData.stateTrackingId
        )
      ) {
        serverSavedState = true;
      }
      return {
        readOnly: readOnly,
        sequenceData: sequenceData,
        hasBeenSaved:
          sequenceData.stateTrackingId === "initialLoadId" ||
          sequenceData.stateTrackingId === lastSavedId ||
          serverSavedState
      };
    }
  ),
  withHandlers({ handleSave })
)(
  ({
    toolbarItemProps,
    alwaysAllowSave,
    handleSave,
    readOnly,
    hasBeenSaved,
    onSave
  }) => {
    return (
      <ToolbarItem
        {...{
          Icon: <Icon data-test="saveTool" icon="floppy-disk" />,
          onIconClick: handleSave,
          disabled: alwaysAllowSave
            ? false
            : !onSave || hasBeenSaved || readOnly,
          tooltip: (
            <span>
              Save <span style={{ fontSize: 10 }}>(Cmd/Ctrl+S)</span>
            </span>
          ),
          ...toolbarItemProps
        }}
      />
    );
  }
);
