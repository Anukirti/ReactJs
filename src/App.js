import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import States from './components/States';
import Counter from './components/Counter';
import Event from './components/Events';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/myStyles.css'
import styles from './components/appStyle.module.css'
import Form from './components/Form';
import Lifecycle from './components/Lifecycle';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComponents/PureComponent';
import ParentComp from './components/PureComponents/ParentComponent';
import RefsDemo from './components/Refs/RefsDemo';
import ClassRef from './components/Refs/ClassRef';
import FRParent from './components/Refs/ForwardingRef';
import PortalDemo from './PortalDemo';
import { createPortal } from 'react-dom';
import ErrorBoundary from './components/ErrorBoundary';
import EBHero from './components/EBHero';
import ClickCounter from './components/HigherOrderComp/ClickCounter';
import HoverCounter from './components/HigherOrderComp/HoverCounter';
import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
import User from './components/RenderProps/User';
import RenderCounter from './components/RenderProps/RenderCounter';
import { UserProvider } from './components/Context/userContext';
import ComponentC from './components/Context/ComponentC';
import GetPostList from './components/HTTP/GetPostList';
import PostForm from './components/HTTP/PostForm';

// function App() {
//   return (
//     <div className="App">
//       <greet></greet>
//     </div>
//   );
// }

class App extends Component {
  render(){
    return(
      <div className='App'>
          {/* <Greet name="Clark" heroName="Superman">
            <button>Action</button>
          </Greet> */}
          {/* <Greet name="Bruce" heroName="Batman">
            <p>This is children props</p>
          </Greet>
          
          <Greet name="Diana" heroName="Wonder Woman"/>
       
       <Welcome name="Clark" heroName="Superman"></Welcome>
       <Welcome name="Diana" heroName="Wonder Woman"></Welcome> */}
        {/* <Hello/> */}

        {/* Using State which will change the text visitor to subscriber on click */}
        {/* <Welcome name="Bruce" heroName="Batman"></Welcome>
       <States/>
       <Counter></Counter>
       <Event></Event> */}
       {/* <EventBind/> */}


       {/* <ParentComponent/> */}

       {/* <ConditionalRendering/> */}

       {/* <ListRendering/> */}

       {/* <Stylesheet primary = {true} ></Stylesheet> */}

       {/* <Inline/> */}

       {/* <h1 className='error'>Error</h1>
       <h1 className={styles.success}> Success</h1>

       <Form/> */}

       {/* <Lifecycle/> */}

       {/* <FragmentDemo/> */}

       {/* <Table/> */}

      {/* <ParentComp/> */}

      {/* <RefsDemo/> */}

      {/* <ClassRef/> */}

      {/* <FRParent/> */}
      
      {/* {createPortal(
        <PortalDemo/>,
        document.getElementById('portal-root')
      )} */}

      {/* <ErrorBoundary>
      <EBHero heroName="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <EBHero heroName="Supperman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <EBHero heroName="Joker"/>
      </ErrorBoundary> */}

      {/* <ClickCounter name='Anukirti' />
      <HoverCounter/> */}

      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn) => isLoggedIn ? 'Anukirti' : 'Guest'} />
       */}

      {/* <RenderCounter render = {(count, incrementCount) => (
        <ClickCounterTwo count = {count} incrementCount = {incrementCount} />
      )}/>

      <RenderCounter render = {(count, incrementCount) => (
        <HoverCounterTwo count = {count} incrementCount = {incrementCount} />
      )}/> */}
      
      {/* <UserProvider value = "Anukirti">
        <ComponentC/>
      </UserProvider> */}

      {/* <GetPostList/> */}
      <PostForm/>
      </div>
    );
  }
}
export default App;
