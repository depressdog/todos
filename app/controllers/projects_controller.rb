class ProjectsController < ApplicationController
  def index
    @projects = Project.all.order("name asc")
    render json: @projects
  end
  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project
    else
      render json: @project.errors
    end
  end
  def destroy
    @project = Project.find(params[:id])
    if @project.destroy
      head :no_content, status: :ok
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end
  protected
  def project_params
    params.require(:project).permit(:name, :color_id)
  end
end
