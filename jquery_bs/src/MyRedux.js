import { createStore } from 'redux'
var ActionTypes= {
    LOAD_CONFIG: "LOAD_CONFIG",
    START_CHANGE:"START_CHANGE",
    NUM_CHANGE:"NUM_CHANGE",
    YEAR_CHANGE: "YEAR_CHANGE"
  }
function reducer(state = {start:1,num:1,year:18}, action) {
  switch (action.type) {
    case ActionTypes.LOAD_CONFIG:
        state= action.para
        return state
    case ActionTypes.START_CHANGE:
      state.start=action.para;
      return state;
    case ActionTypes.NUM_CHANGE:
      state.num=action.para;
      return state
    case ActionTypes.YEAR_CHANGE:
      state.year=action.para;
      return state
    default:
      return state
  }
}
var ItemStore=createStore(reducer);
var ItemActionCreators= {
   start_change: function(data) {/////////////////////////  1 action=>dispatch   ///////////////////
        ItemStore.dispatch({
          type: ActionTypes.START_CHANGE,
          para: data
        });
  },
  year_change: function(data) {/////////////////////////  1 action=>dispatch   ///////////////////
    console.log(data);
        ItemStore.dispatch({
          type: ActionTypes.YEAR_CHANGE,
          para: data
        });
  },
  num_change: function(data) {/////////////////////////  1 action=>dispatch   ///////////////////
        ItemStore.dispatch({
          type: ActionTypes.NUM_CHANGE,
          para: data
        });
  },
  load_config: function(cfg) {/////////////////////////  1 action=>dispatch   ///////////////////
      ItemStore.dispatch({
          type: ActionTypes.LOAD_CONFIG,
          para: cfg
      });
  },
};
var myflux={ItemStore,ItemActionCreators};
export default myflux;
