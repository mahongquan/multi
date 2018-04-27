import React from 'react';
import  {ButtonGroup,Table,Modal,Navbar,Nav,NavItem,DropdownButton,MenuItem} from 'react-bootstrap';
var Aria2 = require('aria2');
var aria2 = new Aria2({
  host: '127.0.0.1',
  port: 6800,
  secure: false,
  secret: '',
  path: '/jsonrpc'
});
/////////////
class DlgFolder2 extends React.Component{
  state={ 
      showModal: false,
      hiddenPacks:true,
      error:"",
      version:"",
      enabledFeatures:[]
    }
  close=()=>{
    this.setState({ showModal: false });
  }

  open=()=>{
   this.setState({ showModal: true });
   aria2.getVersion().then(
            (res)=>{
                console.log(res);
                this.setState({version:""+res.version,enabledFeatures:res.enabledFeatures});
            },
            function (err) {
              console.log('error', err)
            }
        );
  }
  render=()=>{
    const features = this.state.enabledFeatures.map((contact, idx) => (
         <li key={idx} >
            {contact}
         </li>));
    return (
        <Modal show={this.state.showModal} onHide={this.close}  dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>服务器信息</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          aria2 version:{this.state.version}
          <h3>已启用功能</h3>
          {features}
          </Modal.Body>
        </Modal>
    );
  }
}
export default class  Browser extends React.Component {
    state={
        version:"",
        newurl:"",
        stopped:[],
        active:[],
        waiting:[]
    }
    componentDidMount=()=>{
        console.log("mount======");
        aria2.getVersion().then(
            (res)=>{
                console.log(res);
                this.setState({version:""+res.version});
            },
            function (err) {
              console.log('error', err)
            }
        )
        aria2.onsend =this.onsend;
        aria2.onmessage =this.onmessage;
        aria2.onopen=this.onopen;
        aria2.onclose=this.onclose;
        aria2.onDownloadStart =this.onDownloadStart;
    }
    onsend=(m)=>{
        console.log("send");
        console.log(m);
    }
    onmessage=(m)=>{
        console.log("onmessage");
        console.log(m);
    }
    onopen=()=>{
        console.log("open");
    }
    onclose=()=>{
        console.log("close");
    }
    onDownloadStart=()=>{
        console.log("download start");
    }
    urlChange=(e)=>{
        //console.log(e);
        this.setState({newurl:e.target.value});
    }
    addClick=()=>{
        aria2.send('addUri',[this.state.newurl], function (err, res) {
            console.log(err || res)
        })
    }
    showAllClick=()=>{
        this.showActiveClick();
        this.showWaitingClick();
        this.showStopClick();
    }
    showStopClick=()=>{
        var offset=0;
        var num=10;
        aria2.send('tellStopped',offset,num, (err, res)=>{
            console.log(err || res)
            if(res){
                this.setState({stopped:res});
            }
        })
    }
    showActiveClick=()=>{
        var offset=0;
        var num=10;
        aria2.send('tellActive', (err, res)=>{
            console.log(err || res)
            if(res){
                this.setState({active:res});
            }
        })
    }
    serverInfoClick=()=>{
        this.refs.dlgserverinfo.open();
    }
    showWaitingClick=()=>{
        var offset=0;
        var num=10;
        aria2.send('tellWaiting',offset,num, (err, res)=>{
            console.log(err || res)
            if(res){
                this.setState({waiting:res});
            }
        })
    }
    render=()=>{
        const activeRows = this.state.active.map((contact, idx) => (
          <tr key={idx} >
            <td>{contact.gid}</td>
            <td>{contact.files.map((file,idx)=>(<span key={idx}>{file.uris[0].uri}</span>))}</td>
            <td>{contact.status}</td>
            <td>{contact.errorCode}</td>
            <td>{contact.errorMessage}</td>
            <td>{contact.downloadSpeed}</td>
            <td>{contact.totalLength}</td>
            <td>{contact.completedLength}</td>
            <td>
              <a>{contact.gid}</a>
            </td>
         </tr>));
         const waitingRows = this.state.waiting.map((contact, idx) => (
          <tr key={idx} >
            <td>{contact.gid}</td>
            <td>{contact.files.map((file,idx)=>(<span key={idx}>{file.uris[0].uri}</span>))}</td>
            <td>{contact.status}</td>
            <td>{contact.errorCode}</td>
            <td>{contact.errorMessage}</td>
            <td>{contact.downloadSpeed}</td>
            <td>{contact.totalLength}</td>
            <td>{contact.completedLength}</td>
            <td>
              <a>{contact.gid}</a>
            </td>
         </tr>));
        const contactRows = this.state.stopped.map((contact, idx) => (
          <tr key={idx} >
            <td>{contact.gid}</td>
            <td>{contact.files.map((file,idx)=>(<span key={idx}>{file.uris[0].uri}</span>))}</td>
            <td>{contact.status}</td>
            <td>{contact.errorCode}</td>
            <td>{contact.errorMessage}</td>
            <td>{contact.downloadSpeed}</td>
            <td>{contact.totalLength}</td>
            <td>{contact.completedLength}</td>
            <td>
              <a>{contact.gid}</a>
            </td>
         </tr>));
        return(
            <div>
<Navbar className="navbar-inverse">
    <Navbar.Header>
      <Navbar.Brand>
        <a>Aria2 WebUI</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <DropdownButton title="添加" id="DropdownButton1" >
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3" active>Active Item</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>
      <DropdownButton title="管理"  id="DropdownButton2">
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3" active>Active Item</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>
      <DropdownButton title="设置"  id="DropdownButton3">
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3" active>Active Item</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>
      <DropdownButton title="语言"  id="DropdownButton4" >
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3" active>Active Item</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>
    </Nav>
   
</Navbar>
            aria2 version:{this.state.version}
                <DlgFolder2 ref="dlgserverinfo"/>
                <button onClick={this.serverInfoClick}>服务器信息</button>
                <input value={this.state.newurl} onChange={this.urlChange}></input>
                <button onClick={this.addClick}>add</button>
                <button onClick={this.showAllClick}>showAll</button>
                <button onClick={this.showStopClick}>showStop</button>
                <button onClick={this.showActiveClick}>showActive</button>
                <button onClick={this.showWaitingClick}>showWaiting</button>
                <table className="table-bordered">
                    <thead>
                    <tr>
                        <th>gid</th>
                        <th>files</th>
                        <th>status</th>
                        <th>errCode</th>
                        <th>errMessage</th>
                        <th>downloadSpeed</th>
                        <th>totalLength</th>
                        <th>completedLength</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody id="contact-list">
                        {activeRows}
                        {waitingRows}
                        {contactRows}
                    </tbody>
                </table>
            </div>);
    }
}