# Steam Games Reviews

:exclamation: :exclamation: AS OF 08/26/2020: App is in progress :exclamation::exclamation:
I created this app as a small project to showcase skills I have been learning (that is, React with Rails). 

This project is currently on hold, since I am focusing my time on my freelancing and developing other projects for real clients. Thank you for your understanding.

In the meantime, you can view my finished personal projects by visiting my [portfolio](https://toriecr.github.io/).

## Short rundown:

 - Made with Ruby 2.7.0, Rails 6.0.3
 - Reviews and ratings can be added; average rating is calculated and added to database (PostgreSQL)

React is installed at the command line:
 
 ```
    rails new video-games --webpack=react --database=postgresql
```

cd into video-games, then run:
```
bundle exec rails db:create
```

**Generating models**
Game model:
```
rails g model Game name slug image_url
```
Reviews model:
```
rails g model Review title description:text score:integer game:belongs_to
```


