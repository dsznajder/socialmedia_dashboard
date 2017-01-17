source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.1'
gem 'react_on_rails', '~> 6.4.0'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails', '~> 4.2'
gem 'jbuilder', '~> 2.5'

group :development, :test do
  gem 'factory_girl_rails', '4.7.0'
  gem 'rubocop'
  gem 'rspec-rails'
  gem 'rspec-nc'
  gem 'ffaker'
  gem 'fuubar'
  gem 'pry'
  gem 'pry-rails'
  gem 'pry-remote'
  gem 'pry-doc'
  gem 'pry-stack_explorer'
  gem 'pry-byebug'
  gem 'database_cleaner'
  gem 'colorize'
end

group :development do
  gem 'better_errors', '2.1.1'
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
