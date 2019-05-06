class Api::V1::GuessesController < ApplicationController

  before_action :find_guess, only: [:update]
  def index
    @guesses = Guess.all
    render json: @guesses
  end

  def update
    @guess.update(guess_params)
    if @guess.save
      render json: @guess, status: :accepted
    else
      render json: { errors: @guess.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def guess_params
    params.permit(:content)
  end

  def find_guess
    @guess = Guess.find(params[:id])
  end

end
