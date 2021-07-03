import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MenuHome from './Page/MenuHome';
import MenuMakanan from './Page/MenuMakanan';
import MenuMinuman from './Page/MenuMinuman';
import Kontak from './Page/Kontak';

const AppRoute = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={MenuHome} />
                <Route path="/menu_makanan" component={MenuMakanan} />
                <Route path="/menu_minuman" component={MenuMinuman} />
                <Route path="/kontak" component={Kontak} />
            </Switch>
        </div>
    );
}

export default AppRoute;