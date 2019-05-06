Rails.application.routes.draw do
  namespace :api do
     namespace :v1 do
       resources :users
       resources :puzzles
       resources :guesses
     end
   end

end
