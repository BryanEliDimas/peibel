20.times do
  User.create(first_name: Faker::Name.name,
  last_name: Faker::Name.last_name,
  username: Faker::Internet.user_name(Faker::Internet.user_name, %w(. _ -)),
  email: Faker::Internet.free_email,
  password: "12345678",
  password_confirmation: "12345678",
  bio: Faker::Lorem.paragraph,
  skills: "Javascript, Angular, ReactJS, UX",
  city: "houston",
  state: "texas")
end
