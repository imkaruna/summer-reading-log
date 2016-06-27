Rails.application.routes.draw do
  devise_for :users
  resources :users, defaults: { format: 'json' }
  resources :books, defaults: { format: 'json' }
  root to: 'welcome#index'
  get '*path' => 'welcome#index'
end
