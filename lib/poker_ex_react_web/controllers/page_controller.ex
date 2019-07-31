defmodule PokerExReactWeb.PageController do
  use PokerExReactWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
