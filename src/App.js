import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import ProfileImg from './profile.png'

function App() {
  return (
    <div className="App">
      <Header name="Yao Hai" job="Software Engineer" imgName={ProfileImg} />
      <Section
        name="About me"
        content="I am an advocate of self-improvement and I want to help people improve their lives through knowledge and application"
      />
      <Section
        name="Contact me"
        content="Email: yaohai1216@gmail | Linkedin:https://www.linkedin.com/in/yaohai1216/"
      />

    </div>
  );
}

export default App;
