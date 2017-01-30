Rails.application.routes.draw do
  root to: 'dashboard#index'
  devise_for :users

  resources :posts
  resources :comments
  resources :likes
end
