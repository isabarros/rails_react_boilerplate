# README

## Steps followed to create this app
1. run `rails new rails_react_boilerplate -d=postgresql --webpack=react --skip-coffee`

2. add lines to `database.yml` below line 19 (under the `default` database):
```
username: postgres
password: <%= ENV['RAILS_REACT_BOILERPLATE_DATABASE_PASSWORD'] %>
```
and run `export RAILS_REACT_BOILERPLATE_DATABASE_PASSWORD="<your_postgres_password>" && rails db:create`

3. run `rails g controller Homepage index && rm app/helpers/homepage_helper.rb app/assets/stylesheets/homepage.scss` and replace line 2 from `config/routes.rb` file with `root 'homepage#index'`