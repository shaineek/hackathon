class App extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        users: [],
        column: 'recent'
      };
    }
    
    getData() {
      axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/'+this.state.column)
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    }
    
    componentDidMount() {
      this.getData();
    }
    
    handleClick(param, e) {
      this.setState({
        column: param
      },
      this.getData);
    }
    
    render() {
      let count = 0;
      const userList = this.state.users.map(
        (users) => {
          count++;
          return (
            <tr key={count}>
              <td>{count}</td>
              <td>
                <img src={users.img} className="userImg" />
                {users.username}
              </td>
              <td>{users.recent}</td>  
              <td>{users.alltime}</td>                  
            </tr>
          );
        });
                                          
      return (
        <div className="container">
          <h3 className="text-center display-4">Camper Leaderboard</h3>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Camper Name</th>
                <th className={ this.state.column == "recent" ? "sort sort-true" : "sort" } onClick={this.handleClick.bind(this, 'recent')}>Points in past 30 days</th>
                <th className={ this.state.column == "alltime" ? "sort sort-true" : "sort" } onClick={this.handleClick.bind(this, 'alltime')}>All time points</th>
              </tr>
            </thead>
            <tbody>
              {userList}
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));