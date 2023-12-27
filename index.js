const element = (
  //   Write your code here.
  <div className='container'>
    <h1 className='heading'>Super Over League</h1>
    <div className='teams-cont'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        className='logo'
      />

      <img
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        className='logo'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
