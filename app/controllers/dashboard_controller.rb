class DashboardController < ApplicationController
  before_action do
    signed_in?
  end

  def index
  end
end
