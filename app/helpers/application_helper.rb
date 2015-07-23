module ApplicationHelper
  def controller?(*controller)
    controller.include?(params[:controller])
  end

  def action?(*action)
    action.include?(params[:action])
  end

  def display_in_dollars(amount)
    s = amount.to_s.split(//)
    dollars = s[0..-3]
    cents = s.last(2)
    whole_amount = "#{dollars.join}.#{cents.join}"
    whole_amount
  end

end
