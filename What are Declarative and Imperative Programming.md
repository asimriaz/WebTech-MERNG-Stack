**What are Declarative and Imperative Programming?**

According to [The](https://en.wikipedia.org/wiki/Declarative_programming) [Information](https://en.wikipedia.org/wiki/Imperative_programming):

> **Declarative programming** __ is a programming paradigm … that expresses the logic of a computation without describing its control flow._

>**Imperative programming** __ is a programming paradigm that uses statements that change a program's state._

"Programming Paradigm" sounds super pretentious and is definitely a phrase some of my college profs _loved. _If you've had a formal CS education, these definitions may not be that cryptic, but still I find that examples go a long way in helping.

Before I get too far though, I want to stress that there is nothing wrong with either of these approaches. They absolutely have strengths and weaknesses, but one approach will always be right. For instance, declarative programming can result in less direct control, which may not be correct for applications like embedded systems where ["the right answer delivered too late becomes the wrong answer."](https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=2&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwjGvp7d-Z3SAhVJ_WMKHftKBgQQFggjMAE&amp;url=http%3A%2F%2Fcacm.acm.org%2Fmagazines%2F2002%2F6%2F7037-middleware-for-real-time-and-embedded-systems%2Ffulltext&amp;usg=AFQjCNEtH_D9tnPbEvM3MB9oetQb7nm-3Q)

Alright here's a metaphor.

```
Declarative Programming is like asking your friend to draw a landscape. You don't care how they draw it, 
that's up to them.
```
```
Imperative Programming is like your friend listening to Bob Ross tell them how to paint a landscape. 
While good ole Bob Ross isn't exactly commanding, he is giving them step by step directions to get the 
desired result.
```
Tell Me In Code

Alright, alright, here's some code examples. Here we just have a button that changes it's color on click. I'll start with the imperative example:

```js
const container = document.getElementById(‘container’);
const btn = document.createElement(‘button’); 
btn.className = ‘btn red’;
btn.onclick = function (event) {
    if (this.classList.contains(‘red’)) {
        this.classList.remove(‘red’);
        this.classList.add(‘blue’);
    } else {
        this.classList.remove(‘blue’);
        this.classList.add(‘red’);
    }
}; 
container.appendChild(btn);
```

And our declarative React example:

```js
class Button extends React.Component{  this.state = { color: 'red' }  
handleChange = () => {
    const color = this.state.color === 'red' ? 'blue' : 'red';
    this.setState({ color });
  }  
render() {
    return (<div>
      <button 
         className=`btn ${this.state.color}`
         onClick={this.handleChange}>
      </button>
    </div>);
  }
}
```

The differences here may be subtle. We still have logic that says if red then blue, but there's one huge difference. The React example never actually touches an element. it simply declares an element _should_ be rendered given our current state. It does not actually manipulate the DOM itself.

Reaching for direct DOM manipulation is a mistake I felt myself making often when I first started working with React. It's also a problem I've noticed in developers coming from a background that's heavy in jQuery.

When writing React, it's often good not to think of _how_ you want to accomplish a result, but instead _what_ the component should look like in it's new state. This sets us up for a good control flow where state goes through a series of predictable and replicable mutations. This doesn't just apply to components either, but also to application state. Libraries like [Redux](http://redux.js.org/) will help enforce this method of architecting, but they aren't necessary to achieve it.