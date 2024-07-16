const parent=React.createElement("div",
  {id:"parent"},
   React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I am h2 tag"),
    React.createElement("h2",{},"I am h2 tag") ]
  ))

   



const head=React.createElement("h1",{id:"head"},"Hello from React !");
const roo=ReactDOM.createRoot(document.getElementById("root"))

roo.render(parent);