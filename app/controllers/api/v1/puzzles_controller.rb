class Api::V1::PuzzlesController < ApplicationController

  before_action :find_puzzle, only: [:update, :show]
  def index
    @puzzles = Puzzle.all
    render json: @puzzles
  end

  def new
    @puzzle = Puzzle.new
  end

  def create
    @puzzle = Puzzle.new(puzzle_params)
    if @puzzle.save
      render json: @puzzle, status: :accepted
    else
      render json: { errors: @puzzle.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def update
    @puzzle.update(puzzle_params)
    if @puzzle.save
      render json: @puzzle, status: :accepted
    else
      render json: { errors: @puzzle.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def puzzle_params
    params.require(:puzzle).permit(:clue, :answer, :category, :likes, :user_id)
  end

  def find_puzzle
    @puzzle = Puzzle.find(params[:id])
  end

end
