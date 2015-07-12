class PagesController < ApplicationController
  def new_project
  end

  def create_project

  end

  def blank_page2
  end

  private
  def the_title
    @title = params[:title]
  end

end
