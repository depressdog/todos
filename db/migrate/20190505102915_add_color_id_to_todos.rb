class AddColorIdToTodos < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :color_id, :integer
    add_index :todos, :color_id
  end
end
