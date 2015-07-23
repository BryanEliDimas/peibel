Payola.configure do |config|
  # Example subscription:
  #
  config.subscribe 'payola.project.sale.finished' do |sale|
    # EmailSender.send_an_email(sale.email)

    # 1) find the current user
    @purchaser = User.find_by(email: sale.email)

    # 2) create a join table entry to the user and the project
    # sale.project
# binding.pry
    @purchased_project = PurchasedProject.new(project_id: sale.product_id, user_id: @purchaser.id)
    @purchased_project.save

  end
  #
  # In addition to any event that Stripe sends, you can subscribe
  # to the following special payola events:
  #
  #  - payola.<sellable class>.sale.finished
  #  - payola.<sellable class>.sale.refunded
  #  - payola.<sellable class>.sale.failed
  #
  # These events consume a Payola::Sale, not a Stripe::Event
  #
  # Example charge verifier:
  #
  # config.charge_verifier = lambda do |sale|
  #   raise "Nope!" if sale.email.includes?('yahoo.com')
  # end

  # Keep this subscription unless you want to disable refund handling
  config.subscribe 'charge.refunded' do |event|
    sale = Payola::Sale.find_by(stripe_id: event.data.object.id)
    sale.refund!
  end

  Payola.configure do |payola|
    payola.secret_key = ENV.fetch('STRIPE_SECRET_KEY')
    payola.publishable_key = ENV.fetch('STRIPE_PUBLISHABLE_KEY')
  end

end
