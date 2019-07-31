use Mix.Config

# Configure your database
config :poker_ex_react, PokerExReact.Repo,
  username: "postgres",
  password: "postgres",
  database: "poker_ex_react_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :poker_ex_react, PokerExReactWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
