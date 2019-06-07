import React, { Component } from 'react';
import Header from './components/Header/Header';
import PostList from './components/Post/PostList';

class App extends Component {

  state = {
    posts:
    [
      {
        userId: 1,
        id: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
      },
      {
        userId: 2,
        id: 11,
        title: "et ea vero quia laudantium autem",
        body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
      },
      {
        "userId": 6,
        "id": 51,
        "title": "soluta aliquam aperiam consequatur illo quis voluptas",
        "body": "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem"
      },
      {
        "userId": 6,
        "id": 52,
        "title": "qui enim et consequuntur quia animi quis voluptate quibusdam",
        "body": "iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum"
      },
      {
        "userId": 6,
        "id": 53,
        "title": "ut quo aut ducimus alias",
        "body": "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique"
      },
      {
        "userId": 6,
        "id": 54,
        "title": "sit asperiores ipsam eveniet odio non quia",
        "body": "totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia"
      },
      {
        "userId": 6,
        "id": 55,
        "title": "sit vel voluptatem et non libero",
        "body": "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit"
      },
      {
        "userId": 6,
        "id": 56,
        "title": "qui et at rerum necessitatibus",
        "body": "aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi"
      },
      {
        "userId": 6,
        "id": 57,
        "title": "sed ab est est",
        "body": "at pariatur consequuntur earum quidem\nquo est laudantium soluta voluptatem\nqui ullam et est\net cum voluptas voluptatum repellat est"
      },
      {
        "userId": 6,
        "id": 58,
        "title": "voluptatum itaque dolores nisi et quasi",
        "body": "veniam voluptatum quae adipisci id\net id quia eos ad et dolorem\naliquam quo nisi sunt eos impedit error\nad similique veniam"
      },
      {
        "userId": 6,
        "id": 59,
        "title": "qui commodi dolor at maiores et quis id accusantium",
        "body": "perspiciatis et quam ea autem temporibus non voluptatibus qui\nbeatae a earum officia nesciunt dolores suscipit voluptas et\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt"
      },
      {
        "userId": 6,
        "id": 60,
        "title": "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
        "body": "asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis"
      }
    ],
    comments:
    [
      {
        postId: 9,
        id: 42,
        name: "nam qui et",
        email: "Shemar@ewell.name",
        body: "aut culpa quaerat veritatis eos debitis\naut repellat eius explicabo et\nofficiis quo sint at magni ratione et iure\nincidunt quo sequi quia dolorum beatae qui"
      },
      {
        postId: 9,
        id: 43,
        name: "molestias sint est voluptatem modi",
        email: "Jackeline@eva.tv",
        body: "voluptatem ut possimus laborum quae ut commodi delectus\nin et consequatur\nin voluptas beatae molestiae\nest rerum laborum et et velit sint ipsum dolorem"
      },
      {
        postId: 11,
        id: 51,
        name: "molestias et odio ut commodi omnis ex",
        email: "Laurie@lincoln.us",
        body: "perferendis omnis esse\nvoluptate sit mollitia sed perferendis\nnemo nostrum qui\nvel quis nisi doloribus animi odio id quas"
      },
      {
        postId: 11,
        id: 52,
        name: "esse autem dolorum",
        email: "Abigail.OConnell@june.org",
        body: "et enim voluptatem totam laudantium\nimpedit nam labore repellendus enim earum aut\nconsectetur mollitia fugit qui repellat expedita sunt\naut fugiat vel illo quos aspernatur ducimus"
      },
      {
        postId: 11,
        id: 53,
        name: "maiores alias necessitatibus aut non",
        email: "Laverne_Price@scotty.info",
        body: "a at tempore\nmolestiae odit qui dolores molestias dolorem et\nlaboriosam repudiandae placeat quisquam\nautem aperiam consectetur maiores laboriosam nostrum"
      },
      {
        postId: 11,
        id: 54,
        name: "culpa eius tempora sit consequatur neque iure deserunt",
        email: "Kenton_Vandervort@friedrich.com",
        body: "et ipsa rem ullam cum pariatur similique quia\ncum ipsam est sed aut inventore\nprovident sequi commodi enim inventore assumenda aut aut\ntempora possimus soluta quia consequatur modi illo"
      },
      {
        postId: 11,
        id: 55,
        name: "quas pariatur quia a doloribus",
        email: "Hayden_Olson@marianna.me",
        body: "perferendis eaque labore laudantium ut molestiae soluta et\nvero odio non corrupti error pariatur consectetur et\nenim nam quia voluptatum non\nmollitia culpa facere voluptas suscipit veniam"
      }
    ]
  }

  render(){
    return (
      <div className="App">
        <Header/>
        Comment Viewer
        <PostList posts={ this.state.posts }/>
      </div>
    );
  }
}

export default App;
