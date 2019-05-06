class TodosController < ApplicationController
  def index
    @todos = Todo.where(date: (Time.now.midnight - 1.day)..Time.now.midnight).order("date asc")
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
  def update
    @todo = Todo.find(params[:id])
    @todo.update_attributes(todo_params)
    render json: @todo
  end
  def destroy
    @todo = Todo.find(params[:id])
    if @todo.destroy
      head :no_content, status: :ok
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  protected
  def todo_params
    params.require(:todo).permit(:name, :isDone, :date, :color_id)
  end
end
