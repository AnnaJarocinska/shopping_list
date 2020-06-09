import React, { Fragment, Suspense } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import '../../i18n'

import SendingEmail from '../email/components/SendingEmail';
import Test from '../components/translation/Test';
import LanguageSelector from '../components/translation/LanguageSelector';



const SendingList = (props) => {

   
//     const shoppingList = [];
//     for (let [key, value] of Object.entries(props.products)){
//         if (props.products[key].list.length !== 0) {
//         shoppingList.push(
//             <div 
//             key={key}>
//                 <p>{value.name}</p>
//                 <ul>{value.list.map((product) =>
//                     <li
//                         id={value.list.indexOf(product)}
//                         key={product}
//                         name={product}
//                         >
//                         {product}
//                     </li>)}
//                 </ul>
//             </div>)
//     }
// }

    return (<Fragment>
                <Suspense fallback={null}>
                {/* <p>Sending list</p> */}
                {/* {shoppingList} */}
                    <LanguageSelector/>
                    <Test/>
                </Suspense>
                 <SendingEmail/>
                <Link to="/">Back to adding recipent</Link>
            </Fragment>
    );
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps, null)(SendingList);