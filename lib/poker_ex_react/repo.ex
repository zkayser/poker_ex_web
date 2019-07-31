defmodule PokerExReact.Repo do
  use Ecto.Repo,
    otp_app: :poker_ex_react,
    adapter: Ecto.Adapters.Postgres
end
