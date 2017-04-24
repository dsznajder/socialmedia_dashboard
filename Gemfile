source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'bootstrap-sass', '~> 3.3', '>= 3.3.7'
gem 'decent_exposure', '~> 3.0.0'
gem 'devise', '~> 4.2.0'
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails', '~> 4.2.2'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'rails', '~> 5.0.1'
gem 'react_on_rails', '~> 6.4.0'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'paperclip', '~> 5.0.0'

group :development, :test do
  gem 'colorize'
  gem 'database_cleaner'
  gem 'factory_girl_rails', '4.7.0'
  gem 'ffaker'
  gem 'fuubar'
  gem 'pry'
  gem 'pry-byebug'
  gem 'pry-doc'
  gem 'pry-rails'
  gem 'pry-remote'
  gem 'pry-stack_explorer'
  gem 'rspec-nc'
  gem 'rspec-rails'
  gem 'rubocop'
end

group :development do
  gem 'better_errors', '2.1.1'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

gem 'mini_racer', platforms: :ruby
