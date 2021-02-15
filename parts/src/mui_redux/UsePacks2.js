import React from 'react';
import Client from './Client';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import UsePackEditNew from './UsePackEditNew';
import Button from '@material-ui/core/Button';
import Autosuggest from 'react-autosuggest';
class UsePacks2 extends React.Component {
  state = {
    // usepacks: [],
    showRemoveIcon: false,
    newPackName: '',
    auto_value: '',
    auto_items: [],
    auto_loading: false,
    release: true,
  };
  constructor(props) {
    super(props);
    this.auto1 = React.createRef();
  }
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps.contact_hetongbh) {
  //     this.setState({ newPackName: nextProps.contact_hetongbh });
  //   }
  //   if (
  //     nextProps.contact_id &&
  //     this.props.contact_id !== nextProps.contact_id
  //   ) {
  //     this.load_data(nextProps.contact_id);
  //   }
  // }
  // load_data = contact_id => {
  //   this.props.store.actions.loadUsePack(contact_id);
  //   // Client.UsePacks(contact_id, usepacks => {
  //   //   if (!this.unload)
  //   //     this.setState({
  //   //       usepacks: usepacks.data, //.slice(0, MATCHING_ITEM_LIMIT),
  //   //     });
  //   // });
  // };
  // componentDidMount = () => {
  //   if (this.props.contact_hetongbh) {
  //     this.setState({ newPackName: this.props.contact_hetongbh });
  //   }
  //   if (this.props.contact_id) {
  //     this.load_data(this.props.contact_id);
  //   }
  // };
  // componentWillUnmount = () => {
  //   this.unload = true;
  // };
  auto_change = (data) => {
    var value = data.value;
    if (value.length > 1) {
      Client.get('/rest/Pack', { search: value, limit: 15 }, (items) => {
        this.setState({ auto_items: items.data });
      });
    }
  };
  auto_select = (event, data) => {
    console.log('selected');
    console.log(data);
    this.addrow(data.suggestion.id);
    //this.setState({auto_value:value, auto_items: [ item ] })
  };
  onSuggestionsClearRequested = () => {};
  // auto_change=(event, value)=>{
  //   console.log("auto_change");
  //   if (value.length>1)
  //   {
  //     this.setState({ auto_value:value, auto_loading: true });
  //     Client.get("/rest/Pack",{search:value} ,(items) => {
  //         this.setState({ auto_items: items.data, auto_loading: false })
  //     });
  //   }
  //   else{
  //     this.setState({ auto_value:value, auto_loading: false });
  //   };
  // };
  // auto_select=(value, item) => {
  //     console.log("selected");
  //     console.log(item);
  //     this.addrow(item.id);
  //     //this.setState({auto_value:value, auto_items: [ item ] })
  // }
  bibei = (id) => {
    this.setState({ auto_value: '必备' });
    console.log(this.auto1);
    this.auto1.current.input.click();
    //this.auto_change(null,"必备");
  };
  fujia = (id) => {
    this.setState({ auto_value: '附加' });
    //this.auto_change(null,"必备");
  };
  new_pack = (id) => {
    var url = '/rest/UsePackEx';
    var data = { name: this.state.newPackName, contact: this.props.contact_id };
    Client.postOrPut(url, data, (res) => {
      var p = res.data;
      const newFoods = this.state.usepacks.concat(p);
      this.setState({ usepacks: newFoods });
    });
  };
  addrow = (pack_id) => {
    var url = '/rest/UsePack';
    var data = { contact: this.props.contact_id, pack: pack_id };
    Client.postOrPut(url, data, (res) => {
      var p = res.data;
      const newFoods = this.state.usepacks.concat(p);
      this.setState({ usepacks: newFoods });
    });
  };
  newpackChange = (e) => {
    this.setState({ newPackName: e.target.value });
  };
  onEditClick = (id) => {};
  onDeleteClick = (itemIndex) => {
    var url = '/rest/UsePack';
    Client.delete1(url, { id: this.state.usepacks[itemIndex].id }, (res) => {
      const filteredFoods = this.state.usepacks.filter(
        (item, idx) => itemIndex !== idx
      );
      this.setState({ usepacks: filteredFoods });
    });
  };
  handleEdit = (idx) => {
    //this.setState({currentIndex:idx,showModal:true});
    console.log(this.props.store.usepacks[idx]);
    this.props.store.actions.loadPackItem(this.props.store.usepacks[idx].pack);
    this.refs.edit1.open2(idx);
  };
  getUsers = (input) => {
    console.log('getUsers');
    console.log(input);
    if (!input) {
      return Promise.resolve({ options: [] });
    }

    return fetch('/rest/Pack?limit=10&search=' + input, {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((json) => {
        var r = { options: json.data };
        console.log(r);
        return r;
      });
  };
  onChange = (event, { newValue }) => {
    console.log('onChange======================');
    console.log(newValue);
    this.setState({
      auto_value: newValue,
    });
  };
  onValueClick = (value) => {
    console.log(value);
  };
  render() {
    const { usepacks } = this.props.store;
    const usepackRows = usepacks.map((usepack, idx) => (
      <TableRow key={idx}>
        <TableCell>{usepack.id}</TableCell>
        <TableCell>{usepack.name}</TableCell>
        <TableCell>
          <Button variant="outlined" onClick={() => this.handleEdit(idx)}>
            编辑
          </Button>
          <Button
            variant="outlined"
            onClick={() => this.onDeleteClick(idx)}
            style={{ marginLeft: '10px' }}
          >
            删除
          </Button>
        </TableCell>
      </TableRow>
    ));

    return (
      <div>
        <UsePackEditNew
          ref="edit1"
          parent={this}
          store={this.props.store}
          index={this.state.currentIndex}
          title="编辑"
        />
        <Table responsive="true" bordered="true" condensed="true">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>名称</TableCell>
              <TableCell>操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{usepackRows}</TableBody>
        </Table>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label>输入包:</label>
          <Autosuggest
            ref={this.auto1}
            inputProps={{
              id: 'states-autocomplete',
              value: this.state.auto_value,
              onChange: this.onChange,
            }}
            onSuggestionSelected={this.auto_select}
            onSuggestionsFetchRequested={this.auto_change}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={(item) => item.name}
            suggestions={this.state.auto_items}
            renderSuggestion={(item) => <span>{item.name}</span>}
          />
          <Button
            variant="outlined"
            style={{ margin: '10px 10px 10px 10px' }}
            className="btn"
            onClick={this.bibei}
          >
            必备
          </Button>
        </div>

        <div
          style={{
            margin: '10px 10px 10px 0px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <label>新包名称：</label>
          <input
            placeholder="新包"
            value={this.state.newPackName}
            onChange={this.newpackChange}
          />
          <Button
            variant="outlined"
            className="btn btn-primary"
            id="id_new_usepack"
            onClick={this.new_pack}
          >
            新包
          </Button>
        </div>
      </div>
    );
  }
}
export default UsePacks2;
