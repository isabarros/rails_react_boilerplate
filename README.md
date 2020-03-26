# README

## Steps followed to create this app
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