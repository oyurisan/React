// import React,{Component} from 'react';

// class App extends Component{
  // render(){
  //   const yuri = "oyuriさん";
  //   const dom = <h1>{yuri}</h1>;
  //   return dom;

  // }
  // render(){
  //   return React.createElement("div",null,"hello");
  // }

  // render(){
  //   const tasks=[
  //     {id:1,title:"one"},
  //     {id:2,title:"two"},
  //     {id:3,title:"three"}
  //   ];
  //   const yuri=tasks.map((oyu,index)=>{
  //     return <div className="onyu" key={oyu.id}>{/*コメントアウト*/}IDは{oyu.id}タイトルは{oyu.title}</div>
  //   });
  //   return(<div>{yuri}</div>)
  // };

  //条件分岐
  //即時関数を使う
  // render(){
  //   let isMorning=true
  //   return(
  //     <div>
  //     {(()=>{
  //       if(isMorning){
  //         return <span>おはよう</span>
  //       }else{
  //         return <span>こんにちわ</span>
  //       }
  //     })()}
  //     </div>
  //   )
  // }

  //&&を使う
  // render(){
  //   let isMorning =true
  //   return(
  //     <div>
  //       {isMorning && <span>あにょん</span>}
  //     </div>
  //   )
  // }

  //三項演算子
  // render(){
  //   let isMorning=false
  //   return(
  //     <div>
  //       {isMorning ? <span>サカゆり</span>:<span>おおゆり</span>}
  //     </div>
  //   )
  // }

//関数でコンポーネントを表現
  // render(){
  //   let isMorning=false
  //   function Greeting(){
  //     if(isMorning){
  //       return <span>アロハ</span>
  //     }else{
  //       return <span>おはな</span>
  //     }
  //   }
  //   return(
  //     <div>
  //       <Greeting/>
  //     </div>
  //   )
  // }

//メソッドとして用意する
  // renderWithCondition(isMorning){
  //   if(isMorning){
  //     return <span>おはよう</span>
  //   }else{
  //     return <span>あんよん</span>
  //   }
  // }
  // render(){
  //   let isMorning=true
  //   return(
  //     <div>
  //       {this.renderWithCondition(isMorning)}
  //     </div>
  //   )
  // }
//イベント取得
//Reactのイベントはキャメルケース
//イベントハンドラは文字列ではなく関数を渡すことろに注意する
//   render(){
//     return (
//       <div>
//       <button onClick={()=>{console.log('おんゆ')}}>送信</button>
//       <button onDubleClick={()=>{console.log('あんよ')}}>送信</button>
//       </div>
//     )
//   }
// }



// export default App;
//関数コンポーネントで行う場合はuseStateをimportする
// import React, { Component , useState} from "react"
// import PropTypes from 'prop-types'

// const App=()=>{
//   return <div>
//     <Huga/><Tai/><Keisan/>
//   <button onClick={() =>{ console.log('ほし')}}> on</button>
//   <Tai/><Huga/>
//   </div>
// }

// const Huga=()=>{
//   return <div>oyurioyuri</div>
// }
// const Tai=()=>{
//   return <div>大宮です</div>
// }
// const Keisan=(okane)=>{
//   return okane*20
// }
// export default App;

//props
// const Members =[
//   {name:"みゆき"},
//   {name:"みほ",age:24},
//   {age:26},
//   {name:"ゆり",age:26}
// ]
// //親コンポーネント
// const App = () =>{
//   return(
//     <div>
//       {
//         // map (繰り返し処理) = 配列.map((受け取る中身,インデックス)=>{return  条件})
//         //配列の中身から、条件に合致した新しいメンバーの配列を作成する
//         Members.map((kojin,index)=>{
//           return <Member name={kojin.name} age={kojin.age}  key={index}/>
//         })
//       }
//     </div>
//   )
// }
//子コンポーネント
// const Member = (props) =>{
//   return <div>私は{props.name}です。年齢は{props.age}となります</div>
// }
// //値が入っていない場合は以下の値を返すようにする
// Member.defaultProps={
//   age:100,
//   name:"三井住友海上"
// }
// //型チェック
// //Mebmerコンポーネントのpropsに対して行う
// //nameの型チェックをしておりstring型のチェックをしている
// //『チェックするプロパティ：PropTypes.設定』
// Member.check={
//   name:PropTypes.string,
//   age:PropTypes.number.isRequired
//   //numberであり、値が必須（isRequired）であるかどうか
// }

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//       count:0
//     }
//   }
//   render(){
//     return (
//       <React.Fragment>
//         <p>現在の数字は{this.state.count}です</p>
//         <button onClick={() => this.setState({ count: this.state.count +1})}>+1</button>
//         <button onClick={() => this.setState({ count: this.state.count -1})}>-1</button>
//         <button onClick={() => this.setState({ count:0})}>0</button>
//       </React.Fragment>
//     )
//   }
// }

// const App = () => {
//   const [count, setCount]= useState(0)
//   return (
//     <div>
//       <p>現在の数字は{count}です</p>
//       <button onClick= {() =>  {return setCount(count+1)}}>+1</button>
//       <button onClick= {() =>  {return setCount(count+1)}}>-1</button>
//       <button onClick= {() =>  {return setCount(0)}}>0</button>
//     </div>
//   )
// }



// export default App

// import React, {Component, useState} from "react";

// const App = () => {
//   const todos =[
//     {message:"こんにちわ"},
//     {message:"お疲れ様"}
//   ]
//   const [todo, setState] =useState(tuika)
//   return(
//     <React.Fragment>
//       <p>Todoリスト</p>
//       <div>
//         {
//           todos.map((todo,index)=>{
//             return  <p>{todo.message}</p>
//           })
//         }
//       </div>
//       <input type="text"></input>
//       <button onClick={(tuika)=>{return this.setState}}>送信</button>
//     </React.Fragment>
//   )
// }
// export default App
import React, {Component} from "react"

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      todo:'',
      todos:[
      ]
    }
  }
  delete(index){
    this.state.todos.splice(index,1)
    this.setState({todo:this.state.todos})
  }
  // kesu(){

  // }
  render(){
    const num=this.state.todos.map((todoname,index)=>{return <div key={index}>{todoname}<button onClick={()=> this.delete(index)}>削除</button></div>})
    const num2=(e)=>{this.setState({todo:e.target.value})}
  
   return(
     <div>
     <h3>Todoリスト</h3>
     <input type="text" value={this.state.todo} onChange={num2}></input>
     <button onClick={()=>this.setState({todos:this.state.todos.concat(this.state.todo)})}>追加</button>
     <ul>
       <li>{num}</li>
     </ul>
       </div> 
   )
    
  }
}
export default App;
