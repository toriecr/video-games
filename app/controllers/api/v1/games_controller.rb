module Api
  module V1
    class GamesController < ApplicationController
      protect_from_forgery with: :null_session
      
      def index
        games = Game.all
        render json: GameSerializer.new(games, options).serialized_json
      end
      
      def show
        game = Game.find_by(slug: params[:slug])
        render json: GameSerializer.new(game, options).serialized_json
      end
      
      def create
        game = Game.new(game_params)
        if game.save
          render json: GameSerializer.new(game).serialized_json
        else
          render json: { error: game.errors.messages }, status: 422
        end
      end
      
      def update
        game = Game.find_by(slug: params[:slug])
        if game.update
          render json: GameSerializer.new(game, options).serialized_json
        else
          render json: { error: game.errors.messages }, status: 422
        end
      end
      
      def destroy
        game = Game.find_by(slug: params[:slug])
        if game.destroy
          head :no_content
        else
          render json: { error: game.errors.messages }, status: 422
        end
      end
      
      private
      
        def game_params
          params.require(:game).permit(:name, :image_url)
        end
        
        def options
          @options ||= { include: %i[reviews] }
        end
        
    end
  end
end