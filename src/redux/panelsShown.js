import { map, flatMap } from "lodash";
import { createReducer } from "redux-act";
import createAction from "./utils/createMetaAction";
import { removeItem } from "../utils/arrayUtils";

//manages which tab panels are shown in the editor

// ------------------------------------
// Actions
// ------------------------------------
export const panelsShownUpdate = createAction("PANELS_SHOWN_UPDATE");
export const addPanelIfItDoesntAlreadyExist = createAction(
  "addPanelIfItDoesntAlreadyExist"
);
export const togglePanelFullScreen = createAction("togglePanelFullScreen");
export const collapsePanel = createAction("collapsePanel");
export const closePanel = createAction("closePanel");
export const _collapseSplitScreen = createAction("_collapseSplitScreen");
export const setPanelAsActive = createAction("setPanelAsActive");
export const flipActiveTabFromLinearOrCircularIfNecessary = createAction(
  "flipActiveTabFromLinearOrCircularIfNecessary"
);
export const expandTabToSplitScreen = createAction("expandTabToSplitScreen");
export const propertiesViewOpen = (unused, meta) => {
  return setPanelAsActive("properties", meta);
};
export const createNewDigest = (unused, meta) => {
  return (dispatch) => {
    dispatch(
      addPanelIfItDoesntAlreadyExist(
        {
          id: "digestTool",
          name: "New Digest",
          active: true,
          canClose: true
        },
        meta
      )
    );
    dispatch(setPanelAsActive("digestTool", meta));
  };
};
export const createNewPCR = (unused, meta) => {
  return (dispatch) => {
    dispatch(
      addPanelIfItDoesntAlreadyExist(
        {
          id: "pcrTool",
          name: "New PCR",
          active: true,
          canClose: true
        },
        meta
      )
    );
    dispatch(setPanelAsActive("pcrTool", meta));
  };
};

export const createNewAlignment = (payload, meta) => {
  return (dispatch) => {
    dispatch(
      addPanelIfItDoesntAlreadyExist(
        {
          type: "alignment",
          name: "New Alignment",
          active: true,
          canClose: true,
          ...payload
        },
        meta
      )
    );
    dispatch(setPanelAsActive(payload.id, meta));
  };
};

export const createNewMismatchesList = (payload, meta) => {
  return (dispatch) => {
    dispatch(
      addPanelIfItDoesntAlreadyExist(
        {
          type: "mismatches",
          name: "Mismatches",
          active: true,
          canClose: true,
          ...payload
        },
        meta
      )
    );
    dispatch(setPanelAsActive(payload.id, meta));
  };
};

export const collapseSplitScreen = (activePanelId, meta) => {
  return (dispatch) => {
    dispatch(_collapseSplitScreen(activePanelId, meta));
    activePanelId && dispatch(setPanelAsActive(activePanelId, meta));
  };
};

// ------------------------------------
// Reducer
// ------------------------------------
export default createReducer(
  {
    [addPanelIfItDoesntAlreadyExist]: (state, panelToAdd) => {
      if (
        !state.some((panelGroup) => {
          return panelGroup.some(({ id }) => {
            return id === panelToAdd.id;
          });
        })
      ) {
        if (state.length === 0) {
          return [[panelToAdd]];
        }
        return state.map((panelGroup, index) => {
          if (index === 0) return [panelToAdd, ...panelGroup];
          return panelGroup;
        });
      }
      return state;
    },
    [panelsShownUpdate]: (state, payload) => {
      return payload.filter((group) => group.length); //filter out any empty groups
    },
    [flipActiveTabFromLinearOrCircularIfNecessary]: (state) => {
      const extraMap = [];
      const existLinearMap = state.some(
        (i) => i.id === "sequence" || i.some((item) => item.id === "sequence")
      );
      if (!existLinearMap)
        extraMap.push({
          id: "sequence",
          name: "sequence map",
          canClose: true,
          active: extraMap.length === 0
        });
      const existCircularMap = state.some(
        (i) => i.id === "circular" || i.some((item) => item.id === "circular")
      );
      if (!existCircularMap)
        extraMap.push({
          id: "circular",
          name: "circular map",
          canClose: true,
          active: extraMap.length === 0
        });
      const existPropertiesMap = state.some(
        (i) =>
          i.id === "properties" || i.some((item) => item.id === "properties")
      );
      if (!existPropertiesMap)
        extraMap.push({
          id: "properties",
          name: "properties",
          canClose: true,
          active: extraMap.length === 0
        });
      const existRailsMap = state.some(
        (i) => i.id === "rail" || i.some((item) => item.id === "rail")
      );
      if (!existRailsMap)
        extraMap.push({
          id: "rail",
          name: "linear map",
          canClose: true,
          active: extraMap.length === 0
        });
      let newState;
      const existGroup = state.slice(0, state.length - 1);
      const finalGroup = state[state.length - 1];
      if (state.length === 1) {
        newState = [[...finalGroup, ...extraMap]];
      } else if (state.length > 1) {
        newState = [...existGroup, [...finalGroup, ...extraMap]];
      } else {
        newState = [
          [
            {
              id: "sequence",
              name: "sequence map",
              active: true,
              canClose: true
            },
            {
              id: "rail",
              name: "linear map",
              canClose: true
            },
            {
              id: "circular",
              name: "circular map",
              canClose: true
            },
            {
              id: "properties",
              name: "properties",
              canClose: true
            }
          ]
        ];
      }

      return newState;
    },
    [closePanel]: (state, idToClose) => {
      const newState = state.map((group) => {
        let indexToClose;
        group.forEach(({ id }, i) => {
          if (id === idToClose) indexToClose = i;
        });
        if (indexToClose > -1) {
          return removeItem(group, indexToClose).map((tab, i) => {
            if (i === 0) return { ...tab, active: true };
            else {
              return tab;
            }
          });
        }
        return group;
      });
      return newState.filter((group) => group.length); //filter out any empty groups
    },
    [_collapseSplitScreen]: (state) => {
      return [flatMap(state)];
    },
    [expandTabToSplitScreen]: (state, activePanelId) => {
      let panelToMove;
      return [
        state[0]
          .filter((panel) => {
            if (panel.id === activePanelId) {
              panelToMove = panel;
              return false;
            }
            return true;
          })
          .map((panel, i) => {
            return i === 0 ? { ...panel, active: true } : panel;
          }),
        [{ ...panelToMove, active: true }]
      ];
    },
    [setPanelAsActive]: (state, panelId) => {
      return map(state, (panelGroup) => {
        const isPanelInGroup = panelGroup.some(({ id }) => {
          return panelId === id;
        });
        return panelGroup.map((panel) => {
          return {
            ...panel,
            active:
              panelId === panel.id
                ? true
                : isPanelInGroup
                ? false
                : panel.active
          };
        });
      });
    },
    [togglePanelFullScreen]: (state, panelId) => {
      return map(state, (panelGroup) => {
        const isPanelInGroup = panelGroup.some(({ id }) => {
          return panelId === id;
        });
        return panelGroup.map((panel) => {
          return {
            ...panel,
            active:
              panelId === panel.id
                ? true
                : isPanelInGroup
                ? false
                : panel.active,
            fullScreen:
              panelId === panel.id
                ? !panel.fullScreen
                : isPanelInGroup
                ? false
                : panel.fullScreen
          };
        });
      });
    },
    [collapsePanel]: (state, panelToCloseId) => {
      return [
        flatMap(state, (panelGroup) => {
          return panelGroup;
        }).map((panel) => {
          if (panel.id === panelToCloseId) {
            return {
              ...panel,
              active: false
            };
          }
          return panel;
        })
      ];
    }
  },
  [
    // [
    // {
    //   id: "circular",
    //   name: "Circular Map",
    //   active: true,
    //   canClose: true
    // },
    // {
    //   id: "sequence",
    //   name: "Sequence Map",
    //   active: true
    // }
    // ]
  ]
);
