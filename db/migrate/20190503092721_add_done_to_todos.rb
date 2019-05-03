class AddDoneToTodos < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :isDone, :boolean, default: false
  end
end
