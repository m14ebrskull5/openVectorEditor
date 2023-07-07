import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { Button } from "@blueprintjs/core";
import { wrapDialog } from "teselagen-react-components";
import React from "react";
const NewSequence = ({ onSubmit, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit((vals) => onSubmit(vals))}>
      <label>input name：</label>
      <Field
        name="name"
        component="input"
        type="text"
        placeholder="please input name"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export const NewSequenceDialog = compose(
  wrapDialog({ title: "Create New Sequence" }),
  reduxForm({
    form: "veNewSequenceTool"
  })
)(NewSequence);
