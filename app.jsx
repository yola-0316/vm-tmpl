import * as React from "react";
import * as Client from "react-dom/client";
import * as Server from "react-dom/server";

// function MyApp() {
//   const [count, setCount] = React.useState(0);
//   return (
//     <h1>
//       Hello, world!
//       <button onClick={() => setCount(count + 2)}>click me! {count}</button>
//     </h1>
//   );
// }

// const container = document.getElementById("root");
// const root = Client.createRoot(container);
// root.render(<MyApp />);

// const panel = VM.getPanel({
//   content: <Greetings />,
//   theme: 'dark',
//   style: [globalCss, stylesheet].join('\n'),
// });
// panel.wrapper.style.top = '100px';
// panel.setMovable(true);
// panel.show();

// VM.showToast('hello');
// VM.showToast(VM.h('div', {}, 'hello, world'));
VM.showToast(Server.renderToStaticMarkup(<div>hello, world</div>));
