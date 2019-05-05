class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.integer :color_id

      t.timestamps
    end
    add_index :projects, :color_id
  end
end
