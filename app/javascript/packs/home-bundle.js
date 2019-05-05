import ReactOnRails from 'react-on-rails';

import Todos from '../bundles/Todos/components/Todos'
import Layout from '../bundles/Layout/components/Layout'
// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
    Todos,
    Layout
});
