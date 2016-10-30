import 'styles'
import { sayHelloTo } from './hello'

let module: any;
const hot = module.hot;

const h1 = document.createElement('h1');
h1.innerText = sayHelloTo('Javascript Developer');

document.body.appendChild(h1);

if (hot) {
    hot.accept();
    hot.dispose(() => h1.parentNode.removeChild(h1));
}
