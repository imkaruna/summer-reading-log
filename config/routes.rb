Rails.application.routes.draw do

  devise_for :readers
  resources :readers, defaults: { format: 'json' }
  resources :books, defaults: { format: 'json' }
  # namespace :api do
  #     resources :books, except: :edit
  #   end
  #
  #   get ':id' => 'welcome#index'
  #   get 'new' => 'welcome#index'
    root to: 'welcome#index'
    get '*path' => 'welcome#index'
end
