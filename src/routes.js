import React from 'react';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';


import Application from './pages/Main';
import Vote from './pages/vote';
import OurProducts from './pages/ourproducts';
import Comprar from './pages/comprar';

// import Community from './pages/community';

// export default class Routes extends Component {

//     render() {
//         // var itemID = 0;
//         // const itemId = product_card.map((item) => {
//         //     itemID = item.id;
//         //     return itemID;
//         // })
//         // console.log(product_card.map((item) => {
//         //     console.log(item.id)
//         // }));

//         // console.log('/vote?itemId=' + itemID)

//         return(
//             <BrowserRouter>
//                 <Switch>
//                     <Route exact path='/' component={Application} />
//                     <Route path='/vote/:id' component={Vote} />
//                     <Route path='/ourproducts' component={OurProducts} />
//                 </Switch>
//             </BrowserRouter>
//         );
//     }
// }

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Application} />
                <Route path='/vote/:id' component={Vote} />
                <Route path='/ourproducts' component={OurProducts} />
                <Route path='/comprar' component={Comprar} />
                {/* <Route path='/community' component={Community} /> */}
            </Switch>
        </BrowserRouter>
    );
}