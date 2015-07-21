require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Peibel
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    config.assets.precompile << /\.(?:svg|eot|woff|ttf)\z/
    # precompile vendor assets
    config.assets.precompile += %w( base.js )
    config.assets.precompile += %w( base.css )
    #controller css assets
    config.assets.precompile += [

                                 'dashboard.css',
                                 'ui.css',
                                 'forms.css',
                                 'tables.css',
                                 'charts.css',
                                 'mail.css',
                                 'maps.css'

                                ]
    #controller js assets
    config.assets.precompile += [

                                 'dashboard.js',
                                 'ui.js',
                                 'forms.js',
                                 'tables.js',
                                 'charts.js',
                                 'mail.js',
                                 'maps.js'

                                ]

    config.assets.initialize_on_precompile = false
  end
end
