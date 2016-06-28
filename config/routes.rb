Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations"}
  resources :users, defaults: { format: 'json' } do
      post 'update_status'
    end
  resources :books, defaults: { format: 'json' }

  root to: 'welcome#index'
  get '*path' => 'welcome#index'
end
