class DashboardController < ApplicationController
  before_action do
    signed_in?
    user_id
  end

  def index
  end
end
