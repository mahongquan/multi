//'use strict';
var React = require('react');
var PropTypes = require('prop-types');
var _require = require('react-dom'),
    findDOMNode = _require.findDOMNode;
var scrollIntoView = require('dom-scroll-into-view');
var IMPERATIVE_API = ['blur', 'checkValidity', 'click', 'focus', 'select', 'setCustomValidity', 'setSelectionRange', 'setRangeText'];
export default class Autocomplete extends React.Component {
// var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

// function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var React = require('react');
// var PropTypes = require('prop-types');

// var _require = require('react-dom'),
//     findDOMNode = _require.findDOMNode;

// var scrollIntoView = require('dom-scroll-into-view');

//var Autocomplete = function (_React$Component) {
//  _inherits(Autocomplete, _React$Component);
constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      highlightedIndex: null
    };
    this._debugStates = [];
    // this.exposeAPI = this.exposeAPI.bind(this);
    // this.handleInputFocus = this.handleInputFocus.bind(this);
    // this.handleInputBlur = this.handleInputBlur.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
    // this.handleInputClick = this.handleInputClick.bind(this);
  }

  componentWillMount=()=>{
      // this.refs is frozen, so we need to assign a new object to it
      this.refs = {};
      this._ignoreBlur = false;
  }
  componentWillReceiveProps=(nextProps)=>{
      if (this.state.highlightedIndex !== null) {
        this.setState(this.ensureHighlightedIndex);
      }
      if (nextProps.autoHighlight && this.props.value !== nextProps.value) {
        this.setState(this.maybeAutoCompleteText);
      }
  }
  componentDidMount=()=>{
      if (this.isOpen()) {
        this.setMenuPositions();
      }
  }
  componentDidUpdate=(prevProps, prevState)=>{
      if ((this.state.isOpen && !prevState.isOpen) || ('open' in this.props && this.props.open && !prevProps.open)) this.setMenuPositions();

      this.maybeScrollItemIntoView();
      if (prevState.isOpen !== this.state.isOpen) {
        this.props.onMenuVisibilityChange(this.state.isOpen);
      }
      // Capture the input's focus as long as the ignoreBlur flag is set
      if (this._ignoreBlur) {
        this.refs.input.focus();
      }
  }
  exposeAPI=(el)=>{
      var _this2 = this;

      this.refs.input = el;
      IMPERATIVE_API.forEach(function (ev) {
        return _this2[ev] = el && el[ev] && el[ev].bind(el);
      });
    }
  }
  maybeScrollItemIntoView=()=>{
      if (this.isOpen() && this.state.highlightedIndex !== null) {
        var itemNode = this.refs['item-' + this.state.highlightedIndex];
        var menuNode = this.refs.menu;
        scrollIntoView(findDOMNode(itemNode), findDOMNode(menuNode), { onlyScrollIfNeeded: true });
      }
  }
  handleKeyDown=(event)=>{
      if (Autocomplete.keyDownHandlers[event.key]) Autocomplete.keyDownHandlers[event.key].call(this, event);else if (!this.isOpen()) {
        this.setState({
          isOpen: true
        });
      }
  }
  handleChange=(event)=>{
      this.props.onChange(event, event.target.value);
  }
  getFilteredItems=(props)=>{
      var items = props.items;

      if (props.shouldItemRender) {
        items = items.filter(function (item) {
          return props.shouldItemRender(item, props.value);
        });
      }

      if (props.sortItems) {
        items.sort(function (a, b) {
          return props.sortItems(a, b, props.value);
        });
      }

      return items;
  }
  maybeAutoCompleteText=(state, props)=>{
      var highlightedIndex = state.highlightedIndex;
      var value = props.value,
          getItemValue = props.getItemValue;

      var index = highlightedIndex === null ? 0 : highlightedIndex;
      var matchedItem = this.getFilteredItems(props)[index];
      if (value !== '' && matchedItem) {
        var itemValue = getItemValue(matchedItem);
        var itemValueDoesMatch = itemValue.toLowerCase().indexOf(value.toLowerCase()) === 0;
        if (itemValueDoesMatch) {
          return { highlightedIndex: index };
        }
      }
      return { highlightedIndex: null };
    }
  }
  ensureHighlightedIndex=(state, props) =>{
      if (state.highlightedIndex >= this.getFilteredItems(props).length) {
        return { highlightedIndex: null };
      }
  }
  setMenuPositions=()=> {
      var node = this.refs.input;
      var rect = node.getBoundingClientRect();
      // var computedStyle = global.window.getComputedStyle(node);
      // var marginBottom = parseInt(computedStyle.marginBottom, 10) || 0;
      // var marginLeft = parseInt(computedStyle.marginLeft, 10) || 0;
      // var marginRight = parseInt(computedStyle.marginRight, 10) || 0;
      // console.log("setMenuPositions================");
      // console.log(rect);
      // console.log(computedStyle);
      this.setState({
        menuTop: 0,//rect.bottom,
        menuLeft:0,// rect.left ,
        menuWidth: rect.width
      });
  }
  highlightItemFromMouse=(index)=>{
      this.setState({ highlightedIndex: index });
  }
  selectItemFromMouse=(item)=>{
      var _this3 = this;

      var value = this.props.getItemValue(item);
      this.setState({
        isOpen: false,
        highlightedIndex: null
      }, function () {
        // Clear the ignoreBlur flag after the component has
        // updated to release control over the input's focus
        _this3.setIgnoreBlur(false);
        _this3.props.onSelect(value, item);
      });
  }
  setIgnoreBlur=(ignore)=>{
      this._ignoreBlur = ignore;
  }
  renderMenu=()=>{
      var _this4 = this;

      var items = this.getFilteredItems(this.props).map(function (item, index) {
        var element = _this4.props.renderItem(item, _this4.state.highlightedIndex === index, { cursor: 'default' });
        return React.cloneElement(element, {
          onMouseEnter: function onMouseEnter() {
            return _this4.highlightItemFromMouse(index);
          },
          onClick: function onClick() {
            return _this4.selectItemFromMouse(item);
          },
          ref: function ref(e) {
            return _this4.refs['item-' + index] = e;
          }
        });
      });
      var style = {
        left: this.state.menuLeft,
        top: this.state.menuTop,
        minWidth: this.state.menuWidth
      };
      var menu = this.props.renderMenu(items, this.props.value, style);
      return React.cloneElement(menu, {
        ref: function ref(e) {
          return _this4.refs.menu = e;
        },
        // Ignore blur to prevent menu from de-rendering before we can process click
        onMouseEnter: function onMouseEnter() {
          return _this4.setIgnoreBlur(true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this4.setIgnoreBlur(false);
        }
      });
  }
  handleInputBlur=(event)=>{
      if (this._ignoreBlur) {
        return;
      }
      this.setState({
        isOpen: false,
        highlightedIndex: null
      });
      var onBlur = this.props.inputProps.onBlur;

      if (onBlur) {
        onBlur(event);
      }
  }
  handleInputFocus=(event)=>{
      if (this._ignoreBlur) {
        return;
      }
      this.setState({ isOpen: true });
      var onFocus = this.props.inputProps.onFocus;

      if (onFocus) {
        onFocus(event);
      }
    }
  }
  isInputFocused() {
      var el = this.refs.input;
      return el.ownerDocument && el === el.ownerDocument.activeElement;
    
  }
  handleInputClick() {
      // Input will not be focused if it's disabled
      if (this.isInputFocused() && !this.isOpen()) this.setState({ isOpen: true });
  
  }
  composeEventHandlers(internal, external) {
      return external ? function (e) {
        internal(e);external(e);
      } : internal;
  
  }
  isOpen() {
      return 'open' in this.props ? this.props.open : this.state.isOpen;
  }
  render() {
      if (this.props.debug) {
        // you don't like it, you love it
        this._debugStates.push({
          id: this._debugStates.length,
          state: this.state
        });
      }

      var inputProps = this.props.inputProps;

      var open = this.isOpen();
      return React.createElement(
        'div',
        _extends({ style: _extends({}, this.props.wrapperStyle) }, this.props.wrapperProps),
        React.createElement('input', _extends({}, inputProps, {
          role: 'combobox',
          'aria-autocomplete': 'list',
          'aria-expanded': open,
          autoComplete: 'off',
          ref: this.exposeAPI,
          onFocus: this.handleInputFocus,
          onBlur: this.handleInputBlur,
          onChange: this.handleChange,
          onKeyDown: this.composeEventHandlers(this.handleKeyDown, inputProps.onKeyDown),
          onClick: this.composeEventHandlers(this.handleInputClick, inputProps.onClick),
          value: this.props.value
        })),
        open && this.renderMenu(),
        this.props.debug && React.createElement(
          'pre',
          { style: { marginLeft: 300 } },
          JSON.stringify(this._debugStates.slice(Math.max(0, this._debugStates.length - 5), this._debugStates.length), null, 2)
        )
      );
    }
  }
}

Autocomplete.propTypes = {
  /**
   * The items to display in the dropdown menu
   */
  items: PropTypes.array.isRequired,
  /**
   * The value to display in the input field
   */
  value: PropTypes.any,
  /**
   * Arguments: `event: Event, value: String`
   *
   * Invoked every time the user changes the input's value.
   */
  onChange: PropTypes.func,
  /**
   * Arguments: `value: String, item: Any`
   *
   * Invoked when the user selects an item from the dropdown menu.
   */
  onSelect: PropTypes.func,
  /**
   * Arguments: `item: Any, value: String`
   *
   * Invoked for each entry in `items` and its return value is used to
   * determine whether or not it should be displayed in the dropdown menu.
   * By default all items are always rendered.
   */
  shouldItemRender: PropTypes.func,
  /**
   * Arguments: `itemA: Any, itemB: Any, value: String`
   *
   * The function which is used to sort `items` before display.
   */
  sortItems: PropTypes.func,
  /**
   * Arguments: `item: Any`
   *
   * Used to read the display value from each entry in `items`.
   */
  getItemValue: PropTypes.func.isRequired,
  /**
   * Arguments: `item: Any, isHighlighted: Boolean, styles: Object`
   *
   * Invoked for each entry in `items` that also passes `shouldItemRender` to
   * generate the render tree for each item in the dropdown menu. `styles` is
   * an optional set of styles that can be applied to improve the look/feel
   * of the items in the dropdown menu.
   */
  renderItem: PropTypes.func.isRequired,
  /**
   * Arguments: `items: Array<Any>, value: String, styles: Object`
   *
   * Invoked to generate the render tree for the dropdown menu. Ensure the
   * returned tree includes `items` or else no items will be rendered.
   * `styles` will contain { top, left, minWidth } which are the coordinates
   * of the top-left corner and the width of the dropdown menu.
   */
  renderMenu: PropTypes.func,
  /**
   * Styles that are applied to the dropdown menu in the default `renderMenu`
   * implementation. If you override `renderMenu` and you want to use
   * `menuStyles` you must manually apply them (`this.props.menuStyles`).
   */
  menuStyle: PropTypes.object,
  /**
   * Props that are applied to the `<input />` element rendered by
   * `Autocomplete`. Any properties supported by `HTMLInputElement` can be
   * specified, apart from the following which are set by `Autocomplete`:
   * value, autoComplete, role, aria-autocomplete
   */
  inputProps: PropTypes.object,
  /**
   * Props that are applied to the element which wraps the `<input />` and
   * dropdown menu elements rendered by `Autocomplete`.
   */
  wrapperProps: PropTypes.object,
  /**
   * This is a shorthand for `wrapperProps={{ style: <your styles> }}`.
   * Note that `wrapperStyle` is applied before `wrapperProps`, so the latter
   * will win if it contains a `style` entry.
   */
  wrapperStyle: PropTypes.object,
  /**
   * Whether or not to automatically highlight the top match in the dropdown
   * menu.
   */
  autoHighlight: PropTypes.bool,
  /**
   * Arguments: `isOpen: Boolean`
   *
   * Invoked every time the dropdown menu's visibility changes (i.e. every
   * time it is displayed/hidden).
   */
  onMenuVisibilityChange: PropTypes.func,
  /**
   * Used to override the internal logic which displays/hides the dropdown
   * menu. This is useful if you want to force a certain state based on your
   * UX/business logic. Use it together with `onMenuVisibilityChange` for
   * fine-grained control over the dropdown menu dynamics.
   */
  open: PropTypes.bool,
  debug: PropTypes.bool
};
Autocomplete.defaultProps = {
  value: '',
  wrapperProps: {},
  wrapperStyle: {
    display: 'inline-block'
  },
  inputProps: {},
  onChange: function onChange() {},
  onSelect: function onSelect() {},
  renderMenu: function renderMenu(items, value, style) {
    return React.createElement('div', { style: _extends({}, style, this.menuStyle), children: items });
  },

  menuStyle: {
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2px 0',
    fontSize: '90%',
    position: 'relative',
    overflow: 'auto',
    maxHeight: '50%' },
  autoHighlight: true,
  onMenuVisibilityChange: function onMenuVisibilityChange() {}
};
Autocomplete.keyDownHandlers = {
  ArrowDown: function ArrowDown(event) {
    event.preventDefault();
    var itemsLength = this.getFilteredItems(this.props).length;
    if (!itemsLength) return;
    var highlightedIndex = this.state.highlightedIndex;

    var index = highlightedIndex === null || highlightedIndex === itemsLength - 1 ? 0 : highlightedIndex + 1;
    this.setState({
      highlightedIndex: index,
      isOpen: true
    });
  },
  ArrowUp: function ArrowUp(event) {
    event.preventDefault();
    var itemsLength = this.getFilteredItems(this.props).length;
    if (!itemsLength) return;
    var highlightedIndex = this.state.highlightedIndex;

    var index = highlightedIndex === 0 || highlightedIndex === null ? itemsLength - 1 : highlightedIndex - 1;
    this.setState({
      highlightedIndex: index,
      isOpen: true
    });
  },
  Enter: function Enter(event) {
    var _this5 = this;

    if (!this.isOpen()) {
      // menu is closed so there is no selection to accept -> do nothing
      return;
    } else if (this.state.highlightedIndex == null) {
      // input has focus but no menu item is selected + enter is hit -> close the menu, highlight whatever's in input
      this.setState({
        isOpen: false
      }, function () {
        _this5.refs.input.select();
      });
    } else {
      // text entered + menu item has been highlighted + enter is hit -> update value to that of selected menu item, close the menu
      event.preventDefault();
      var item = this.getFilteredItems(this.props)[this.state.highlightedIndex];
      var value = this.props.getItemValue(item);
      this.setState({
        isOpen: false,
        highlightedIndex: null
      }, function () {
        //this.refs.input.focus() // TODO: file issue
        _this5.refs.input.setSelectionRange(value.length, value.length);
        _this5.props.onSelect(value, item);
      });
    }
  },
  Escape: function Escape() {
    // In case the user is currently hovering over the menu
    this.setIgnoreBlur(false);
    this.setState({
      highlightedIndex: null,
      isOpen: false
    });
  },
  Tab: function Tab() {
    // In case the user is currently hovering over the menu
    this.setIgnoreBlur(false);
  }
};
