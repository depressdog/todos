class TodosController < ApplicationController
  def index
    @todos = Todo.all.order("id asc")
    render json: @todos
  end
  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors
    end
  end

  protected
  def todo_params
    params.require(:todo).permit(:name)
  end
end
