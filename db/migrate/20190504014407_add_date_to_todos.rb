class AddDateToTodos < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :date, :datetime
  end
end
