# README

## Steps followed to create this boilerplate
1. run `rails new rails_react_boilerplate -d=postgresql --webpack=react --skip-coffee`

2. add lines to `config/database.yml` below line 19 (under the `default` database):
```
username: postgres
password: <%= ENV['RAILS_REACT_BOILERPLATE_DATABASE_PASSWORD'] %>
```
3. run `export RAILS_REACT_BOILERPLATE_DATABASE_PASSWORD="<your_postgres_password>" && rails db:create`

4. run `rails g controller Homepage index && rm app/helpers/homepage_helper.rb app/assets/stylesheets/homepage.scss` and replace line 2 from `config/routes.rb` file with `root 'homepage#index'`

5. run `mv app/javascript/packs/hello_react.jsx app/javascript/packs/Index.jsx`

6. add lines to `app/views/layouts/application.html.erb` after line 9 (inside header):
```
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<%= javascript_pack_tag 'Index' %>
```
7. remove all content from `app/views/homepage/index.html.erb`

8. run `yarn add react-router-dom`

9. create file `app/javascript/components/Example.jsx` with the following content:
```
import React from 'react'

const Example = props => (
  <div>This is an example!</div>
)

export default Example
```

10. create file `app/javascript/routes/Index.jsx` with the following content:
```
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Example from "../components/Example";

export default (
  <Router>
    <Switch>
      <Route path="/example" exact component={Example} />
    </Switch>
  </Router>
);
```

11. create file `app/javascript/components/App.jsx` with the following content:
```
import React from "react";
import Routes from "../routes/Index";

export default props => <>{Routes}</>;
```

12. replace file `app/javascript/components/App.jsx` content with the following content:
```
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})
```

13. add this line to `config/routes.rb` file:
```
get '/*path' => 'homepage#index'
```

Based on: https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-project-with-a-react-frontend