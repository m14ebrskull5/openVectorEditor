import React from "react";
import { Icon } from "@blueprintjs/core";
import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";

export default connectToEditor((editorState) => {
  let past;
  if (!editorState.sequenceDataHistory.past) {
    past = [];
  } else {
    past = editorState.sequenceDataHistory.past.filter(
      (i) => i.sequenceData.name === editorState.sequenceData.name
    );
  }
  return {
    disabled: !(editorState.sequenceDataHistory && past && past.length)
  };
})(({ toolbarItemProps, undo, disabled }) => {
  return (
    <ToolbarItem
      {...{
        Icon: <Icon data-test="veUndoTool" icon="undo" />,
        disabled,
        onIconClick: undo,
        tooltip: (
          <span>
            Undo <span style={{ fontSize: 10 }}>(Cmd/Ctrl+Z)</span>
          </span>
        ),
        ...toolbarItemProps
      }}
    />
  );
});
